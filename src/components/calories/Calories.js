import { doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FitnessContext } from "../../contexts/FitnessContext";
import { database } from "../../firebaseConfig";

export const Calories = () => {
    const [err, setErr] = useState('');
    const { loggedUser } = useContext(AuthContext);
    const { fitness } = useContext(FitnessContext);

    const currentUserCalories = fitness.find(calorie => calorie.id === loggedUser.uid);

    const onClick = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const weight = Number(formData.get('weight'));
        const height = Number(formData.get('height'));
        const age = Number(formData.get('age'));
        const sex = formData.get('sex');
        const activity = formData.get('activity');

        if (weight === '' || height === '' || age === '') {
            setErr('Please fill all the fields!');
            return;
        }

        if (weight !== Number(weight) || height !== Number(height) || age !== Number(age)) {
            setErr('Please add a number!');
            return;
        }

        let bmr = 0;

        switch (sex) {
            case 'female':
                bmr = 655.1 + (9.563 * weight + (1.850 * height) - (4.676 * age));
                break;
            case 'male':
                bmr = 66.5 + (13.75 * weight + (5.003 * height) - (6.75 * age));
                break;
        }

        switch (activity) {
            case 'sedentary':
                bmr *= 1.2
                break;
            case 'lightly':
                bmr *= 1.375
                break;
            case 'moderately':
                bmr *= 1.55
                break;
            case 'veryactive':
                bmr *= 1.725
                break;
            case 'extraactive':
                bmr *= 1.9
                break;

        }

        const maintenance = Number(bmr.toFixed(2));
        const muscleGain = Number((maintenance + 300).toFixed(2));
        const fatLoss = Number((maintenance - 400).toFixed(2));

        try {
            await updateDoc(doc(database, 'fitness', loggedUser.uid), {
                maintenance,
                muscleGain,
                fatLoss
            });
            setErr('');
        } catch (error) {
            setErr(error.message);
        }
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <h1>Daily Calorie Calculator</h1>
                <form className="auth__form" onSubmit={onClick}>
                    <label htmlFor="weight" />
                    <input type="text" placeholder="Weight in kg" id="weight" name="weight" />
                    <label htmlFor="height" />
                    <input
                        type="text" placeholder="Height in cm" id="height" name="height"
                    />
                    <label htmlFor="age" />
                    <input
                        type="text" placeholder="Age" id="age" name="age"
                    />
                    <select name="sex" id="sex">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <select name="activity" id="activity">
                        <option value="sedentary">Sedentary (little or no exercise)</option>
                        <option value="lightly">Lightly active (light exercise/sports 1-3 days/week)</option>
                        <option value="moderately">Moderately active (moderate exercise/sports 3-5 days/week)</option>
                        <option value="veryactive">Very active (hard exercise/sports 6-7 days a week)</option>
                        <option value="extraactive">Extra active (very hard exercise/sports & a physical job)</option>
                    </select>
                    <button type="submit">Calculate</button>
                    <p className="errors">{err}</p>
                    {currentUserCalories?.maintenance
                        ? <div className="calories">
                            <p>Daily Calories to:</p>
                            <p>Mantain Weight - {currentUserCalories.maintenance}</p>
                            <p>Gain Muscle - {currentUserCalories.muscleGain}</p>
                            <p>Loss Fat - {currentUserCalories.fatLoss}</p>
                        </div>
                        : ''}
                </form>
            </div>
        </div>
    );
}