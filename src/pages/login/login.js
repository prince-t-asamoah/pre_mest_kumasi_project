// import { useAppContext } from '../../context/appContext';
import {useState} from 'react';
import {Link} from 'react-router-dom';

import Buttons from '../../components/Buttons/buttons';
import Inputs from '../../components/Inputs/inputs';
import NavBar from '../../components/Header/navbar';

function Login() {
    const [values, setValues] = useState({});

    function updateValues(e) {
        setValues({ ...values, [e.target.name]: [e.target.value] });
        console.log(setValues);
    }

    function submit(e) {
        e.preventDefault();
        const logObj = { values };
        const jsonObj = JSON.stringify(logObj);

        fetch('http://localhost:5000/api/v1/login', {
            method: 'POST',
            body: jsonObj,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    // setshowLoader(false);
                    // history.push("/dashboarddefault");
                    alert("Signup Successful");
                } else if (res.failure) {
                    // display
                    alert("Wrong Username or Password");
                    // setshowLoader(false);
                } else if (res.goaway) {
                    alert("User Doesn't Exist");
                    // setshowLoader(false);
                }
            },
                (err) => console.log(err)
             );
    };
    
    return(
        <div className="bg-1">
            <NavBar/>
            <div className="w3-display-middle">
                <form className="w3-container w3-card-2 w3-round-large w3-light-grey w3-padding w3-animate-bottom form-size">
                    <header className="w3-container w3-padding"><h1 className="w3-center">Welcome back!</h1></header>

                    <div className="w3-container">
                        <Inputs type="email" placeholder="Enter email" name="email" classname="w3-input w3-round-large w3-margin-bottom w3-padding" onchange={updateValues}/>
                        <Inputs type="password" placeholder="Enter password" name="password" classname="w3-input w3-round-large w3-margin-bottom w3-padding" onchange={updateValues}/>
                        <Buttons text="Login" classname="w3-button w3-block w3-round-large w3-flat-amethyst w3-margin-top w3-margin-bottom w3-padding" onclick={submit}/>
                    </div>

                    <footer className="w3-container w3-center">
                        <p className="w3-small">Don't have an account? <Link to="/signup">Signup</Link></p>
                    </footer>
                </form>
            </div>
        </div>
    );
};

export default Login;