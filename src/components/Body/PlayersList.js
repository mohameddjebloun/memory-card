//Imports
import { useState } from "react";
import IMAGES from "../../assets/players/playerImages";
import PlayerCard from "./PlayerCard";
//Set the initial players list array state
const initialPlayersList = [
    { key: 1, name: "Alaba", img: IMAGES.alabaImg },
    { key: 2, name: "Ancelotti", img: IMAGES.ancelottiImg },
    { key: 3, name: "Asensio", img: IMAGES.asensioImg },
    { key: 4, name: "Benzema", img: IMAGES.benzemaImg },
    { key: 5, name: "Camavinga", img: IMAGES.camavingaImg },
    { key: 6, name: "Carvajal", img: IMAGES.carvajalImg },
    { key: 7, name: "Ceballos", img: IMAGES.ceballosImg },
    { key: 8, name: "Courtois", img: IMAGES.courtoisImg },
    { key: 9, name: "Hazard", img: IMAGES.hazardImg },
    { key: 10, name: "Kroos", img: IMAGES.kroosImg },
    { key: 11, name: "Lunin", img: IMAGES.luninImg },
    { key: 12, name: "Mariano", img: IMAGES.marianoImg },
    { key: 13, name: "Mendy", img: IMAGES.mendyImg },
    { key: 14, name: "Militao", img: IMAGES.militaoImg },
    { key: 15, name: "Modric", img: IMAGES.modricImg },
    { key: 16, name: "Nacho", img: IMAGES.nachoImg },
    { key: 17, name: "Odriozola", img: IMAGES.odriozolaImg },
    { key: 18, name: "Rodrygo", img: IMAGES.rodrygoImg },
    { key: 19, name: "Rudiger", img: IMAGES.rudigerImg },
    {
        key: 20,
        name: "Tchouameni",
        img: IMAGES.tchouameniImg,
    },
    { key: 21, name: "Vallejo", img: IMAGES.vallejoImg },
    { key: 22, name: "Valverde", img: IMAGES.valverdeImg },
    { key: 23, name: "Vazquez", img: IMAGES.vazquezImg },
    { key: 24, name: "Vinicius", img: IMAGES.viniciusImg },
];
//Create the renderArray function to render the players list array
const renderArray = (
    array,
    updatePlayersList,
    clickedPlayers,
    updateClickedPlayers
) => {
    return array.map((player) => (
        <PlayerCard
            key={player.key}
            player={player}
            updatePlayersList={updatePlayersList}
            clickedPlayers={clickedPlayers}
            updateClickedPlayers={updateClickedPlayers}
        />
    ));
};
//Component function
const PlayersList = () => {
    //Initialize the states
    const [playersList, setPlayersList] = useState(initialPlayersList);
    const [clickedPlayers, setClickedPlayers] = useState([]);
    return (
        <div className="pt-8 flex flex-wrap gap-1 justify-center content-center">
            {renderArray(
                playersList,
                setPlayersList,
                clickedPlayers,
                setClickedPlayers
            )}
        </div>
    );
};
export default PlayersList;
