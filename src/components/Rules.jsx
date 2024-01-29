export default function Rules() {
	return (
		<div className="bg-danger d-flex">
			<button
				className="btn btn-lg btn-warning m-3 col-6 fs-3 fw-bold text-primary"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#rules"
				aria-expanded="false"
				aria-controls="rules"
			>
				Rules
			</button>
			<div className="collapse" id="rules">
				<p className="p-2 m-0 text-white text-center fs-4">
					Click on each card only once! See if you can get to 25 points.
				</p>
			</div>
		</div>
	);
}
