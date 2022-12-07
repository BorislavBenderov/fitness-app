import { Link } from "react-router-dom";
import { Logout } from "../auth/Logout";

export const Header = () => {
    return (
        <header className="header__container">
            <ul className="nav">
                <li>
                    <Link to="/fitness">Home</Link>
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
                <Logout />
            </ul>
        </header>
    );
}