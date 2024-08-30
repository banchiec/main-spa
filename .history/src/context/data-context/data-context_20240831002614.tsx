import { createContext, useMemo, ReactNode } from "react"
import { useMasterDataQueries } from "../../hooks/useMasterDataQueries";
import { CategoryTypes } from '../../../.history/src/context/data-context/types_20240829235356';

export const DataContext = createContext({
	categories: Array<CategoryTypes>
});

interface PropsProvider {
	children?: ReactNode
}

export const DataProvider = ( props: PropsProvider) =>{
	const { children } = props

	const { categories } = useMasterDataQueries()

	const contextValue = useMemo(() =>({
		categories
	}),[categories])

	return(
  	<DataContext.Provider value={{contextValue}} {...props}>
			{children}
		</DataContext.Provider>
	)
}

  //  <</>
	