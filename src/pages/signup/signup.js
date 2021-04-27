import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import Inputs from "../../components/Inputs/inputs";
import Buttons from "../../components/Buttons/buttons";

function Signup() {
    const appHistory = useHistory();
    const [userFullName, setFullName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [confirmUserPass, setConfirmUserPass] = useState("");

    function toLoginPage() {
        appHistory.push("/login");
    };

    function updateFullName(event) {
        setFullName(event.target.value);
        console.log(userFullName);
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
        let signObject = { fullName: userFullName,
                             email: userEmail,
                             password1: userPass,
                             password2: confirmUserPass
                         }
        let jsonObject = JSON.stringify(signObject);

        fetch('http://localhost//5000/api/v1/signup', {
            method: 'POST',
            body: jsonObject,
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(res => {console.log(res);});
    };


    return(
        <div className="signup-container">
            <div className="signup-left-container">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info.</p>
                <Buttons text="Log in" onclick={toLoginPage}/>
            </div>

            <div className="signup-right-container">

                <div className="">
                    <h2 className="">Create an account</h2>
                </div>

                <div className="">
                    <form>
                        <div className="">
                            <label>Name</label>
                            <Inputs type="text" placeholder="Enter Your Full Name" onchange={updateFullName}/>
                        </div>

                        <div className="">
                            <label>Email</label>
                            <Inputs type="text" placeholder="Enter Your Email" onchange={updateEmail}/>
                        </div>

                        <div className="">
                            <label>Password</label>
                            <Inputs type="password" placeholder="Enter Your Password" onchange={updateUserPass}/>
                        </div>

                        <div className="">
                            <label>Confirm Password</label>
                            <Inputs type="password" placeholder="Repeat Your Password" onchange={updateConfirmPass}/>
                        </div>

                        <Buttons text="Sign Up" onclick={submitButton}/>
                        <p>Have an account? &bull; <a href="#" onClick={toLoginPage}>Login here</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;