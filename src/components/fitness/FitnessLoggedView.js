import FOODIMG from '../../assets/food-logged.jpg';
import WEIGHTIMG from '../../assets/weight-scale.jpg';
import FULLBODY from '../../assets/fullbody.jpg';
import UPPERLOWER from '../../assets/upper-lower.jpg';
import PUSHPULLLEGS from '../../assets/push-pull-legs.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FitnessContext } from '../../contexts/FitnessContext';
import { AuthContext } from '../../contexts/AuthContext';

export const FitnessLoggedView = () => {
    const { fitness, isLoading } = useContext(FitnessContext);
    const { loggedUser } = useContext(AuthContext);

    const currentUserCalories = fitness.find(calorie => calorie.id === loggedUser.uid);

    return (
        <div className="logged__user">
            {isLoading
                ? <>
                    <div className="fitness">
                        <section className="fitness__content">
                            {currentUserCalories?.maintenance
                                ? <div className="fitness__home">
                                    <h1>Your Current Daily Calories</h1>
                                    <p>To Maintain Weight: {currentUserCalories.maintenance} kcal</p>
                                    <p>To Gain Muscle: {currentUserCalories.muscleGain} kcal</p>
                                    <p>To Loss Fat: {currentUserCalories.fatLoss} kcal</p>
                                    <Link to='/calories'><button>Start</button></Link>
                                </div>
                                : <div className="fitness__home">
                                    <h1>Find Your Calories Needs</h1>
                                    <p>Start here</p>
                                    <Link to='/calories'><button>Start</button></Link>
                                </div>}
                            <div className="fitness__img">
                                <img src={FOODIMG} className='food__img' alt="" />
                            </div>
                        </section>
                    </div>
                    <div className="fitness">
                        <section className="fitness__content">
                            <div className="fitness__img">
                                <img className='food__img' src={WEIGHTIMG} alt="" />
                            </div>
                            {currentUserCalories?.averageWeeklyWeight
                                ? <div className="fitness__cal">
                                    <h1>Your Average Weekly Weight</h1>
                                    <p className='average__weight'>{currentUserCalories.averageWeeklyWeight} kg</p>
                                    <Link to='/weight'><button>Start</button></Link>
                                </div>
                                : <div className="fitness__cal">
                                    <h1>Find Your Weekly Weight</h1>
                                    <p>Start here</p>
                                    <Link to='/weight'><button>Start</button></Link>
                                </div>}
                        </section>
                    </div>
                    <div className="programs__home">
                        <h1>Find Best Training Program For You</h1>
                        <p>Choose your training program and understand how to logbook your trainings</p>
                        <div className="programs__images">
                            <section className="program__logo">
                                <Link to='/fitness-programs/fullbody'>
                                    <img src={FULLBODY} className='programs__img' alt="" />
                                    <h2>Full Body</h2>
                                    <p>If you are new to lifting weights this program will be game changer!</p>
                                </Link>
                            </section>
                            <section className="program__logo">
                                <Link to='/fitness-programs/upper-lower'>
                                    <img src={UPPERLOWER} className='programs__img' alt="" />
                                    <h2>Upper Lower</h2>
                                    <p>If you are lifting weigths for about 2+ years this program is for you!</p>
                                </Link>
                            </section>
                            <section className="program__logo">
                                <Link to='/fitness-programs/push-pull-legs'>
                                    <img src={PUSHPULLLEGS} className='programs__img' alt="" />
                                    <h2>Push Pull Legs</h2>
                                    <p>If you are advanced lifter and your progress is really hard this program is next step</p>
                                </Link>
                            </section>
                        </div>
                    </div>
                </>
                : <div class="lds-dual-ring"></div>}
        </div>
    );
}