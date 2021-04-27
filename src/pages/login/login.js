import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import Inputs from "../../components/Inputs/inputs";
import Buttons from "../../components/Buttons/buttons";

function Login() {
    const appHistory = useHistory();
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    
    function toSignUp() {
        appHistory.push("/signup");
    };

    function updateUserName(event) {
        setUserName(event.target.value);
        console.log(userName);
    };

    function updateUserPassword(event) {
        setUserPassword(event.target.value);
        console.log(userPassword);
    };

    function submitButton(event) {
        event.preventDefault();
        let loginObject = { username: userName, password: userPassword};
        let jsonObject = JSON.stringify(loginObject);

        fetch('http://localhost:5000/api/v1/login', {
            method: 'POST',
            body: jsonObject,
            headers: { 'Content-Type': 'application/json' }
        } )
        .then(res => res.json())
        .then(res => {console.log(res)});
    };

   

    return(
        <div className="login-container">
            <div className="login-left-container">
                <div>
                    <header>Brand Name</header>
                </div>

                <div>
                    <h1>Welcome Back!</h1>
                    <p>Log in to continue access</p>
                </div>

                <div>
                    <footer>Brand Name &copy; 2020</footer>
                </div>
            </div>

            <div className="login-right-container">
                <form>
                    <header><h1>Log in</h1></header>
                    <div>
                        <Inputs type="text" placeholder="Username or Email" classname="" onchange={updateUserName} />
                    </div>
                    
                    <div>
                        <Inputs type="password" placeholder="Password" onchange={updateUserPassword}/>
                    </div>

                    <p><span><Inputs type="checkbox"/></span> Remember me</p>
                    <Buttons text="Login" onclick={submitButton}/>
                    
                    <p>Don't have an account? &bull; <a href="#" onClick={toSignUp}> Sign up</a></p>
                </form>
            </div>
        </div>
    );
};

export default Login;