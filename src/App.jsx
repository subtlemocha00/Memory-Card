import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./App.css";
import Rules from "./components/Rules";
import { fetchPhotos } from "./fetchPhotos";
import BoardLocal from "./components/BoardLocal";
import Scoreboard from "./components/Scoreboard";
import { useEffect, useState } from "react";
import imageDataAnimals from "./imageDataAnimals";
import imageDataVehicles from "./imageDataVehicles";
import ImageSelector from "./components/ImageSelector";

function App() {
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [guesses, setGuesses] = useState([]);
	const [imageSet, setImageSet] = useState(imageDataAnimals);

	const activeImageSet = imageSet === imageDataAnimals ? "animals" : "vehicles";

	useEffect(() => {
		if (currentScore > highScore) {
			setHighScore(currentScore);
		}
	}, [currentScore]);

	const cardSelect = (id) => {
		if (guesses.includes(id)) {
			setGuesses([]);
			setCurrentScore(0);
		} else {
			setGuesses((prevGuesses) => [...prevGuesses, id]);
			setCurrentScore(currentScore + 1);
		}
	};

	const selectImageSet = async (images) => {
		setCurrentScore(0);
		if (images === "animals") {
			setImageSet(imageDataAnimals);
		}
		if (images === "vehicles") {
			setImageSet(imageDataVehicles);
		}
		if (images != "animals" && images != "vehicles") {
			setImageSet(await fetchPhotos(images));
		}
	};

	return (
		<div className="">
			<Rules />
			<ImageSelector
				selectImageSet={selectImageSet}
				activeImageSet={activeImageSet}
			/>
			<Scoreboard currentScore={currentScore} highScore={highScore} />
			<BoardLocal cardSelect={cardSelect} imageSet={imageSet} />
		</div>
	);
}

export default App;
