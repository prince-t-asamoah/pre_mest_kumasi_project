import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import Inputs from "../../components/Inputs/inputs";
import Buttons from "../../components/Buttons/buttons";
import "../../css/w3.css";


function Signup() {

    const appHistory = useHistory();
    const [userName, setUserName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [confirmUserPass, setConfirmUserPass] = useState("");

    function toLoginPage() {
        appHistory.push("/login");
    };

    function updateUserName(event) {
        setUserName(event.target.value);
        console.log(userName);
    };

    function updateEmail(event) {
        setEmail(event.target.value);
        console.log(userEmail);
    };

    function updateUserPass(event) {
        setUserPass(event.target.value);
        console.log(userPass);
    };

    function updateConfirmPass(event) {
        setConfirmUserPass(event.target.value);
        console.log(confirmUserPass);
    };

    function submitButton(event) {
        event.preventDefault();
        let signObject = { username: userName,
                             email: userEmail,
                             password1: userPass,
                             password2: confirmUserPass
                         }
        let jsonObject = JSON.stringify(signObject);

        fetch('http://localhost//5000/api/v1/signup', {
            method: 'POST',
            body: signObject,
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(res => {console.log(res);});
    };


    return(
        <div className="w3-container">
            <div className="w3-container">
                <h2 className="w3-center">Create you account</h2>
            </div>

            <div className="w3-container">
                <form>
                    <div className="w3-margin-bottom">
                        <label>Username</label>
                        <Inputs type="text" placeholder="Enter Your Username" onchange={updateUserName}/>
                    </div>

                    <div className="w3-margin-bottom">
                        <label>Email</label>
                        <Inputs type="text" placeholder="Enter Your Last Email" onchange={updateEmail}/>
                    </div>

                    <div className="w3-margin-bottom">
                        <label>Password</label>
                        <Inputs type="password" placeholder="Enter Your Password" onchange={updateUserPass}/>
                    </div>

                    <div className="w3-margin-bottom">
                        <label>Confirm Password</label>
                        <Inputs type="password" placeholder="Repeat Your Password" onchange={updateConfirmPass}/>
                    </div>

                    <Buttons text="Sign Up" onclick={submitButton}/>
                    <p>Have an account? &bull; <a href="#" onClick={toLoginPage}>Login here</a></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;