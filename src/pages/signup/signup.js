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
    };
    return(
        <div className="w3-container">
            <div className="w3-container">
                <h2 className="w3-center">SignUp Form</h2>
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
                    <p>Have an account? Login <a href="#" onClick={toLoginPage}>here</a></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;