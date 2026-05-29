/**
 * Hardening response headers applied to every route via `headers()` in
 * `next.config.ts`. Intentionally CSP-free: a nonce-based policy would force
 * dynamic rendering (defeating SSG) and a non-nonce policy would need
 * `'unsafe-inline'`, so a Content-Security-Policy is deferred to a later
 * decision. These five directives carry no breakage risk on a static site.
 */
export const SECURITY_HEADERS: readonly { key: string; value: string }[] = [
  // Stop browsers from guessing a response's type away from its Content-Type.
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Send the full referrer same-origin, only the origin cross-origin, nothing
  // on an HTTPS→HTTP downgrade.
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Refuse to be embedded in any frame (clickjacking).
  { key: 'X-Frame-Options', value: 'DENY' },
  // Force HTTPS for two years, subdomains included, and qualify for preload.
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  // Don't leak browsing intent through speculative DNS lookups.
  { key: 'X-DNS-Prefetch-Control', value: 'off' }
];
