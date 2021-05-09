import { Link } from 'react-router-dom';
// import { useAppContext } from '../../context/appContext';

import Inputs from '../Inputs/inputs';
import Buttons from '../Buttons/buttons';
import { useState } from 'react';
// import LoginLogic from '../../controllers/login';

function LoginForm() {
    // const { toPage } = useAppContext();
    const [values, setValues] = useState({});
    // const [showLoder, setShowLoader] = useState({});

    // function updateValues(e) {
    //     setValues({ ...values, [e.target.name]: e.target.value });
    // };

    // function submitBtn(e) {
    //     e.preventDefault();

    //     let jsonObj = JSON.stringify(values);

    //     fetch('http://localhost:5000/api/v1/login', {
    //         method: 'POST',
    //         body: jsonObj,
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.success) {
    //                 setShowLoader(false);
    //                 toPage("/dashboard");
    //             } else if (res.failure) {
    //                 alert("Wrong email or password");
    //                 setShowLoader(false);
    //             } else {
    //                 alert("User doesn't exist");
    //             }
    //         });
    // };

    return (
        
        <div className="right-box">
            {/* <LoginLogic/> */}
            <form>
                <header><h1>Login</h1></header>
        
                <Inputs type="email" placeholder="Enter email" name="email" classname="w3-input"/>
                <Inputs type="password" placeholder="Enter password" name="password" classname="w3-input"/>

                <Buttons text="Login" classname="w3-button w3-block w3-theme"/>
                <p>Don't have an account ?&bull; <Link to="/signup">Signup here</Link></p>
            </form>
        </div>
    );
}

export default LoginForm;