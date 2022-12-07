import { createContext, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../firebaseConfig";

export const FitnessContext = createContext();

export const FitnessContextProvider = ({ children }) => {
    const [fitness, setFitness] = useState([]);

    useEffect(() => {
        onSnapshot(collection(database, 'fitness'), (snapshot) => {
            setFitness(snapshot.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }));
        });
    }, []);

    return (
        <FitnessContext.Provider value={{ fitness }}>
            {children}
        </FitnessContext.Provider>
    );
}