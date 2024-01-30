export default function Card({ id, image, caption, handleClick, index }) {
	return (
		<div
			className="card col-6 col-sm-4 col-md-3 mt-3 mx-1 p-2 d-flex flex-column justify-content-center bg-transparent border border-warning border-5"
			onClick={() => handleClick(id)}
			style={{ animationDelay: `${0.1 * index}s` }}
		>
			<img
				src={image}
				alt={caption}
				className="rounded-pill p-1 border border-warning border-5 bg-white img-fluid"
			></img>
			<span className="text-center text-warning fs-3 fs-md-3 text-wrap">
				{caption}
			</span>
		</div>
	);
}
