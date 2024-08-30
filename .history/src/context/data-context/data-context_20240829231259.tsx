import { createContext, useContext } from "react"
import { useCategoriesList } from "../../hooks";

const DataContext = createContext();

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
	