import axios from "axios"

export const fetchProductsCreate = async (newProduct:any) =>{
	const product = await axios.post('http://localhost:5005/api/products', newProduct)
		.then((res) => res.data)
		.catch(error => error)
	return product 
}