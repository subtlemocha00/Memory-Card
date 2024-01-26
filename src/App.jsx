import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./App.css";
import Rules from "./components/Rules";
// import Board from "./components/Board";
import BoardLocal from "./components/BoardLocal";

function App() {
	return (
		<div className="">
			<Rules />
			{/* <Board /> */}
			<BoardLocal />
		</div>
	);
}

export default App;
