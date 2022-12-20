import realMadridLogo from "./assets/realMadridLogo.png";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import { ScoreContextProvider } from "./store/score-context";
function App() {
    return (
        <>
            <Header />
            <div className="divider">
                <div className="rounded w-48">
                    <img src={realMadridLogo} alt="Real Madrid logo" />
                </div>
            </div>
            <ScoreContextProvider>
                <Body />
            </ScoreContextProvider>
        </>
    );
}

export default App;
