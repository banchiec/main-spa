import { fetchCategoriesList } from "./fetchCategoriesList";

export const fetchCategoriesListQuery = () => ({
		queryKey: ["categories-list"],
		queryFn: () => fetchCategoriesList(),
})