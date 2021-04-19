import { useHistory } from 'react-router-dom';

import Inputs from "../../components/Inputs/inputs";
import Buttons from "../../components/Buttons/buttons";
import "../../css/w3.css";


function Signup() {

    const appHistory = useHistory();

    function toLoginPage() {
        appHistory.push("/login");
    };

    return(
        <div className="w3-container">
            <div className="w3-container">
                <h2 className="w3-center">SignUp Form</h2>
            </div>

            <div className="w3-container">
                <form>
                    <div className="w3-margin-bottom">
                        <label>Email</label>
                        <Inputs type="text" placeholder="Enter Your Email"/>
                    </div>

                    <div className="w3-margin-bottom">
                        <label>Password</label>
                        <Inputs type="password" placeholder="Enter Your Password"/>
                    </div>

                    <div className="w3-margin-bottom">
                        <label>Confirm Password</label>
                        <Inputs type="password" placeholder="Repeat Your Password"/>
                    </div>

                    <Buttons text="Sign Up" />
                    <p>Have an account? Login <a href="#" onClick={toLoginPage}>here</a></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;