import { createBrowserHistory } from 'history';
import { Switch, Router } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading/Loading';
import Checkout from './pages/Checkout/Checkout';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Detail/Detail';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import News from './pages/News/News';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Dashboard from "./pages/Admin/Dashboard/Dashboard"
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate"
import Films from './pages/Admin/Films/Films';
import Showtime from './pages/Admin/Showtime/Showtime';
import AddNew from './pages/Admin/Films/AddNew/AddNew';
import Edit from './pages/Admin/Films/Edit/Edit';

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/profile" exact Component={Profile} />

        <UserTemplate path="/register" exact Component={Register} />
        <UserTemplate path="/login" exact Component={Login} />

        <AdminTemplate path="/admin" exact Component={Dashboard} />
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} />
        <AdminTemplate path="/admin/films/showtime/:id/:tenPhim" exact Component={Showtime} />

        <CheckoutTemplate path="/checkout/:id" exact Component={Checkout} />

      </Switch>
    </Router>
  );
}

export default App;
