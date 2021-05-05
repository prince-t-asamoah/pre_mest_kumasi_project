import {Link} from 'react-router-dom';
// import {useAppContext} from '../../context/appContext';

import Inputs from '../Inputs/inputs';
import Buttons from '../Buttons/buttons';

function SignupForm() {
//  const {toPage} = useAppContext();

    return(
        <div className="right-box">
            <form>
                <header><h1>Sign Up</h1></header>

                <Inputs type="text" placeholder="Enter full name" name="username" classname="w3-input"/>
                <Inputs type="email" placeholder="Enter email" name="username" classname="w3-input"/>
                <Inputs type="password" placeholder="Enter password" name="password" classname="w3-input"/>
                <Inputs type="password" placeholder="Confirm password" name="password" classname="w3-input"/>

                <p><Inputs type="checkbox" style={{display: 'inline'}} classname="w3-check"/> I agree to the <Link>term and conditions.</Link></p>
                <Buttons text="Signup" classname="w3-button w3-block w3-theme"/>
                <p>Have an account ? &bull; <Link to="/login">Login here</Link></p>
            </form>
        </div>
    );
}

export default SignupForm;