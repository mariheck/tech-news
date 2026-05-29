/**
 * Guards a slug used as a filesystem path segment against directory traversal.
 * Slugs are kebab-case filenames (see CLAUDE.md: "Article slug = filename"), so
 * anything outside `[a-z0-9-]` — `/`, `.`, `..` — is rejected before it can
 * reach `path.join` in a loader. Defense-in-depth: routes already 404 unknown
 * params (`dynamicParams = false`), but the loaders stay self-defending.
 */
export const isSafeSlug = (value: string): boolean => /^[a-z0-9-]+$/.test(value);
