import { createContext, useContext, useState } from "react";

const urlIndex = createContext;

export const useUrlIndex = () => {
    const context = useContext(urlIndex)
    if (context === undefined) {
        throw new Error ('blabla')
    }
    return context
}

const ContextProvider = ({ children }) => {
    const [menu, toggleMenu] = useState(false)
}