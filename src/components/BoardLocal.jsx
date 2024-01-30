import { useEffect, useState } from "react";
import Card from "./Card";

export default function BoardLocal({ cardSelect, imageSet }) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setData(imageSet);
		setLoading(false);
	}, [imageSet]);

	const shuffle = (id) => {
		cardSelect(id);
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
		<div className="d-flex flex-wrap justify-content-evenly bg-primary">
			{loading ? (
				<div>Loading...</div>
			) : (
				data.map((item, index) => (
					<Card
						key={item.id}
						id={item.id}
						image={item.src.medium}
						caption={item.alt}
						handleClick={shuffle}
						index={index}
					/>
				))
			)}
		</div>
	);
}
