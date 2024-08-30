import { useMasterData } from "../../context";

export const useCategoriesFinders = () => {
	const { categories } = useMasterData()
	
	const getCategoriesAll = () => {
		return categories
	}
	console.log(categories);
	return {getCategoriesAll}
}