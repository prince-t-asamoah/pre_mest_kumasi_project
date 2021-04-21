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
        <div className="w3-container login-container">
            <div className="w3-container">
                <h2 className="w3-center">Log in to Msys</h2>
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

                    <p></p>
                    <Buttons text="Login" onclick={submitButton}/>
                    <p><a href="#">Forgot password?</a> &bull; <a href="#" onClick={toSignUp}> Signup here</a></p>
                </form>
            </div>
        </div>
    );
};

export default Login;