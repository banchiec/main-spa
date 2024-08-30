import { fetchCategoriesCreate } from "./fetchCategoriesCreate";

export const postCategories = () => ({
	mutationKey: "categories-create",
	mutationFn: (category: any)  => fetchCategoriesCreate(category)
})