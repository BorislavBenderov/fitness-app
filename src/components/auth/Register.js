import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, database } from '../../firebaseConfig';

export const Register = () => {
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    const onRegister = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPassword = formData.get('repeatPassword');

        if (email === '' || password === '' || repeatPassword === '') {
            setErr('Please fill all the fields!');
            return;
        }

        if (password !== repeatPassword) {
            setErr('Your password and confirmation password do not match!');
            return;
        }

        setPersistence(auth, browserLocalPersistence)
            .then(() => {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((res) => {
                        setDoc(doc(database, 'fitness', res.user.uid), {
                            email: res.user.email
                        })
                        navigate('/');
                    })
                    .catch((err) => {
                        setErr(err.message);
                    })
            })
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <h1>Fitness App</h1>
                <form className="auth__form" onSubmit={onRegister}>
                    <label htmlFor="email" />
                    <input type="text" placeholder="Email" id="email" name="email" />
                    <label htmlFor="password" />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                    />
                    <label htmlFor="repeatPassword" />
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        id="repeatPassword"
                        name="repeatPassword"
                    />
                    <p className="errors">{err}</p>
                    <button type="submit">Register</button>
                </form>
            </div>
            <div className="auth__action">
                <p>Have an account?</p>
                <Link to="/login">Log in</Link>
            </div>
        </div>
    );
}