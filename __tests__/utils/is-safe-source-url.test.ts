import { isSafeSourceUrl } from '@/utils';
import { expect, test } from 'vitest';

test('isSafeSourceUrl accepts an https URL', () => {
  expect(isSafeSourceUrl('https://example.com/path')).toBe(true);
});

test('isSafeSourceUrl accepts an http URL', () => {
  expect(isSafeSourceUrl('http://example.com')).toBe(true);
});

test('isSafeSourceUrl accepts a scheme-less URL (the content convention)', () => {
  expect(isSafeSourceUrl('drafts.csswg.org/scroll-animations')).toBe(true);
});

test('isSafeSourceUrl rejects a javascript: scheme', () => {
  expect(isSafeSourceUrl('javascript:alert(1)')).toBe(false);
});

test('isSafeSourceUrl rejects a javascript: scheme regardless of case', () => {
  expect(isSafeSourceUrl('JavaScript:alert(1)')).toBe(false);
});

test('isSafeSourceUrl rejects leading whitespace before a javascript: scheme', () => {
  expect(isSafeSourceUrl('  javascript:alert(1)')).toBe(false);
});

test('isSafeSourceUrl rejects a tab-obfuscated javascript: scheme', () => {
  expect(isSafeSourceUrl('java\tscript:alert(1)')).toBe(false);
});

test('isSafeSourceUrl rejects a data: scheme', () => {
  expect(isSafeSourceUrl('data:text/html,<script>alert(1)</script>')).toBe(
    false
  );
});

test('isSafeSourceUrl rejects a vbscript: scheme', () => {
  expect(isSafeSourceUrl('vbscript:msgbox(1)')).toBe(false);
});
