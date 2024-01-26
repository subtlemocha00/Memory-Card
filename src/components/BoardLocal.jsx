import { useEffect, useState } from "react";
import Card from "./Card";
import imageData from "../assets/imageData";

export default function BoardLocal() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setData(imageData);
		setLoading(false);
		console.log(data);
	}, []);

	const shuffle = () => {
		setLoading(true);
		const shuffledArray = [...data];
		console.log(shuffledArray);
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
		<div className="d-flex flex-wrap justify-content-evenly bg-primary">
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
