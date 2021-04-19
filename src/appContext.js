import { createContext, useContext, useReducer } from "react";

const appContext = createContext();

const initialState = {
    showLogin: false,
    showSignup: false
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'showLogin':
            return {
                showLogin: true
            };
        case 'showSignup':
            return {
                showSignup : true
            };
        default:
            return "Default"
    }
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useRudcer(reducer, initialeState);
    
    return(
        <appContext.Provider value={state, dispatch}>
            { children }
        </appContext.Provider>
    );
}

const useAppContext = () => {
    useContext(appContext);
}
export {
    useAppContext, AppProvider
}