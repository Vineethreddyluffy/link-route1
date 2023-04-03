import {BrowserRouter, Switch, Route} from 'react-router-dom'

import GetHome from './components/Home'

import GetHeader from './components/Header'

import GetAbout from './components/About'
import GetContact from './components/Contact'
import GetNotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <GetHeader />
    <Switch>
      <Route exact path="/" component={GetHome} />
      <Route exact path="/about" component={GetAbout} />
      <Route exact path="/contact" component={GetContact} />
      <Route exact component={GetNotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
