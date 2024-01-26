export default function Card({ image, caption, handleClick }) {
	return (
		<div
			className="card col-6 col-sm-4 col-md-3 col-lg-fluid m-4 p-3 d-flex flex-column justify-content-center bg-transparent border"
			onClick={handleClick}
		>
			<img
				src={image}
				alt="image"
				height="175px"
				className="rounded-pill p-2 border"
			></img>
			<span className="text-center p-2 text-white">{caption}</span>
		</div>
	);
}
