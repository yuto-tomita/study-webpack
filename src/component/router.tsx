import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Sample from './sample'

const App = (): JSX.Element => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/test" className="text-blue-500 hover:opacity-50">
            サンプルページ
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/test">
          <Sample />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
