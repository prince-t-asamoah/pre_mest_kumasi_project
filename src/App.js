import AppRouter from './routers/appRouter';

// Stylesheets
import "./css/w3.css";
import "./css/w3-theme-blue.css";
import './css/style.css';
import './css/bootstrap/bootstrap.min.css';
import './css/bootstrap/dashboard.css';
import Dashboard from './pages/Dashboard/dashboard';
// import Landing from './pages/Landing/landing';

function App() {
  return (
    <>
      <AppRouter/>
      {/* <Dashboard/> */}
    </>
  );
};

export default App;
