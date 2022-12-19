//Imports
import { useState } from "react";
import IMAGES from "../../assets/players/playerImages";
import PlayerCard from "./PlayerCard";
//Set the initial players list array state
const initialPlayersList = [
    { key: 1, name: "Alaba", img: IMAGES.alabaImg, isClicked: false },
    { key: 2, name: "Ancelotti", img: IMAGES.ancelottiImg, isClicked: false },
    { key: 3, name: "Asensio", img: IMAGES.asensioImg, isClicked: false },
    { key: 4, name: "Benzema", img: IMAGES.benzemaImg, isClicked: false },
    { key: 5, name: "Camavinga", img: IMAGES.camavingaImg, isClicked: false },
    { key: 6, name: "Carvajal", img: IMAGES.carvajalImg, isClicked: false },
    { key: 7, name: "Ceballos", img: IMAGES.ceballosImg, isClicked: false },
    { key: 8, name: "Courtois", img: IMAGES.courtoisImg, isClicked: false },
    { key: 9, name: "Hazard", img: IMAGES.hazardImg, isClicked: false },
    { key: 10, name: "Kroos", img: IMAGES.kroosImg, isClicked: false },
    { key: 11, name: "Lunin", img: IMAGES.luninImg, isClicked: false },
    { key: 12, name: "Mariano", img: IMAGES.marianoImg, isClicked: false },
    { key: 13, name: "Mendy", img: IMAGES.mendyImg, isClicked: false },
    { key: 14, name: "Militao", img: IMAGES.militaoImg, isClicked: false },
    { key: 15, name: "Modric", img: IMAGES.modricImg, isClicked: false },
    { key: 16, name: "Nacho", img: IMAGES.nachoImg, isClicked: false },
    { key: 17, name: "Odriozola", img: IMAGES.odriozolaImg, isClicked: false },
    { key: 18, name: "Rodrygo", img: IMAGES.rodrygoImg, isClicked: false },
    { key: 19, name: "Rudiger", img: IMAGES.rudigerImg, isClicked: false },
    {
        key: 20,
        name: "Tchouameni",
        img: IMAGES.tchouameniImg,
        isClicked: false,
    },
    { key: 21, name: "Vallejo", img: IMAGES.vallejoImg, isClicked: false },
    { key: 22, name: "Valverde", img: IMAGES.valverdeImg, isClicked: false },
    { key: 23, name: "Vazquez", img: IMAGES.vazquezImg, isClicked: false },
    { key: 24, name: "Vinicius", img: IMAGES.viniciusImg, isClicked: false },
];
//Create the renderArray function to render the players list array
const renderArray = (
    array,
    changePlayersList,
    changeCurrentScore,
    changeBestScore,
    currentScore,
    bestScore
) => {
    return array.map((player) => (
        <PlayerCard
            key={player.key}
            player={player}
            changePlayersList={changePlayersList}
            changeCurrentScore={changeCurrentScore}
            changeBestScore={changeBestScore}
            initialState={initialPlayersList}
            currentScore={currentScore}
            bestScore={bestScore}
        />
    ));
};
//Component function
const PlayersList = (props) => {
    //Initialize the states
    const [playersList, setPlayersList] = useState(initialPlayersList);
    return (
        <div className="pt-8 flex flex-wrap gap-1 justify-center content-center">
            {renderArray(
                playersList,
                setPlayersList,
                props.changeCurrentScore,
                props.changeBestScore,
                props.currentScore,
                props.bestScore
            )}
        </div>
    );
};
export default PlayersList;
