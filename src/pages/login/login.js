// import { useAppContext } from '../../context/appContext';
import {useState} from 'react';
import {Link} from 'react-router-dom';

import Buttons from '../../components/Buttons/buttons';
import Inputs from '../../components/Inputs/inputs';

function Login() {
    const [values, setValues] = useState({});

    function updateValues(e) {
        setValues({ ...values, [e.target.name]: [e.target.value] });
        console.log(setValues);
    }

    function submit(e) {
        e.preventDefault();
    //     const logObj = { values };
    //     const jsonObj = JSON.stringify(logObj);

    //     fetch('http://localhost:5000/api/v1/signup', {
    //         method: 'POST',
    //         body: jsonObj,
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //         .then(res => res.json())
    //         .then(res => { console.log(res); });
    };
    
    return(
        <div className="">
            <form>
                <header><h1>Welcome back!</h1></header>

                <Inputs type="email" placeholder="Enter email" name="email" classname="w3-input" onchange={updateValues}/>
                <Inputs type="password" placeholder="Enter password" name="password" classname="w3-input" onchange={updateValues}/>

                <Buttons text="Login" classname="w3-button w3-block w3-theme" onclick={submit}/>
                <p>Don't have an account? <Link to="/signup">Signup</Link></p>
            </form>
        </div>

        // <div className="main-container">
        //     <LeftBox brand="artfiva" msghead="Welcome back!" msgbody="Login to start working"/>
        //     <LoginForm/>
        // </div>
    );
};

export default Login;