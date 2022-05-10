import React from "react";
import {useDispatch} from 'react-redux';
import { todoListUpdate, todoListRemove, todoListNameUpdate } from '../actions.ts';
const ToDoItem = (props) => {
    const dispatch = useDispatch();
    const changeTodoStatus = (id, status) => {
        dispatch(todoListUpdate(id, status));
    }
    const removeTodo = (id) => {
        dispatch(todoListRemove(id));
    }

    const changeTodoContent = (id, value) => {
        dispatch(todoListNameUpdate(id, value));
    }

    return (
        <div className="todo-item">
            <div>
                {props.todo.status === 'completed' ? (
                    <span onClick={() => changeTodoStatus(props.todo.id, props.todo.status)}>Done</span>
                    ) : (
                    <span onClick={() => changeTodoStatus(props.todo.id, props.todo.status)}>Not Done</span>
                    )
                }
            </div>
            <div className="todo-title">
                <input
                    value={props.todo.title}
                    onChange ={(event) => changeTodoContent(props.todo.id, event.target.value)}
                />
            </div>
            <div className="todo-remove" onClick={() => removeTodo(props.todo.id)}>
                Remove
            </div>
        </div>
    )
}
export default ToDoItem;
