export const subscribeToStorage = (onStoreChange: () => void) => {
  window.addEventListener('storage', onStoreChange);

  return () => {
    window.removeEventListener('storage', onStoreChange);
  };
};
