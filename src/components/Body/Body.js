//Imports
import { useContext } from "react";
import ScoreContext from "../../store/score-context";
import PlayersList from "./PlayersList";
import Score from "./Score";
//Component function
const Body = () => {
    //Initialize the states
    const ctx = useContext(ScoreContext);
    return (
        <>
            <Score currentScore={ctx.currentScore} bestScore={ctx.bestScore} />
            <PlayersList />
        </>
    );
};
export default Body;
