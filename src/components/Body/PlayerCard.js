import { useContext } from "react";
import ScoreContext from "../../store/score-context";

//Create a shuffleArray function using the Fisher-Yates Algorithm
const shuffleArray = (array) => {
    array.reverse().forEach((item, index) => {
        const j = Math.floor(Math.random() * (index + 1));
        [array[index], array[j]] = [array[j], array[index]];
    });

    return array;
};
//Component function
const PlayerCard = (props) => {
    const ctx = useContext(ScoreContext);
    //Handle the PlayerCard click event
    const playerCardClickHandler = () => {
        //Reset round
        if (props.clickedPlayers.includes(props.player.name)) {
            props.updateClickedPlayers([]);
        }
        //Update clickedPlayers array
        else {
            props.updateClickedPlayers((prevArr) => [
                ...prevArr,
                props.player.name,
            ]);
        }
        ctx.updateCurrentScore(
            props.clickedPlayers.includes(props.player.name)
        );
        //Shuffle the array
        props.updatePlayersList((prevState) => shuffleArray(prevState));
    };
    return (
        <div
            onClick={playerCardClickHandler}
            className="card w-96 bg-primary-focus shadow-xl"
        >
            <figure className="px-10 pt-10">
                <img
                    src={props.player.img}
                    alt={props.player.name}
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-warning">{props.player.name}</h2>
            </div>
        </div>
    );
};
export default PlayerCard;
