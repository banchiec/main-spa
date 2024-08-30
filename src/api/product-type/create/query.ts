import { fetchProductTypeCreate } from "./fetchProductTypeCreate";

export const postProductType = () => ({
	mutationKey: "product-type-create",
	mutationFn: (productType: any)  => fetchProductTypeCreate(productType)
})