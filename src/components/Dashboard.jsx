import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://loginauth-ix8k.onrender.com/api/auth/dashboard', { withCredentials: true })
            .then(res => setUser(res.data.user))
            .catch(() => navigate('/login'));
    }, [navigate]);

    const handleLogout = async () => {
        await axios.post('https://loginauth-ix8k.onrender.com/api/auth/logout', {}, { withCredentials: true });
        setUser(null);
        navigate('/login');
    };

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            {user ? (
                <>
                    <h2>Welcome, {user.name}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Dashboard;
