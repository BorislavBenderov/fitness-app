import { Link } from 'react-router-dom';
import FITNESS from '../../assets/health.jpg';
import FOOD from '../../assets/food.png';
import FULLBODY from '../../assets/fullbody.jpg';
import UPPERLOWER from '../../assets/upper-lower.jpg';
import PUSHPULLLEGS from '../../assets/push-pull-legs.png';

export const FitnessGuestView = () => {
    return (
        <div className="guest">
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
            <div className="programs__home">
                <h1>Find Best Training Program For You</h1>
                <p>Choose your training program and understand how to logbook your trainings</p>
                <div className="programs__images">
                    <section className="program__logo">
                        <img src={FULLBODY} className='programs__img' alt="" />
                        <h2>Full Body</h2>
                        <p>If you are new to lifting weights this program will be game changer!</p>
                    </section>
                    <section className="program__logo">
                        <img src={UPPERLOWER} className='programs__img' alt="" />
                        <h2>Upper Lower</h2>
                        <p>If you are lifting weigths for about 2+ years this program is for you!</p>
                    </section>
                    <section className="program__logo">
                        <img src={PUSHPULLLEGS} className='programs__img' alt="" />
                        <h2>Push Pull Legs</h2>
                        <p>If you are advanced lifter and your progress is really hard this program is next step</p>
                    </section>
                </div>
            </div>
        </div>
    );
}