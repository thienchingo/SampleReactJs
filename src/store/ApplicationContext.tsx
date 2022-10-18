import React, { createContext } from "react"
import { Action } from "./action"
export interface ITodoState {
    state: IState
    dispatch: React.Dispatch<Action>
}
interface IState {
    todos: string[]
    status: boolean[]
    todoInput: string
}

const init: ITodoState = {
    state: {
        todos: [],
        status: [],
        todoInput: ''
    },
    dispatch : () => {}
    
}
const ApplicationContext = createContext<ITodoState>(init);
export default ApplicationContext