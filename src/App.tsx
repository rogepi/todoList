import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from './pages/login'
import Dash from './pages/dash'
import Todo from './pages/todo'
import NoMatch from './pages/404'
import { PrivateRoute, ProvideAuth } from './hooks/auth'



function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="h-screen w-screen flex flex-col justify-center items-center font-semibold">
          <Switch>
            <Route exact path="/" >
              <Redirect to="/login" />
            </Route>
            <Route path="/login" >
              <Login />
            </Route>
            <PrivateRoute path="/dash">
              <Dash />
            </PrivateRoute>
            <PrivateRoute path="/todo">
              <Todo />
            </PrivateRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
        
      </Router>
    </ProvideAuth>

  )
}

export default App
