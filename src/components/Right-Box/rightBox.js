import {Link} from 'react-router-dom';
import {useAppContext} from '../../context/appContext';

import Inputs from '../Inputs/inputs';
import Buttons from '../Buttons/buttons';

function RightBox() {
 const {toPage} = useAppContext();

    return(
        <div className="right-box">

            <form>
                <header><h1>Sign up</h1></header>
                <Inputs type="text" placeholder="Enter full name" name="username" />
                <Inputs type="email" placeholder="Enter email" name="username" />
                <Inputs type="password" placeholder="Enter password" name="password" />
                <Inputs type="password" placeholder="Confirm password" name="password" />

                <Buttons text="Login" />
                <p>Have an account? &bull; <Link to="/login">Log in</Link></p>
            </form>
        </div>
    );
}

export default RightBox;