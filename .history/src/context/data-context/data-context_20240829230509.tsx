import React, { Children, createContext } from "react"

const DatacContext = createContext()

const DataProvider = ({children:any}) =>{

	return(
  	<DatacContext.Provider value={{}}>
			{children}
	)
}
  //  <</>