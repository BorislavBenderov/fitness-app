import { Link } from "react-router-dom";

export const FitnessPrograms = () => {
    return (
        <div className="fitness__programs">
            <h1>Choose a Program</h1>
            <section className="programs">
                <Link to={`/fitness-programs/fullbody`}>
                    <div className="program__container" >
                        <h2>Full Body</h2>
                        <p>Choose this program if you do not have 2+ years of training</p>
                    </div>
                </Link>
                <Link to={`/fitness-programs/upper-lower`}>
                    <div className="program__container">
                        <h2>Upper/Lower</h2>
                        <p>Choose this program if you have 2+ years of training</p>
                    </div>
                </Link>
                <Link to={`/fitness-programs/push-pull-legs`}>
                    <div className="program__container">
                        <h2>Push/Pull/Legs</h2>
                        <p>Choose this program if you have 4+ years of training</p>
                    </div>
                </Link>
            </section>
        </div>
    );
}