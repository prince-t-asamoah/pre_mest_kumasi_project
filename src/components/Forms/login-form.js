import { Link } from 'react-router-dom';
// import { useAppContext } from '../../context/appContext';

import Inputs from '../Inputs/inputs';
import Buttons from '../Buttons/buttons';

function LoginForm() {
    // const { toPage } = useAppContext();

    return (
        <div className="right-box">
            <form>
                <header><h1>Login</h1></header>
        
                <Inputs type="email" placeholder="Enter email" name="username" classname="w3-input"/>
                <Inputs type="password" placeholder="Enter password" name="password" classname="w3-input"/>

                <Buttons text="Login" classname="w3-button w3-block w3-theme"/>
                <p>Don't have an account ?&bull; <Link to="/signup">Signup here</Link></p>
            </form>
        </div>
    );
}

export default LoginForm;