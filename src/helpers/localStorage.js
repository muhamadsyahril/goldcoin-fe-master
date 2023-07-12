const StoredItemKey = 'accessToken' | 'user';

export const storeLocalStorageItem = ({
  storageKey = StoredItemKey,
  storageValue,
}) => {
  try {
    if (!storageKey && !storageValue) return null;
    const formatValue = JSON.stringify(storageValue);
    return localStorage.setItem(storageKey, formatValue);
  } catch (error) {
    return error;
  }
};

export const retrieveLocalStorageItem = (storageKey = StoredItemKey) => {
  try {
    if (!storageKey) return null;
    const value = localStorage.getItem(storageKey);
    const formatValue = JSON.parse(value);
    return formatValue;
  } catch (error) {
    return error;
  }
};

export const removeLocalStorageItem = (storageKey = StoredItemKey) => {
  try {
    if (!storageKey) return null;
    return localStorage.removeItem(storageKey);
  } catch (error) {
    return error;
  }
};
