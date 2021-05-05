import Inputs from '../Inputs/inputs';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <Link class="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="#">Mananagement Sys</Link>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <Inputs classname="form-control form-control-dark w-100 " aria-label="Search"type="text" placeholder="Search" />
                <ul class="navbar-nav px-3">
                    <li class="nav-item text-nowrap">
                        <a class="nav-link" href="#">Sign out</a>
                    </li>
                </ul>
        </header>
    );
}

export default Header;