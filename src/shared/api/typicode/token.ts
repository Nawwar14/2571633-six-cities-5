import { Token } from '../../types';

const AUTH_TOKEN_KEY_NAME = 'guess-six-cities-token';

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveToken = (token: Token | undefined): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token ?? '');
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};