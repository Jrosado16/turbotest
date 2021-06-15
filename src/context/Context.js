import React, { createContext, useState } from "react";


export const DataCotext = createContext()

export const DataProvider = ({children}) => {

    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        console.log('menu')
        
        setMenu(!menu)
        
    }

    return (
        <DataCotext.Provider
            value={{handleMenu, menu}}
        >
            {children}
        </DataCotext.Provider>
    )
}