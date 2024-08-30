import { ReactNode } from "react";
import { createContext, useMemo } from "react"
import { useMasterDataQueries } from "../../hooks/useMasterDataQueries";

const DataContext = createContext({});

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
	