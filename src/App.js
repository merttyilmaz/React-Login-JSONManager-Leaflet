import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Equipments from './components/Equipments'
import Map from './components/Map'
import Alarm from './components/Alarm'

const App = () => {
  const [token, setToken] = useState(false)

  return (
    <Router>
      <Switch>
        <Route exact path="/login" >
          <Login setToken={setToken} />
        </Route>
        <Route path="/equipments" >
          <Equipments token={token} />
        </Route>
        <Route exact path="/map" >
          <Map token={token} />
        </Route>
        <Route exact path="/alarm" >
          <Alarm token={token} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App