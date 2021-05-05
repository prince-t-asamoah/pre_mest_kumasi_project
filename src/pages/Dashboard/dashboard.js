import Inputs from '../../components/Inputs/inputs';
import Header from '../../components/Header/header';
import Sidebar from '../../components/Side-bar/sidebar';

function Dashboard() {
    return(
        <div>
            <Header/>
            <Sidebar/>
        </div>
        // <div className="dashboard-box">
        //     <div className="dashboard-leftbox">
        //         <div className="dashboard-logo">
        //             <header>MSys</header>
        //         </div>

        //         <div className="dashboard-avatar">
        //             <span></span>
        //             <span></span>
        //         </div>

        //         <div className="dashboard-controls">
        //             <ul>
        //                 <li>Profile</li>
        //                 <li>Tasks</li>
        //                 <li>Budget</li>
        //                 <li>Account</li>
        //             </ul>
        //         </div>

        //         <div className="dashboard-footer">
        //             <ul>
        //                 <li>Support</li>
        //                 <li>Help</li>
        //                 <li>Settings</li>
        //             </ul>
        //         </div>
                
        //     </div>

        //     <div className="dashboard-rightbox">
        //         <div className="dashboard-right-topbox">

        //         </div>

        //         <div className="dashboard-right-bottombox">

        //         </div>

        //     </div>
        // </div>
    )
    }

export default Dashboard;