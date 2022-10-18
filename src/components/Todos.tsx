import React, { useRef } from "react"
import { actions, useStore } from "../store";
const Todos: React.FC = () => {
  const {state, dispatch} = useStore()
  const {todos,todoInput,status} = state
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = () => {
    dispatch(actions.addTodoList(todoInput))
    dispatch(actions.setTodoInput(''))
    inputRef.current?.focus()
  }
  const handleCheckBox = (payload: number) => {
    if (!status[payload]) {
      dispatch(actions.completeJob(payload))
    } else {
      dispatch(actions.unCompleteJob(payload))
    }
  }
  const handleDeleteJob = (payload: number) => {
    dispatch(actions.deleteTodo(payload))
  }
  return (
    <div>
      <input value={todoInput}
        placeholder='Enter todo'
        ref={inputRef}
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      ></input>
      <button onClick={handleSubmit}>Todo</button>
      <form>
        {todos.map((todo: string, index: number) => (
          <div key={index}>
            <input type='checkbox' checked={status[index]} onChange={() => handleCheckBox(index)} />{todo}<span className='delete' style={{cursor:'pointer',color:'#f9cc9d'}} onClick={() => handleDeleteJob(index)}>&emsp; &times;</span>
          </div>
        ))}
      </form>
    </div>
  );
}
export default Todos

