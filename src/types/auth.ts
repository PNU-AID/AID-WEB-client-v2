export interface AuthInfo {
  nickname: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  authInfo?: AuthInfo;
  login: (token: string) => void;
  logout: () => void;
}

export interface AuthContext {
  authState: AuthState;
  authDispatch: React.Dispatch<AuthAction>;
}

export enum AuthActionType {
  LOGIN = 0,
  LOGOUT,
}

interface LoginAction {
  type: AuthActionType.LOGIN;
  payload: {
    authInfo: AuthInfo;
  };
}

interface LogoutAction {
  type: AuthActionType.LOGOUT;
}

export type AuthAction = LoginAction | LogoutAction;
