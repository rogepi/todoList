import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from './pages/login'
import Dash from './pages/dash'
import Todo from './pages/todo'
import NoMatch from './pages/404'
import { PrivateRoute, ProvideAuth } from './hooks/auth'
import { useTranslation } from 'react-i18next'



function App() {
  const { i18n } = useTranslation()
  return (
    <ProvideAuth>
      <Router>
        <div className="h-screen w-screen font-semibold">
          <header className='p-3 flex justify-end px-10 space-x-3'>
            <button onClick={() => i18n.changeLanguage('en-US')} className="p-1 hover:bg-zinc-700 rounded">
              En
            </button>
            <button onClick={() => i18n.changeLanguage('zh-CN')} className="p-1 hover:bg-zinc-700 rounded">
              汉
            </button>
          </header>
          <main className='mt-[20vh] flex flex-col justify-center items-center'>
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
          </main>
        </div>

      </Router>
    </ProvideAuth>

  )
}

export default App
