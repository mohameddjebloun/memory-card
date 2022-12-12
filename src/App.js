import realMadridLogo from "./assets/realMadridLogo.png";
import Header from "./components/Header";
import Body from "./components/Body/Body";
function App() {
    return (
        <>
            <Header />
            <div className="divider">
                <div className="rounded w-48">
                    <img src={realMadridLogo} alt="Real Madrid logo" />
                </div>
            </div>
            <Body />
        </>
    );
}

export default App;
