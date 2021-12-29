import logo from './logo.svg';
import './App.css';
import "./sass/main.scss";
import Login from './pages/Login';
import { Router, Switch, Route,  } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Listuser from './pages/Listuser';
export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/listuser" component={Listuser} />
      </Switch>
    </Router>
  );
}

export default App;
