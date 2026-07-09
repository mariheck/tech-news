import { subscribeToStorage } from '@/storage';
import { expect, test, vi } from 'vitest';

test('subscribeToStorage calls the listener on a storage event', () => {
  const onStoreChange = vi.fn();
  const unsubscribe = subscribeToStorage(onStoreChange);

  window.dispatchEvent(new StorageEvent('storage'));

  expect(onStoreChange).toHaveBeenCalledTimes(1);
  unsubscribe();
});

test('subscribeToStorage stops calling the listener after unsubscribe', () => {
  const onStoreChange = vi.fn();
  const unsubscribe = subscribeToStorage(onStoreChange);
  unsubscribe();

  window.dispatchEvent(new StorageEvent('storage'));

  expect(onStoreChange).not.toHaveBeenCalled();
});
