import { useQuery } from "react-query"

import { fetchCategoriesList } from "../../api/categories/list/fetchCategoriesList"


export const useCategoriesList = () => {
	const { 
		data: categoriesList, 
		isLoading: isLoadingCategoriesList, 
		isSuccess: isSuccessCategoriesList, 
		isError: isErrorCategoriesList
	} = useQuery({
		queryKey: ["categories-list"],
		queryFn: () => fetchCategoriesList(),
	})
	return { categoriesList, isLoadingCategoriesList, isSuccessCategoriesList, isErrorCategoriesList} 
}