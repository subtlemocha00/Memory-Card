import { useEffect, useState } from "react";
import { createClient } from "pexels";
import Card from "./Card";

const client = createClient(import.meta.env.VITE_API_KEY);

export default function Board() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const query = "drink";
		client.photos
			.search({ query, per_page: 20 })
			.then((photos) => {
				setData(photos.photos);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	const shuffle = () => {
		setLoading(true);
		const shuffledArray = [...data];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		setData(shuffledArray);
		setLoading(false);
	};
	return (
		<div className="container d-flex justify-content-evenly row bg-primary p-0 m-0">
			{loading ? (
				<div>Loading...</div>
			) : data.length > 0 ? (
				data.map((item) => (
					<Card
						key={item.id}
						image={item.src.medium}
						caption={item.alt}
						handleClick={shuffle}
					/>
				))
			) : (
				<div>Error: {error}</div>
			)}
		</div>
	);
}
