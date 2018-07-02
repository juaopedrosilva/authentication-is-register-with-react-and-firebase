import React, { Component } from 'react' 
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import PageLogin from './component/login'
import PageAdmin from './component/admin'
import PageRegister from './component/register'
import route from './store/router'

class App extends Component {
  render() {
    return ( 
      <Router>
        <div> 
          <Route exact path={route.LOGIN} component={PageLogin} />   
          <Route exact path={route.REGISTER} component={PageRegister} />   
          <Route exact path={route.ADMIN} component={PageAdmin} />   
        </div> 
      </Router>
       
    )
  }
}

export default App
