import { useCategoriesList } from "./categories"

export const useMasterDataQueries = () => {
	const {data: categories, isLoading: isLoadingCategories, isError: isErrorCategories} = useCategoriesList()


	const hasBlockingErrors =  isErrorCategories
	const areLoading = isLoadingCategories

	return {
		categories,
		hasBlockingErrors
		areLoading

	}
}