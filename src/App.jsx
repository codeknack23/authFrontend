import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './index.css';

function App() {
    return (
        <Router>
            <header>
                <nav className="navbar">
                    <NavLink 
                        to="/signup" 
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    >
                        Signup
                    </NavLink>
                    <NavLink 
                        to="/login" 
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    >
                        Login
                    </NavLink>
                    <NavLink 
                        to="/dashboard" 
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    >
                        Dashboard
                    </NavLink>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
