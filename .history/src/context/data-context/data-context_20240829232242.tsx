import { createContext, useContext } from "react"
import { useCategoriesList } from "../../hooks";

const DataContext: any = createContext({});

const DataProvider = ({ children }) =>{

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
	