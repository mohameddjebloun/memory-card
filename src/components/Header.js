import background from "../assets/hero-bg.jpg";
const Header = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Memory Game</h1>
                    <p className="mb-5">
                        Get points by clicking a player,{" "}
                        <strong>
                            but don't click on the same player more than once
                            per round!
                        </strong>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Header;
