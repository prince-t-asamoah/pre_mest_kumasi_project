import Buttons from "../../components/Buttons/buttons";
import "../../css/w3.css";
import "../../css/style.css";

function Landing() {
    return(
        <div className="landing-container">
           <h2>MM Management Sys</h2>
            <p>Welcome to MM Management System</p>
           <Buttons text="Login"/>
           <Buttons text="Sign Up" />
        </div>
    );
};

export default Landing;