import { useState, useEffect } from 'react';

// to get value from local Storage
function getLocalStorageValue(key, initialValue) {
  const storedValue = JSON.parse(localStorage.getItem(key));
  if (storedValue) return storedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

// to set value of the local storage

// JSON.stringify(localStorage.setItem(key, initialValue));

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getLocalStorageValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    // eslint-disable-next-line
  }, [value]);

  return [value, setValue];
}
