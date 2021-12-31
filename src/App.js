
import "./sass/main.scss";
import Login from './pages/Login';
import { Router, Switch, Route,  } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import AddUser from './pages/AddUser';
import ListUser from './pages/ListUser';

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dangnhap" component={Login} />
        <Route exact path="/laydanhsachnguoidung" component={ListUser} />
        <Route exact path="/themnguoidung" component={AddUser} />
      </Switch>
    </Router>
  );
}

export default App;
