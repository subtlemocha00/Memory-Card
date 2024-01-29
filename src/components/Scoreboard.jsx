export default function Scoreboard({ currentScore, highScore }) {
	return (
		<div className="d-flex justify-content-center pt-1 bg-primary">
			<span className="btn btn-outline-warning border-4 col-auto m-2 mb-0 fs-md-4">
				Current Score: {currentScore}
			</span>
			<span className="btn btn-outline-warning border-4 col-auto m-2 mb-0 fs-md-4">
				High Score: {highScore}
			</span>
		</div>
	);
}
