import { createContext, useMemo, ReactNode } from "react"
import { useMasterDataQueries } from "../../hooks/useMasterDataQueries";

export const MasterDataContext = createContext({
	hasBlockingErrors: false,
	notBlockingLoading: false,
	categories: { all: [], active: []} 
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
  	<MasterDataContext.Provider value={{contextValue}} >
			{children}
		</MasterDataContext.Provider>
	)
}

  //  <</>
	