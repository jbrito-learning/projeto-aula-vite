import { Link, Outlet } from "react-router-dom";

export const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to="profile">Profile</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Dashboard;