//Imports
import IMAGES from "../../assets/players/playerImages";
import PlayerCard from "./PlayerCard";
//Set the initial players list array state
const initialPlayersList = [
    { name: "Alaba", img: IMAGES.alabaImg, isClicked: false },
    { name: "Ancelotti", img: IMAGES.ancelottiImg, isClicked: false },
    { name: "Asensio", img: IMAGES.asensioImg, isClicked: false },
    { name: "Benzema", img: IMAGES.benzemaImg, isClicked: false },
    { name: "Camavinga", img: IMAGES.camavingaImg, isClicked: false },
    { name: "Carvajal", img: IMAGES.carvajalImg, isClicked: false },
    { name: "Ceballos", img: IMAGES.ceballosImg, isClicked: false },
    { name: "Courtois", img: IMAGES.courtoisImg, isClicked: false },
    { name: "Hazard", img: IMAGES.hazardImg, isClicked: false },
    { name: "Kroos", img: IMAGES.kroosImg, isClicked: false },
    { name: "Lunin", img: IMAGES.luninImg, isClicked: false },
    { name: "Mariano", img: IMAGES.marianoImg, isClicked: false },
    { name: "Mendy", img: IMAGES.mendyImg, isClicked: false },
    { name: "Militao", img: IMAGES.militaoImg, isClicked: false },
    { name: "Modric", img: IMAGES.modricImg, isClicked: false },
    { name: "Nacho", img: IMAGES.nachoImg, isClicked: false },
    { name: "Odriozola", img: IMAGES.odriozolaImg, isClicked: false },
    { name: "Rodrygo", img: IMAGES.rodrygoImg, isClicked: false },
    { name: "Rudiger", img: IMAGES.rudigerImg, isClicked: false },
    { name: "Tchouameni", img: IMAGES.tchouameniImg, isClicked: false },
    { name: "Vallejo", img: IMAGES.vallejoImg, isClicked: false },
    { name: "Valverde", img: IMAGES.valverdeImg, isClicked: false },
    { name: "Vazquez", img: IMAGES.vazquezImg, isClicked: false },
    { name: "Vinicius", img: IMAGES.viniciusImg, isClicked: false },
];
//Create the renderArray function to render the players list array
const renderArray = (array) => {
    return array.map((player) => (
        <PlayerCard key={player.key} player={player} />
    ));
};
//Component function
const PlayersList = () => {};
export default PlayersList;
