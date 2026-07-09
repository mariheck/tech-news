import 'server-only';
import path from 'node:path';

export const CONTENT_ROOT =
  process.env.CONTENT_ROOT ?? path.join(process.cwd(), 'content');
