import axios from "axios"

export const fetchProductTypeCreate = async (productType:any) =>{
	const productTypeNew = await axios.post('http://localhost:5005/api/product-type', productType)
		.then((res) => res.data)
		.catch(error => error)
	return productTypeNew 
}