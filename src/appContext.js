import { createContext, useContext, useReducer } from 'react';

const appContext = createContext();


const AppProvider = ({children}) => {
    
    return(
        <appContext.Provider>
            { children }
        </appContext.Provider>
    );
};

const useAppContext = () => {
    useContext(appContext);
};
export {
    useAppContext, AppProvider
};