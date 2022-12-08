import { useContext } from 'react';
import { FitnessGuestView } from './FitnessGuestView';
import { FitnessLoggedView } from './FitnessLoggedView';
import { AuthContext } from '../../contexts/AuthContext';

export const Fitness = () => {
    const { loggedUser } = useContext(AuthContext);

    return (
        <main>
            {loggedUser
                ? <FitnessLoggedView />
                : <FitnessGuestView />}
        </main >
    );
}