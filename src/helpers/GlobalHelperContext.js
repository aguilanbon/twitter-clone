import { createContext } from "react";

const GlobalHelperContext = createContext(null)

export const GlobalProvider = ({children}) => {

    const [inputState, setInputState] = useState(false)

    const value = {
        inputState, setInputState
    }

    return (
        <GlobalHelperContext.Provider value={value}>
            {children}
        </GlobalHelperContext.Provider>
    )
}

export default GlobalHelperContext