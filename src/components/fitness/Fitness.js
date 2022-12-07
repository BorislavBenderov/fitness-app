import { Link } from 'react-router-dom';
import FITNESS from '../../assets/health.jpg';

export const Fitness = () => {
    return (
        <div className="fitness">
            <section className="fitness__content">
                <div className="fitness__home">
                    <h1>Start Your Fitness Journey!</h1>
                    <p>Check how to achieve your goal</p>
                    <Link to='/login'><button>Start</button></Link>
                </div>
                <div className="fitness__img">
                    <img src={FITNESS} alt="" />
                </div>
            </section>
        </div>
    );
}