import {useState} from 'react';
import {Link} from 'react-router-dom';

import Inputs from '../../components/Inputs/inputs';
import Buttons from '../../components/Buttons/buttons';

function Signup() {
    const [values, setValues] = useState({});

    function updateValues(e) {
        setValues({...values, [e.target.name]:[e.target.value]});
        console.log(values);
    }
    
    function submit(e) {
        e.preventDefault();
        // const signObj = {values};
        // const jsonObj = JSON.stringify(signObj);

        // fetch('http://localhost:5000/api/v1/signup', {
        //     method: 'POST',
        //     body: jsonObj,
        //     headers: { 'Content-Type': 'application/json'}
        // })
        // .then(res => res.json())
        // .then(res => {console.log(res);});
    };

    return(
       
    <div className="">
        <form>
            <header><h1>Sign Up</h1></header>

            <Inputs type="text" placeholder="Enter full name" name="username" classname="w3-input" onchange={updateValues}/>
            <Inputs type="email" placeholder="Enter email" name="password" classname="w3-input" onchange={updateValues}/>
            <Inputs type="password" placeholder="Enter password" name="password1" classname="w3-input" onchange={updateValues}/>
            <Inputs type="password" placeholder="Confirm password" name="password2" classname="w3-input" onchange={updateValues}/>

            <Buttons text="Join Now!" classname="w3-button w3-block w3-theme" onclick={submit}/>

            <p>Already a member? <Link to="/login">Login</Link></p>
            <p>By clicking the button above, you agree to our <Link to="">Terms of Service</Link> and <Link>Privacy Policy</Link>.</p>
        </form>
    </div>
    )
}

export default Signup;