export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADMIN_LOGIN = 'ADMIN_LOGIN';

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const admin_login = () => ({
  type: ADMIN_LOGIN,
});
