import { useHistory } from 'react-router-dom';

import Inputs from "../../components/Inputs/inputs";
import Buttons from "../../components/Buttons/buttons";

import "../../css/w3.css";
import "./login.css";

function Login() {

    const appHistory = useHistory();

    function toSignUp() {
        appHistory.push("/signup");
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
                        <Inputs type="text" placeholder="Enter Your Username"/>
                    </div>

                    <div className="w3-margin-bottom">
                        <label>Password</label>
                        <Inputs type="password" placeholder="Enter Your Password"/>
                    </div>

                    <p><a href="#">Forgot password?</a></p>
                    <Buttons text="Login"/>
                    <p>Don't have an account? Sign up <a href="#" onClick={toSignUp}>here</a></p>
                </form>
            </div>
        </div>
    );
};

export default Login;