import React, { createContext, useContext } from "react"

const DataContext = createContext();

const DataProvider = ({ children }) =>{

	return(
  	<DataContext.Provider value={{}}>
			{children}
		</DataContext.Provider>
	)
}

const useDataContext = () =>{
	return useContext(DataContext)
}
  //  <</>
export { DataProvider, useDataContext}
	