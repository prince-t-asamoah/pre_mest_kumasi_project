import {Switch, Route} from 'react-router-dom';

import Landing from '../pages/Landing/landing';
import Login from '../pages/Login/login';
import Signup from '../pages/Signup/signup';
import Dashboard from '../pages/Dashboard/dashboard';

function AppRouter() {
    return(
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default AppRouter;