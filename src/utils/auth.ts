// utils/auth.ts
import { jwtDecode } from "jwt-decode";
import type { DecodedToken } from "./Types";


export const getToken = () => localStorage.getItem('shopper token');

export const isTokenValid = (token: string): boolean => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
};

export const getUserFromToken = (): DecodedToken | null => {
  const token = getToken();
  if (!token || !isTokenValid(token)) return null;
  return jwtDecode<DecodedToken>(token);
};
