import { createContext, useMemo, ReactNode } from "react"
import { useMasterDataQueries } from "../../hooks/useMasterDataQueries";
import { CategoryTypes } from "./types";

interface MasterDataContextTypes {
	hasBlockingErrors: boolean,
	notBlockingLoading: boolean,
	categories: [] 
}

export const MasterDataContext = createContext<MasterDataContextTypes>({
	hasBlockingErrors: false,
	notBlockingLoading: false,
	categories: []
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
	