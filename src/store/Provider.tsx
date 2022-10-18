import React, { ReactNode } from 'react';
import TodoContext, { ITodoState } from "./ApplicationContext";
import logger from "./logger";
import reducer, { initState } from "./reducer";
interface TodoContextProps {
    children: ReactNode
}
const Provider = ({ children }: TodoContextProps) => {
    const [state, dispatch] = React.useReducer(logger(reducer), initState);
    //const [state, dispatch] = React.useReducer(reducer, initState);
    const value: ITodoState = {
        state: state, dispatch: dispatch
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
};
export default Provider