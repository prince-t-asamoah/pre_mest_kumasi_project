
function Sidebar() {
    return(
        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block w3-theme-d5 sidebar collapse">
                    <div class="position-sticky pt-3">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><span data-feather="home"></span>Dashboard</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#"><span data-feather="file"></span>Profile</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#"><span data-feather="shopping-cart"></span>Task</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#"><span data-feather="users"></span>Budget</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#"><span data-feather="bar-chart-2"></span>Accounting</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Sidebar;