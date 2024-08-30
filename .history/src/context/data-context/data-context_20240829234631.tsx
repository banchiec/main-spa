import { createContext, useContext } from "react"
import { useCategoriesList } from "../../hooks";
import { ReactNode } from "react";
import { DataContextTypes } from "./types";

const DataContext = createContext<DataContextTypes>({});

interface PropsProvider {
	children?: ReactNode
}

const DataProvider = ( props: PropsProvider) =>{
	const { children } = props

	const { categories } = useCategoriesList()

	return(
  	<DataContext.Provider value={{categories}} {...props}>
			{children}
		</DataContext.Provider>
	)
}

const useDataContext = () =>{
	return useContext(DataContext)
}
  //  <</>
export { DataProvider, useDataContext}
	