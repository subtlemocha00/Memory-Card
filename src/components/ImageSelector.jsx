export default function ImageSelector({ selectImageSet, activeImageSet }) {
	const handleClick = (imageSet) => {
		selectImageSet(imageSet);
	};
	return (
		<div className="d-flex justify-content-center pt-1 bg-primary">
			<button
				onClick={() => handleClick("animals")}
				type="button"
				className={`btn btn-primary select-a border-warning border-4 m-2 mb-0 fs-md-4 ${
					activeImageSet === "animals" ? "active" : ""
				}`}
			></button>
			<button
				onClick={() => handleClick("vehicles")}
				type="button"
				className={`btn btn-primary select-b border-warning border-4 col-auto m-2 mb-0 fs-md-4 ${
					activeImageSet === "vehicles" ? "active" : ""
				}`}
			></button>
		</div>
	);
}
