import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import App from '../screens/App';
import StepTwo from '../screens/StepTwo'
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/step-two" component={StepTwo} />
    </Switch>
  </Router>
)
export default Routes