import { AuthAction, AuthActionType, AuthContext, AuthState } from '@type/auth';
import { createContext, useContext, useReducer } from 'react';

const initialAuthState: AuthState = {
  isAuthenticated: false,
  authInfo: {
    nickname: 'Kim',
    email: '3I8Ua@example.com',
  },
  login: () => {},
  logout: () => {},
} as const;

const AuthCtx = createContext<AuthContext>({
  authState: initialAuthState,
  authDispatch: () => {},
});

export function useAuthCtx() {
  return useContext(AuthCtx);
}

function authReducer(state: AuthState, action: AuthAction): AuthState {
  let newState = { ...state };
  switch (action.type) {
    case AuthActionType.LOGIN:
      newState = {
        ...state,
        isAuthenticated: true,
        authInfo: action.payload.authInfo,
      };
      break;
    case AuthActionType.LOGOUT:
      newState = {
        ...state,
        isAuthenticated: false,
        authInfo: undefined,
      };
      break;
  }

  return newState;
}

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  return (
    <AuthCtx.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthCtx.Provider>
  );
}
