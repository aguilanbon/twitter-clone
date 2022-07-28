import { createContext, useState } from "react";

const GlobalHelperContext = createContext(null)

export const GlobalProvider = ({children}) => {

    const [inputState, setInputState] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const value = {
        inputState, setInputState,
        modalIsOpen, setModalIsOpen
    }

    return (
        <GlobalHelperContext.Provider value={value}>
            {children}
        </GlobalHelperContext.Provider>
    )
}

export default GlobalHelperContext