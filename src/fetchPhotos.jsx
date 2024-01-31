import { createClient } from "pexels";

const client = createClient(import.meta.env.VITE_API_KEY);

export default async function fetchPhotos(query, perPage = 20) {
	try {
		const response = await client.photos.search({ query, per_page: perPage });
		return response.photos;
	} catch (err) {
		console.error("Error fetching photos:", err.message);
		return [];
	}
}
