import {useAppContext} from '../../context/appContext';
// import {NavLink} from 'react-router-dom';

// import './cover.css';
import Buttons from '../../components/Buttons/buttons';
import Footer from '../../components/Footer/footer';

function Landing() {
    const {toPage} = useAppContext();
    
    return(
        // <div className="d-flex text-center text-white landing-container">
        //     <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        //         <header className="mb-auto">
        //             <div>
        //                 <h3 className="float-md-start mb-0">Brand</h3>
        //                 <nav className="nav nav-masthead justify-content-center float-md-end btn-group">
        //                     {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        //                     <Buttons text="Signup" className="nav-link btn btn-outline-primary active" onclick={() => toPage("/signup")}/>
        //                     <Buttons text="Login"className="nav-link" onclick={() => toPage("/login")}/>
        //                 </nav>
        //             </div>
        //         </header>

        //         <main className="px-3">
        //             <h1>Welcome</h1>
        //             <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        //             <p className="lead">
        //                 <a href="#" className="btn btn-lg btn-outline-success fw-bold border-white text-white">Learn more</a>
        //             </p>
        //         </main>

        //        <Footer/>
        //     </div>
        // </div>

        <div className="landing-container">
            <div className="landing-navbar">
                <header>Stareer</header>
                 
                    <nav>
                        <Buttons text="Log in" classname="w3-button w3-border" onclick={()=>toPage("/login")}/>
                        <Buttons text="Sign Up" classname="w3-button w3-border" onclick={() => toPage("/signup")}/>
                    </nav>     
            </div>

            <div className="landing-content">
                <h1>Starting your music career?<br/></h1>
                <p>
                    <br/>
                    Create a profile, task, and automate <br/>all your budgeting and accounting work at the spot. <br/>
                    Music management at your convenience.
                </p>
                <Buttons text="Start Now!" classname="w3-button w3-border w3-wide"/>
            </div> 

            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
};

export default Landing;