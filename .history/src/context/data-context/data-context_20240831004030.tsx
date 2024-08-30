import { createContext, useMemo, ReactNode } from "react"
import { useMasterDataQueries } from "../../hooks/useMasterDataQueries";
import { CategoryTypes } from '../../../.history/src/context/data-context/types_20240829235356';

export const MasterDataContext = createContext({
	hasBlockingErrors: false,
	notBlockingLoading: false,
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
  	<MasterDataContext.Provider value={contextValue} {...props}>
			{children}
		</MasterDataContext.Provider>
	)
}

  //  <</>
	