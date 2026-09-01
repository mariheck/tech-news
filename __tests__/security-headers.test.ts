import { SECURITY_HEADERS } from '@/security-headers';
import { expect, test } from 'vitest';

const headerValue = (key: string): string | undefined =>
  SECURITY_HEADERS.find((header) => header.key === key)?.value;

test('SECURITY_HEADERS blocks MIME-type sniffing', () => {
  expect(headerValue('X-Content-Type-Options')).toBe('nosniff');
});

test('SECURITY_HEADERS trims the referrer cross-origin and on downgrade', () => {
  expect(headerValue('Referrer-Policy')).toBe(
    'strict-origin-when-cross-origin'
  );
});

test('SECURITY_HEADERS forbids framing to prevent clickjacking', () => {
  expect(headerValue('X-Frame-Options')).toBe('DENY');
});

test('SECURITY_HEADERS pins HTTPS for two years across subdomains', () => {
  expect(headerValue('Strict-Transport-Security')).toBe(
    'max-age=63072000; includeSubDomains; preload'
  );
});

test('SECURITY_HEADERS disables speculative DNS prefetching', () => {
  expect(headerValue('X-DNS-Prefetch-Control')).toBe('off');
});

test('SECURITY_HEADERS exposes exactly the audited set', () => {
  expect(SECURITY_HEADERS.map((header) => header.key).sort()).toEqual(
    [
      'Referrer-Policy',
      'Strict-Transport-Security',
      'X-Content-Type-Options',
      'X-DNS-Prefetch-Control',
      'X-Frame-Options'
    ].sort()
  );
});
