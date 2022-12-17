//Imports
import { useState } from "react";
import PlayersList from "./PlayersList";
import Score from "./Score";
//Component function
const Body = () => {
    //Initialize the states
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    return (
        <>
            <Score currentScore={currentScore} bestScore={bestScore} />
            <PlayersList
                changeCurrentScore={setCurrentScore}
                changeBestScore={setBestScore}
            />
        </>
    );
};
export default Body;
