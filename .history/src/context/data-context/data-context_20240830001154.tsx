import { createContext, useContext, useMemo } from "react"
import { useCategoriesList } from "../../hooks";
import { ReactNode } from "react";

const DataContext = createContext({
});

interface PropsProvider {
	children?: ReactNode
}

const DataProvider = ( props: PropsProvider) =>{
	const { children } = props

	const { categories } = useCategoriesList()

	const contextValue = useMemo(() =>({
		categories
	}),[categories])

	return(
  	<DataContext.Provider value={{contextValue}} {...props}>
			{children}
		</DataContext.Provider>
	)
}

const useDataContext = () =>{
	return useContext(DataContext)
}
  //  <</>
export { DataProvider, useDataContext}
	