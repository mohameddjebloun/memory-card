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
    //Handle the PlayerCard click event
    const playerCardClickHandler = () => {
        //Update isClicked property
        props.changePlayersList((prevState) =>
            prevState.map((obj) => {
                if (obj.key === props.player.key) {
                    if (props.player.isClicked) {
                        props.changePlayersList(props.initialState);
                        return obj;
                    }
                    return { ...obj, isClicked: true };
                }
                return obj;
            })
        );
        //Shuffle the array
        props.changePlayersList((prevState) => shuffleArray(prevState));
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
