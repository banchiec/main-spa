import { createContext, useMemo, ReactNode } from "react"
import { useMasterDataQueries } from "../../hooks/useMasterDataQueries";

export const MasterDataContext = createContext({
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

	console.log(contextValue);
	return(
  	<MasterDataContext.Provider value={{contextValue}} >
			{children}
		</MasterDataContext.Provider>
	)
}

  //  <</>
	