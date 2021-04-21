import { useHistory} from 'react-router-dom';

import Buttons from '../../components/Buttons/buttons';

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
            <div className="landing-navbar">
                <header>Brand Name</header>
                 
                <nav>     
                    <Buttons text="Log in" onclick={toLoginPage} />
                    <Buttons text="Sign Up" onclick={toSignupPage} />
                </nav>
            </div>

            <div className="landing-content">
                <h1>Welcome to<br/> my landing page!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                    Blandit libero volutpat sed cras ornare arcu. Donec et odio pellentesque diam.
                </p>
                <Buttons text="Learn More"/>
            </div> 
        </div>
    );
};

export default Landing;