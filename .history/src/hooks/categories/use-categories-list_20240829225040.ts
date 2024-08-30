import { useQuery } from "react-query"

import { fetchCategoriesList } from "../../api/categories/list/fetchCategoriesList"


export const useCategoriesList = () => {
	const { 
		data: categories, 
		isLoading: isLoadingCategories, 
		isSuccess: isSuccessCategories, 
		isError: isErrorCategories
	} = useQuery({
		queryKey: ["categories-list"],
		queryFn: () => fetchCategoriesList(),
	})
	return { categories, isLoadingCategories, isSuccessCategories, isErrorCategories} 
}