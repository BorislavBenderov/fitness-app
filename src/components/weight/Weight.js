import { doc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FitnessContext } from '../../contexts/FitnessContext';
import { database } from "../../firebaseConfig";

export const Weight = () => {
    const [err, setErr] = useState('');
    const { loggedUser } = useContext(AuthContext);
    const { fitness } = useContext(FitnessContext);

    const currentUserWeight = fitness.find(weight => weight.id === loggedUser.uid);

    const onWeightCalculate = async (e) => {
        e.preventDefault();

        const arr = [];
        let weeklyWeight = 0;

        const formData = new FormData(e.target);

        const mondayWeight = Number(formData.get('mondayWeight'));
        const tuesdayWeight = Number(formData.get('tuesdayWeight'));
        const wednesdayWeight = Number(formData.get('wednesdayWeight'));
        const thursdayWeight = Number(formData.get('thursdayWeight'));
        const fridayWeight = Number(formData.get('fridayWeight'));
        const saturdayWeight = Number(formData.get('saturdayWeight'));
        const sundayWeight = Number(formData.get('sundayWeight'));

        if (mondayWeight !== Number(mondayWeight) || tuesdayWeight !== Number(tuesdayWeight) || wednesdayWeight !== Number(wednesdayWeight) ||
            thursdayWeight !== Number(thursdayWeight) || fridayWeight !== Number(fridayWeight) || saturdayWeight !== Number(saturdayWeight) ||
            sundayWeight !== Number(sundayWeight)) {
            setErr('Please add a number!');
            return;
        }

        if (mondayWeight === 0 && tuesdayWeight === 0 && wednesdayWeight === 0 && thursdayWeight === 0
            && fridayWeight === 0 && saturdayWeight === 0 && sundayWeight === 0) {
            setErr('Please fill at least one field!');
            return;
        }

        arr.push(mondayWeight, tuesdayWeight, wednesdayWeight, thursdayWeight, fridayWeight, saturdayWeight, sundayWeight);

        const dailyWeights = arr.filter(weight => weight !== 0);

        for (let i = 0; i < dailyWeights.length; i++) {
            weeklyWeight += dailyWeights[i];
        }

        const averageWeeklyWeight = Number((weeklyWeight / dailyWeights.length).toFixed(2));

        try {
            await updateDoc(doc(database, 'fitness', loggedUser.uid), {
                averageWeeklyWeight
            });
            setErr('');
        } catch (error) {
            setErr(error.message);
        }
    }

    return (
        <div className="auth">
            <div className="auth__container">
                <h1>Weekly Avarage Weight</h1>
                <form className="auth__form" onSubmit={onWeightCalculate}>
                    <label htmlFor="mondayWeight" />
                    <input type="text" placeholder="Monday Weight in kg" id="mondayWeight" name="mondayWeight" />
                    <label htmlFor="tuesdayWeight" />
                    <input type="text" placeholder="Tuesday Weight in kg" id="tuesdayWeight" name="tuesdayWeight" />
                    <label htmlFor="wednesdayWeight" />
                    <input type="text" placeholder="Wednesday Weight in kg" id="wednesdayWeight" name="wednesdayWeight" />
                    <label htmlFor="thursdayWeight" />
                    <input type="text" placeholder="Thursday Weight in kg" id="thursdayWeight" name="thursdayWeight" />
                    <label htmlFor="fridayWeight" />
                    <input type="text" placeholder="Friday Weight in kg" id="fridayWeight" name="fridayWeight" />
                    <label htmlFor="saturdayWeight" />
                    <input type="text" placeholder="Saturday Weight in kg" id="saturdayWeight" name="saturdayWeight" />
                    <label htmlFor="sundayWeight" />
                    <input type="text" placeholder="Sunday Weight in kg" id="sundayWeight" name="sundayWeight" />
                    <button type="submit">Calculate</button>
                    <p className="errors">{err}</p>
                    {currentUserWeight?.averageWeeklyWeight
                        ? <div className="calories">
                            <p>Average Weekly Weight:</p>
                            <p>{currentUserWeight.averageWeeklyWeight} kg</p>
                        </div>
                        : ''}
                </form>
            </div>
        </div>
    );
}