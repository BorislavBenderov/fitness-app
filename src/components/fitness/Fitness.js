import { Link } from 'react-router-dom';
import FITNESS from '../../assets/health.jpg';
import FOOD from '../../assets/food.png';

export const Fitness = () => {
    return (
        <>
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
            <div className="fitness">
                <section className="fitness__content">
                    <div className="fitness__img">
                        <img className='food__img' src={FOOD} alt="" />
                    </div>
                    <div className="fitness__cal">
                        <h1>Understand Your Calories Need</h1>
                        <p>Find out your calories to maintain weight, build muscle or loose fat</p>
                    </div>
                </section>
            </div>
        </>
    );
}