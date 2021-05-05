import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import LeftBox from '../../components/Left-Box/leftBox';
import SignupForm from '../../components/Forms/signup-form';

function Signup() {
    // const appHistory = useHistory();
    // const [userFullName, setFullName] = useState("");
    // const [userEmail, setEmail] = useState("");
    // const [userPass, setUserPass] = useState("");
    // const [confirmUserPass, setConfirmUserPass] = useState("");

    // function toLoginPage() {
    //     appHistory.push("/login");
    // };

    // function updateFullName(event) {
    //     setFullName(event.target.value);
    //     // console.log(userFullName);
    // };

    // function updateEmail(event) {
    //     setEmail(event.target.value);
    //     // console.log(userEmail);
    // };

    // function updateUserPass(event) {
    //     setUserPass(event.target.value);
    //     // console.log(userPass);
    // };

    // function updateConfirmPass(event) {
    //     setConfirmUserPass(event.target.value);
    //     // console.log(confirmUserPass);
    // };

    // function submitButton(event) {
    //     event.preventDefault();
    //     let signObject = { fullName: userFullName,
    //                          email: userEmail,
    //                          password1: userPass,
    //                          password2: confirmUserPass
    //                      }
    //     let jsonObject = JSON.stringify(signObject);

    //     fetch('http://localhost:5000/api/v1/signup', {
    //         method: 'POST',
    //         body: jsonObject,
    //         headers: { 'Content-Type': 'application/json'}
    //     })
    //     .then(res => res.json())
    //     .then(res => {console.log(res);});
    // };


    return(
        <div className="main-container">
            {/* <div className="signup-left-container">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info.</p>
                <Buttons text="Log in" onclick={toLoginPage}/>
            </div> */}
            <LeftBox brand="Stareer" msghead="Neep help?" msgbody="Sign up and manage your career now."/>
            {/* <div className="signup-right-container">
                <div className="">
                    <h2 className="">Create an account</h2>
                </div>

                <div className="">
                    <form>
                        <Inputs type="text" placeholder="Enter Your Full Name" onchange={updateFullName}/>
                        <Inputs type="email" placeholder="Enter Your Email" onchange={updateEmail}/>
                        <Inputs type="password" placeholder="Enter Your Password" onchange={updateUserPass}/>
                        <Inputs type="password" placeholder="Repeat Your Password" onchange={updateConfirmPass}/>
                        <Buttons text="Sign Up" onclick={submitButton}/>
                        <p>Have an account? &bull; <a href="#" onClick={toLoginPage}>Login here</a></p>
                    </form>
                </div>
            </div> */}
            <SignupForm/>
        </div>
    );
};

export default Signup;