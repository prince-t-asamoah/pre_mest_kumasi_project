import { useHistory} from 'react-router-dom';

import Buttons from '../../components/Buttons/buttons';

import "../../css/w3.css";
import "../../css/style.css";
import "../../css/w3-theme-blue.css";

function Landing() {
    const appHistory = useHistory();

    function toLoginPage() {
        appHistory.push("/login");
    };

    function toSignupPage() {
        appHistory.push("/signup");
    };

    return(
        <div className="landing-container">
           <h2>MM Management Sys</h2>
            <p>Welcome to MM Management System</p>
           <Buttons text="Login" onclick={toLoginPage}/>
            <Buttons text="Sign Up" onclick={toSignupPage}/>
        </div>
    );
};

export default Landing;