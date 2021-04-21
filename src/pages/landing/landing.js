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
                    <Buttons text="Login" onclick={toLoginPage} />
                    <Buttons text="Sign Up" onclick={toSignupPage} />
                </nav>
            </div>

            <div>
                <h1>Modern Abstract Landing Page</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit libero volutpat sed cras ornare arcu.
                    Donec et odio pellentesque diam.
                </p>
            </div> 
        </div>
    );
};

export default Landing;