// import { useAppContext } from '../../context/appContext';
// import { useState } from 'react';
// import {Link} from 'react-router-dom';

import LeftBox from '../../components/Left-Box/leftBox';
import LoginForm from '../../components/Forms/login-form';
// import Buttons from '../../components/Buttons/buttons';
// import Inputs from '../../components/Inputs/inputs';

function Login() {
    // const {toPage} = useAppContext();
    
    return(
        <div className="main-container">
            <LeftBox brand="artfiva" msghead="Welcome back!" msgbody="Login to start working"/>
            <LoginForm/>
        </div>
    );
};

export default Login;