import { createContext, useContext } from "react"
import { useCategoriesList } from "../../hooks";
import { ReactNode } from "react";

const DataContext = createContext({});

interface PropsProvider {
	children?: ReactNode
}


const DataProvider = ({ children }: PropsProvider) =>{

	const {categories} = useCategoriesList()

	return(
  	<DataContext.Provider value={{categories}}>
			{children}
		</DataContext.Provider>
	)
}

const useDataContext = () =>{
	return useContext(DataContext)
}
  //  <</>
export { DataProvider, useDataContext}
	