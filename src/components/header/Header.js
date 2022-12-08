import { useContext } from "react";
import { Link } from "react-router-dom";
import { Logout } from "../auth/Logout";
import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { loggedUser } = useContext(AuthContext);
    return (
        <header className="header__container">
            <Link to='/'><h3>Fitness App</h3></Link>
            <ul className="nav">
                {loggedUser
                    ? <>
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
                        <Logout />
                    </>
                    : <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                }
            </ul>
        </header>
    );
}