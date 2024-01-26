export default function Rules() {
	return (
		<>
			<button
				className="btn btn-white border-dark"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#rules"
				aria-expanded="false"
				aria-controls="rules"
			>
				Rules
			</button>
			<div className="collapse" id="rules">
				<p>Click on each card only once! See if you can get to 25 points.</p>
			</div>
		</>
	);
}
