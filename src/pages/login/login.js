import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import Inputs from "../../components/Inputs/inputs";
import Buttons from "../../components/Buttons/buttons";

import "../../css/w3.css";
import "./login.css";

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
    };

    return(
        <div className="w3-container login-container">
            <div className="w3-container">
                <h2 className="w3-center">Login</h2>
            </div>

            <div className="w3-container">
                <form> 
                    <div className="w3-margin-bottom">
                        <label>Username</label>
                        <Inputs type="text" placeholder="Enter Your Username" onchange={updateUserName}/>
                    </div>

                    <div className="w3-margin-bottom">
                        <label>Password</label>
                        <Inputs type="password" placeholder="Enter Your Password" onchange={updateUserPassword}/>
                    </div>

                    <p><a href="#">Forgot password?</a></p>
                    <Buttons text="Login" onclick={submitButton}/>
                    <p>Don't have an account? Sign up <a href="#" onClick={toSignUp}>here</a></p>
                </form>
            </div>
        </div>
    );
};

export default Login;