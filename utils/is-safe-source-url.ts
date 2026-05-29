/**
 * Guards a source URL against scheme-based href injection (`javascript:`,
 * `data:`, `vbscript:`, …). Parsing via the WHATWG `URL` constructor mirrors how
 * the browser will read the `href`, including its removal of tabs/newlines, so
 * obfuscated schemes like `java\tscript:` are caught too.
 *
 * A value with no parseable scheme is relative / scheme-less — the established
 * content convention (e.g. `drafts.csswg.org/scroll-animations`) — and is safe.
 * When a scheme IS present it must be http or https.
 */
export const isSafeSourceUrl = (value: string): boolean => {
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    return true;
  }
  return parsed.protocol === 'http:' || parsed.protocol === 'https:';
};
