export const saveTokenToLocalStorage = (token: string): void => {
  localStorage.setItem("token", token);
};

export const getTokenFromLocalStorage = (): string | null => {
  return localStorage.getItem("token");
};
