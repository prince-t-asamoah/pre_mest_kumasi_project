import { Switch, Route } from 'react-router-dom';

// Stylesheets
import "./css/w3.css";
import "./css/w3-theme-blue.css";
import './css/style.css';

//Pages
import Landing from './pages/Landing/landing';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default App;
