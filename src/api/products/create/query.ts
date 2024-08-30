import { fetchProductsCreate } from "./fetchProductCreate";

export const postProducts= () => ({
	mutationKey: "products-create",
	mutationFn: (product: any)  => fetchProductsCreate(product)
})