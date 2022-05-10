import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TodoItem from '../components/TodoItem.tsx';
import ToDoForm from '../components/ToDoForm.tsx';
import { getTodoList } from '../actions.ts';

const ToDoList = () => {
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getTodoList());
}, []);

const todoListData = useSelector((state:any) =>  state?.todoList, () => false) || [];

 return (
    <div className="todo-list">
        <ToDoForm />
        <div className="todo-list-heder">
          <div>Status</div>
          <div>List Name</div>
          <div>Action</div>
        </div>
        {todoListData.map((todo) => (
            <div key={todo.id}>
              <TodoItem todo={todo}/>
            </div>
        ))}
    </div>
 )
}
export default ToDoList;
