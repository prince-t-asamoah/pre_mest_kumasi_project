import {useAppContext} from '../../context/appContext';

import Buttons from '../../components/Buttons/buttons';
import NavBar from '../../components/Header/navbar';
// import Footer from '../../components/Footer/footer';
// import Logo from '../../img/logo.png';

function Landing() {
    const {toPage} = useAppContext();
    
    return(
        <div className="bg-1">
            <header>
                <NavBar/>

                <div className="w3-container w3-center w3-text-white w3-animate-top hero-section">
                    <h1 className="w3-jumbo">Welcome to the artfiva community.</h1>
                    <h2 className="w3-xlarge">Maecenas porttitor congue massa. Fusce posuere, <br/>magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</h2>
                    <Buttons text="Get Started!" classname="w3-button w3-xlarge w3-margin-top w3-padding w3-flat-wisteria w3-round-large" onclick={()=>toPage("/signup")}/>
                </div>
            </header>   

        </div>
    );
};

export default Landing;