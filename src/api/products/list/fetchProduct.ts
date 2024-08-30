import axios from "axios"

export const fetchProductsList =  async () => {
	const products = await axios.get('http://localhost:5005/api/products')
		.then((res) => res.data)
		.catch(error => error)
	return products
}

