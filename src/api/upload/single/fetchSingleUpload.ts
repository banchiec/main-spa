import axios from "axios"

export const  fetchSingleUpload = async (image:any) => {
		const imagePath = await axios.get(`http://localhost:5005/api/uploads/${image}`,)
		.then((res) => {
			return res?.config?.url})
		.catch(error => error)
	return imagePath
}