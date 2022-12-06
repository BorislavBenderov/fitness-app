import FITNESSIMG from '../../assets/fitness.jpg';

export const Fitness = () => {
    return (
        <div className="fitness">
            <section className="fitness__content">
                <header className="header__container">
                    <ul className="nav">
                        <li>
                            <a href="/posts">Home</a>
                        </li>
                        <li>
                            <a href="/messages">Programs</a>
                        </li>
                        <li>
                            <a href="/messages">Logout</a>
                        </li>
                    </ul>
                </header>
                <div className="fitness__home">
                    <h3>Fitness App</h3>
                    <h1>Start Your Fitness Journey!</h1>
                    <p>Check how to achieve your goal</p>
                    <button>Explore</button>
                </div>
            </section>
            <section className="fitness__img">
                <img src={FITNESSIMG} alt="" />
            </section>
        </div>
    );
}