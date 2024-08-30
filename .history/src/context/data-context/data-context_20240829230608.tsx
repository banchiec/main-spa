import React, { Children, createContext } from "react"

const DatacContext = createContext()

const DataProvider = ({children}) =>{

	return(
  	<DatacContext.Provider value={{}}>
			{children}
		</DatacContext.Provider>
	)
}
  //  <</>