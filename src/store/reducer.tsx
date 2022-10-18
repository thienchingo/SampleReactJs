import { Action } from "./action";
import { ADD_TODO_LIST, COMPLETE_JOB, DELETE_TODO, SET_TODO_INPUT, UN_COMPLETE_JOB } from "./constants";
export type State = {
    todos: string[],
    todoInput: string,
    status: boolean[]
}

export const initState: State = {
    todos: [],
    status: [],
    todoInput: '',
}
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case SET_TODO_INPUT:
            {
                const newState: State = {
                    ...state, todoInput: action.payload
                };
                return newState;
            }
        case ADD_TODO_LIST:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                status: [...state.status, false]
            };
        case DELETE_TODO:
            {
                const newTodos: string[] = [...state.todos];
                newTodos.splice(action.payload, 1);
                
                const newStatus:boolean[] = [...state.status]
                newStatus.splice(action.payload,1)
                return {
                    ...state,status:newStatus, todos: newTodos
                };
            }
        case COMPLETE_JOB:
            {
                const newStatus: boolean[] = [...state.status]
                newStatus[action.payload] = true;
                return {
                    ...state,
                    status: newStatus
                }
            }
        case UN_COMPLETE_JOB:
            {
                const newStatus: boolean[] = [...state.status]
                newStatus[action.payload] = false;
                return {
                    ...state,
                    status: newStatus
                }
            }
        default:
            throw new Error('No action define!!!')
    }
}
export default reducer

