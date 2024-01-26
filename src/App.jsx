import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./App.css";
import Rules from "./components/Rules";
import Board from "./components/Board";

function App() {
	return (
		<div className="container">
			<Rules />
			<Board />
		</div>
	);
}

export default App;
