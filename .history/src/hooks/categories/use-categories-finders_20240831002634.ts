import { useMasterData } from "../../context"

export const useCategoriesFinders = () => {
	const { categories } = useMasterData()
	console.log(categories);
	return categories
}