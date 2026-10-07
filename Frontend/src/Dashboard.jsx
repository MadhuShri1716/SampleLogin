import { useNavigate } from "react-router-dom";
import "./App.css";

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="dashboard">

            {/* Navbar */}
            <nav className="navbar">
                <h2>LearnHub</h2>

                <div className="nav-links">
                    <a href="/dashboard">Home</a>
                    <a href="#">Courses</a>
                    <a href="#">Assessment</a>
                    <a href="#">Profile</a>
                </div>

                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </nav>

            {/* Main Content */}
            <main className="dashboard-content">

                <div className="welcome">
                    <h1>Hi Madhushri 👋</h1>
                    <p>Welcome back to LearnHub!</p>
                </div>

                {/* Profile Card */}
                <div className="profile-card">
                    <div className="profile-icon">
                        M
                    </div>

                    <div>
                        <h2>Madhushri Jaganathan</h2>
                        <p>jmadhushrij1@gmail.com</p>
                    </div>
                </div>

                {/* Simple Cards */}
                <div className="cards">

                    <div className="card">
                        <h3>Courses</h3>
                        <p>Continue your learning journey.</p>
                        <button>View Courses</button>
                    </div>

                    <div className="card">
                        <h3>Assessment</h3>
                        <p>Check your assessment progress.</p>
                        <button>Take Assessment</button>
                    </div>

                    <div className="card">
                        <h3>Profile</h3>
                        <p>View and update your profile.</p>
                        <button>View Profile</button>
                    </div>

                </div>

            </main>

        </div>
    );
}

export default Dashboard;