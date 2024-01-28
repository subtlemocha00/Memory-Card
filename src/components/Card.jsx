export default function Card({ image, caption, handleClick }) {
	return (
		<div
			className="card col-5 col-sm-4 col-md-2 mt-3 mx-1 p-2 d-flex flex-column justify-content-center bg-transparent border border-warning border-5"
			onClick={handleClick}
		>
			<img
				src={image}
				alt={caption}
				className="rounded-pill p-1 border border-warning border-5 bg-white img-fluid"
			></img>
			<span className="text-center text-warning fs-3 text-nowrap">
				{caption}
			</span>
		</div>
	);
}
