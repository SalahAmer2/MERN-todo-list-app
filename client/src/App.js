import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterOrLogin from "./components/register-or-login/register-or-login.component";
import Home from "./components/home/home.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Registration from "./components/register/registeration.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={RegisterOrLogin} />
          <Route path="/registration" component={Registration} />
          {/* <Route path="/login" component={Login} /> */}
          <Route component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;