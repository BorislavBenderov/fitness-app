import { createContext, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../firebaseConfig";

export const FitnessContext = createContext();

export const FitnessContextProvider = ({ children }) => {
    const [fitness, setFitness] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        onSnapshot(collection(database, 'fitness'), (snapshot) => {
            setFitness(snapshot.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }));
            setIsLoading(true);
        });
    }, []);

    return (
        <FitnessContext.Provider value={{ fitness, isLoading }}>
            {children}
        </FitnessContext.Provider>
    );
}