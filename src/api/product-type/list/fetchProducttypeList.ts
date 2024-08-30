import axios from "axios"

export const fetchProductTypeList = async () => {
	const productType = await axios.get('http://localhost:5005/api/product-type')
		.then((res) => res.data)
		.catch(error => error)
	return productType 
}
