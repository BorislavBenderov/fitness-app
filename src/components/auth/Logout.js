import { Link, useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export const Logout = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <li>
            <Link to="#" onClick={onLogout}>Logout</Link>
        </li>
    );
}