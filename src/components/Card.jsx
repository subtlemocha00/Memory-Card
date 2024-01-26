export default function Card({ image, caption, handleClick }) {
	return (
		<div
			className="card col-6 col-sm-4 col-md-3 col-lg-fluid m-2 p-3 d-flex flex-column justify-content-center bg-transparent border border-warning border-5"
			onClick={handleClick}
		>
			<img
				src={image}
				alt="image"
				className="rounded-pill p-1 border border-warning border-5 bg-white img-fluid"
			></img>
			<span className="text-center text-warning text-lg">{caption}</span>
		</div>
	);
}
