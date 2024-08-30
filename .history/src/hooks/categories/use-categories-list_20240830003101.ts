import { useQuery } from "react-query"

import { fetchCategoriesList } from "../../api/categories/list/fetchCategoriesList"


export const useCategoriesList = () => {
	const { 
		data,
		isLoading, 
		isSuccess, 
		isErrores
	} = useQuery({
		queryKey: ["categories-list"],
		queryFn: () => fetchCategoriesList(),
	})
	return { data, isLoading, isSuccess, isError} 
}