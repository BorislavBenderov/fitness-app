import { Link } from "react-router-dom";
import FULLBODYPROGRAM from '../../assets/fullbody-program.xlsx';

export const FitnessPrograms = () => {
    return (
        <div className="fitness__programs">
            <h1>Choose a Program</h1>
            <section className="programs">
                <div className="program__container" >
                    <h2>Full Body</h2>
                    <p>Choose this program if you do not have 2+ years of training</p>
                    <div className="programs__btns">
                        <a href={FULLBODYPROGRAM} download><button>Download Program</button></a>
                        <Link to={`/fitness-programs/fullbody`}><button>View Program</button></Link>
                    </div>
                </div>
                <div className="program__container">
                    <h2>Upper/Lower</h2>
                    <p>Choose this program if you have 2+ years of training</p>
                    <div className="programs__btns">
                        <a href={FULLBODYPROGRAM} download><button>Download Program</button></a>
                        <Link to={`/fitness-programs/upper-lower`}><button>View Program</button></Link>
                    </div>
                </div>
                <div className="program__container">
                    <h2>Push/Pull/Legs</h2>
                    <p>Choose this program if you have 4+ years of training</p>
                    <div className="programs__btns">
                        <a href={FULLBODYPROGRAM} download><button>Download Program</button></a>
                        <Link to={`/fitness-programs/push-pull-legs`}><button>View Program</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
}