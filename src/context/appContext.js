import React, { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';


const appContext = createContext();
// const initState = {
//     signup: true,
//     login: false
// };
// const appReducers =(state = initState,action)=> {
//     switch(action.type) {
//         case '':
//             return {}
//     }
//     default 'Default'
// };

const AppProvider = ({children}) => {
    // const [state, dispatch] = useReducer(appReducers, initState);
    const appHistory = useHistory();

    const toPage = (url)=> {
        appHistory.push(url);
    }
    
    return(
        <appContext.Provider value={{toPage}}>
            { children }
        </appContext.Provider>
    );
};

const useAppContext = () => useContext(appContext);
export {
    useAppContext, AppProvider
};