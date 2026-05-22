import type { FrontmatterValue, ParsedMarkdown } from '@/types';

const FRONTMATTER_DELIMITERS = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:?\d{2})?$/;
const INTEGER_OR_FLOAT = /^-?\d+(\.\d+)?$/;

export const parseFrontmatter = <T = Record<string, FrontmatterValue>>(
  raw: string
): ParsedMarkdown<T> => {
  const match = raw.match(FRONTMATTER_DELIMITERS);
  if (!match) {
    throw new Error('parseFrontmatter: missing `---` delimiters.');
  }
  const [, yamlBlock, content] = match;
  const data = parseYamlBlock(yamlBlock) as T;
  return { data, content };
};

const parseYamlBlock = (
  block: string
): Record<string, FrontmatterValue> => {
  const lines = block.split('\n');
  const data: Record<string, FrontmatterValue> = {};
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || isIndented(line)) {
      i++;
      continue;
    }

    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) {
      i++;
      continue;
    }

    const key = line.slice(0, colonIdx).trim();
    const inlineValue = line.slice(colonIdx + 1).trim();

    if (inlineValue) {
      data[key] = parseScalar(inlineValue);
      i++;
      continue;
    }

    const continuation: string[] = [];
    let j = i + 1;
    while (j < lines.length && (isIndented(lines[j]) || !lines[j].trim())) {
      continuation.push(lines[j]);
      j++;
    }
    i = j;

    const firstContent = continuation.find((l) => l.trim());
    if (firstContent && firstContent.trim().startsWith('- ')) {
      data[key] = continuation
        .filter((l) => l.trim().startsWith('- '))
        .map((l) => parseScalar(l.trim().slice(2).trim()));
    } else {
      const joined = continuation.join(' ').trim();
      data[key] = parseValue(joined, 0).value;
    }
  }

  return data;
};

const isIndented = (line: string): boolean =>
  line.length > 0 && (line.startsWith(' ') || line.startsWith('\t'));

const parseScalar = (s: string): FrontmatterValue => {
  if (s === 'true') return true;
  if (s === 'false') return false;
  if (s.startsWith("'") && s.endsWith("'")) {
    return s.slice(1, -1);
  }
  if (s.startsWith('"') && s.endsWith('"')) {
    return s.slice(1, -1);
  }
  if (ISO_DATE.test(s)) return new Date(s);
  if (INTEGER_OR_FLOAT.test(s)) return Number(s);
  return s;
};

const parseValue = (
  s: string,
  pos: number
): { value: FrontmatterValue; nextPos: number } => {
  while (pos < s.length && /\s/.test(s[pos])) pos++;

  const ch = s[pos];
  if (ch === "'") return parseSingleQuoted(s, pos);
  if (ch === '"') return parseDoubleQuoted(s, pos);
  if (ch === '[') return parseFlowSequence(s, pos);
  if (ch === '{') return parseFlowMapping(s, pos);

  let end = pos;
  while (end < s.length && !',]}'.includes(s[end])) end++;
  return { value: parseScalar(s.slice(pos, end).trim()), nextPos: end };
};

const parseSingleQuoted = (
  s: string,
  pos: number
): { value: string; nextPos: number } => {
  pos++;
  let result = '';
  while (pos < s.length && s[pos] !== "'") {
    result += s[pos];
    pos++;
  }
  return { value: result, nextPos: pos + 1 };
};

const parseDoubleQuoted = (
  s: string,
  pos: number
): { value: string; nextPos: number } => {
  pos++;
  let result = '';
  while (pos < s.length && s[pos] !== '"') {
    if (s[pos] === '\\' && pos + 1 < s.length) {
      result += s[pos + 1];
      pos += 2;
    } else {
      result += s[pos];
      pos++;
    }
  }
  return { value: result, nextPos: pos + 1 };
};

const parseFlowSequence = (
  s: string,
  pos: number
): { value: FrontmatterValue[]; nextPos: number } => {
  pos++;
  const items: FrontmatterValue[] = [];
  while (pos < s.length) {
    while (pos < s.length && /[\s,]/.test(s[pos])) pos++;
    if (s[pos] === ']') return { value: items, nextPos: pos + 1 };
    const parsed = parseValue(s, pos);
    items.push(parsed.value);
    pos = parsed.nextPos;
  }
  throw new Error('parseFrontmatter: unterminated flow sequence.');
};

const parseFlowMapping = (
  s: string,
  pos: number
): { value: Record<string, FrontmatterValue>; nextPos: number } => {
  pos++;
  const obj: Record<string, FrontmatterValue> = {};
  while (pos < s.length) {
    while (pos < s.length && /[\s,]/.test(s[pos])) pos++;
    if (s[pos] === '}') return { value: obj, nextPos: pos + 1 };

    let keyEnd = pos;
    while (keyEnd < s.length && s[keyEnd] !== ':') keyEnd++;
    const key = s.slice(pos, keyEnd).trim().replace(/^['"]|['"]$/g, '');
    pos = keyEnd + 1;
    const parsed = parseValue(s, pos);
    obj[key] = parsed.value;
    pos = parsed.nextPos;
  }
  throw new Error('parseFrontmatter: unterminated flow mapping.');
};
