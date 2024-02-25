export const getStorageServices = (key: string) => {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export const setStorageServices = <T>(key: string, value: T) => {
  const body = typeof value === "string" ? value : JSON.stringify(value);
  sessionStorage.setItem(key, body);
};

export const removeStorageServices = (key: string) => {
  sessionStorage.removeItem(key);
};
