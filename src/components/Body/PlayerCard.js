const PlayerCard = (props) => {
    return (
        <div className="card w-96 bg-primary-focus shadow-xl">
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
