import { Switch, Route } from 'react-router-dom';

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
