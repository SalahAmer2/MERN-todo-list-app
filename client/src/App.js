import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/home/home.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import RegisterOrLogin from "./components/register-or-login/register-or-login.component";
import Registration from "./components/register/registration.component";
import RegSuccess from "./components/regSuccess/regSuccess.component";
import Login from "./components/login/login.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={RegisterOrLogin} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/registrationSuccessful" component={RegSuccess} />
          <Route path="/home" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;