import { useCategoriesFinders } from "./categories/use-categories-finders"

    //</>
export const useMasterDataFinders = () => {
	const categoriesFinder = useCategoriesFinders()

	return {
		...categoriesFinder
	}
}