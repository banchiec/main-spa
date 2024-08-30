import { useQuery, useQueryClient } from "react-query"
import { fetchCategoriesList } from "../../api/categories/list/fetchCategoriesList"


export const useCategoriesList = () => {
	const { data: dataCategoriesList, isLoading: isLoadingCategoriesList, isSuccess: isSuccessCategoriesList, isError: isErrorCategoriesList} = useQuery({
		queryKey: ["categories-list"],
		queryFn: () => fetchCategoriesList(),
	})
	return { dataCategoriesList, isLoadingCategoriesList, isSuccessCategoriesList, isErrorCategoriesList} 
}