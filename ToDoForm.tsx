import React from "react";
import shortid from "shortid";
import {useDispatch} from 'react-redux';
import { todoListCreate } from '../actions.ts';
import {TodoInterface} from "../interface";
const ToDoForm = () => {
 
 const inputRef = React.useRef<HTMLInputElement>(null)
 const dispatch = useDispatch();
 
 const [values, setValues] = React.useState("")
function handleInputChange(event) {
    setValues(event.target.value)
 }
 
 function handleInputAdd() {
    const newTodo: TodoInterface = {
        id: parseInt(shortid.generate()),
        title: values,
        status: "pending",
        user_id: parseInt(shortid.generate()) + 1,
        due_on: new Date().getDate(),
    }
    dispatch(todoListCreate(newTodo));
    if (inputRef && inputRef.current) {
        inputRef.current.value = ""
    }
 }
 return (
 <div className="todo-form">
     <input
        ref={inputRef}
        type="text"
        placeholder="Enter new todo"
        onChange={event => handleInputChange(event)}
    />
    <input type="button" value="add" onClick={event => handleInputAdd()} />
 </div>
 )
}
export default ToDoForm;
