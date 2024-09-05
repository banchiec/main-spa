import { useCategoriesFinders } from "./categories/use-categories-finders"

export const useMasterDataFinders = () => {
	const categoriesFinders = useCategoriesFinders()

	return {
		...categoriesFinders
	}
}