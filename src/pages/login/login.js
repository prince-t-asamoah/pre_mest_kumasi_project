import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import {Link} from 'react-router-dom';

import LeftBox from '../../components/Left-Box/leftBox';
import LoginForm from '../../components/Forms/login-form';
import Buttons from '../../components/Buttons/buttons';
import Inputs from '../../components/Inputs/inputs';

function Login() {
    // const appHistory = useHistory();
    // const [values, setValues] = useState({});
    
    // function toSignUp() {
    //     appHistory.push("/signup");
    // };

    // function updateValues(event) {
    //     setValues({...values, [event.target.name]: event.target.value});
    //     // console.log(userName);
    // };

    // function submitButton(event) {
    //     event.preventDefault();

    //     // let loginObject = { username: userName, password: userPassword};
    //     let jsonObject = JSON.stringify(values);

    //     fetch('http://localhost:5000/api/v1/login', {
    //         method: 'POST',
    //         body: jsonObject,
    //         headers: { 'Content-Type': 'application/json' }
    //     } )
    //     .then(res => res.json())
    //     .then(res => {console.log(res)});
    // };

   

    return(
        <div className="main-container">
            <LeftBox brand="Stareer" msghead="Welcome back!" msgbody="Login to start working"/>
            <LoginForm/>
        </div>
    );
};

export default Login;