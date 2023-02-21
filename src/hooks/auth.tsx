import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Route, Redirect, RouteProps } from 'react-router-dom'

export const authContext = createContext<{
  username: string;
  isLogin: boolean;
  signin: (s: string) => void;
  signout: () => void;
}>({
} as any)

export function ProvideAuth({ children }: { children: ReactNode }) {
  const auth = useProvideAuth()
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

export function useAuth() {
  return useContext(authContext)
}

export function useProvideAuth() {
  const [username, setUsername] = useState('')

  const isLogin = useMemo(() => !!username, [username])

  const signin = (s: string) => {
    setUsername(s)
  }
  const signout = () => {
    setUsername('')
  }

  return { username, isLogin, signin, signout }
}

interface PrivateRouteProps extends RouteProps {
  children: ReactNode
}

export function PrivateRoute({ children, ...rest }: PrivateRouteProps) {
  let auth = useAuth()
  return (
    <Route {...rest} render={({ location }) => auth.isLogin ?
      children :
      <Redirect to={{ pathname: '/login', state: { from: location } }} />
    } />
  )
}
