//Imports
import React, { useEffect, useState } from "react";
//Context
const ScoreContext = React.createContext({
    currentScore: 0,
    bestScore: 0,
    updateCurrentScore: () => {},
});
//Provider component
export const ScoreContextProvider = (props) => {
    //Initialize states
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    //Update bestScore
    useEffect(() => {
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
    }, [bestScore, currentScore]);
    //Update currentScore
    const updateCurrentScore = (score) => {
        if (!score) {
            setCurrentScore((prevScore) => prevScore + 1);
        } else {
            setCurrentScore(0);
        }
    };
    return (
        <ScoreContext.Provider
            value={{
                currentScore: currentScore,
                bestScore: bestScore,
                updateCurrentScore: updateCurrentScore,
            }}
        >
            {props.children}
        </ScoreContext.Provider>
    );
};
export default ScoreContext;
