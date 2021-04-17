import Inputs from "../../components/inputs"

function Login() {
    return(
        <div>
            <Inputs type="text" placeholder="Enter Your Username"/>
            <Inputs type="password" placeholder="Enter Your Password"/>
        </div>
    )
}

export default Login