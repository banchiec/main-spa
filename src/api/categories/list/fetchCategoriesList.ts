import axios from "axios"

export const fetchCategoriesList = async () => {
	const categories = await axios.get('http://localhost:5005/api/categories')
		.then((res) => res.data)
		.catch(error => error)
	return categories 
}