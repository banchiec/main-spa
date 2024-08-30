import { useMasterData } from "../../context";

export const useCategoriesFinders = () => {
	const { categories } = useMasterData()
	
	const getCategoriesAll = () => {
		return categories
	}
	const getCategoriesById = (id:number) => {
		return categories[id]
	}
	return {getCategoriesAll, getCategoriesById}
}