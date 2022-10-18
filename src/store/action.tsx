import * as constants from './constants'

export interface Action {
    type : string,
    payload : any
}

export const setTodoInput = (payload : string) => ({
    type: constants.SET_TODO_INPUT,
    payload
})
export const addTodoList = (payload : string) => ({
    type: constants.ADD_TODO_LIST,
    payload
})
export const deleteTodo = (payload : number) => ({
    type: constants.DELETE_TODO,
    payload
})
export const completeJob = (payload : number) => ({
    type:constants.COMPLETE_JOB,
    payload
})
export const unCompleteJob = (payload : number) => ({
    type:constants.UN_COMPLETE_JOB,
    payload
})