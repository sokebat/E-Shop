import { createContext, useContext } from "react"

export const MyContext = createContext({

})

export const MyContextProvider = MyContext.Provider

export const useMyContext = () => {
    return useContext(MyContext)
}