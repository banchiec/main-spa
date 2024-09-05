import { useCategoriesList } from "./categories"

export const useMasterDataQueries = () => {
	const {data: categories, isLoading: isLoadingCategories, isError: isErrorCategories} = useCategoriesList()

	const hasBlockingErrors =  isErrorCategories
	const notBlockingLoading = isLoadingCategories

	return {
		categories,
		hasBlockingErrors,
		notBlockingLoading
	}
}
