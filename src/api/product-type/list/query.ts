import { fetchProductTypeList } from "./fetchProducttypeList";

export const fetchProductTypeListQuery = () => ({
	queryKey: ["product-type-list"],
	queryFn: () => fetchProductTypeList(),
})