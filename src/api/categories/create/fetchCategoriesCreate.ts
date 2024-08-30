import axios from "axios"

export const fetchCategoriesCreate = async (newCategory:any) =>{
	console.log(newCategory)
	const category = await axios.post('http://localhost:5005/api/categories', newCategory)
		.then((res) => res.data)
		.catch(error => error)
	return category 
}