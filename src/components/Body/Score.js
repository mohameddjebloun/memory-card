const Score = (props) => {
    return (
        <div className="pt-10 flex flex-wrap gap-10 justify-center content-center">
            <p>Current Score: {props.currentScore}</p>
            <p>Best Score: {props.bestScore}</p>
        </div>
    );
};
export default Score;
