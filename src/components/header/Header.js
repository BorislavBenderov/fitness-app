import { Link } from "react-router-dom";
import { Logout } from "../auth/Logout";

export const Header = () => {
    return (
        <header className="header__container">
            <Link to='/'><h3>Fitness App</h3></Link>
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/calories">Calories</Link>
                </li>
                <li>
                    <Link to="/weight">Weight</Link>
                </li>
                <li>
                    <Link to="/fitness-programs">Programs</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <Logout />
            </ul>
        </header>
    );
}