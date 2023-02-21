import { ReactNode } from "react";
import { Route, Redirect, RouteProps } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { RootState } from "../store";

interface PrivateRouteProps extends RouteProps {
  children: ReactNode
}

export function PrivateRoute({ children, ...rest }: PrivateRouteProps) {
  const isLogin = useSelector((state: RootState) => state.auth.username !== '')
  return (
    <Route {...rest} render={({ location }) => isLogin ?
      children :
      <Redirect to={{ pathname: '/login', state: { from: location } }} />
    } />
  )
}
