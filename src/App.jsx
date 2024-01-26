import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./App.css";
import Rules from "./components/rules";
import Board from "./components/board";

function App() {
	return (
		<div className="container">
			<Rules />
			<Board />
		</div>
	);
}

export default App;
