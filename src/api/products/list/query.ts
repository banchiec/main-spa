import { fetchProductsList } from "./fetchProduct";

export const fetchProductsListQuery = () => ({
	queryKey: ["products-list"],
	queryFn: () => fetchProductsList(),
})