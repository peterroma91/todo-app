import { 
    GET_TODO_LIST,
    GET_TODO_LIST_FAILURE,
    GET_TODO_LIST_SUCCESS,
    UPDATE_TODO_LIST,
    REMOVE_TODO_LIST,
    UPDATE_TODO_LIST_NAME,
    CREATE_TODO_LIST,
} from "./constants.ts";
import {TodoInterface} from "../interface";

export const getTodoList = () => ({
    type: GET_TODO_LIST
});

export const todoListSuccess = (todoList:TodoInterface[]) => ({
    type: GET_TODO_LIST_SUCCESS,
    todoList,
});

export const todoListFailure = (error: string) => ({
    type: GET_TODO_LIST_FAILURE,
    error,
});

export const todoListUpdate = (id:number, status: string) => ({
    type: UPDATE_TODO_LIST,
    id,
    status,
});

export const todoListRemove = (id: number) => ({
    type: REMOVE_TODO_LIST,
    id
});

export const todoListNameUpdate = (id: number, value: string) => ({
    type: UPDATE_TODO_LIST_NAME,
    id,
    value,
});

export const todoListCreate = (list:TodoInterface ) => ({
    type: CREATE_TODO_LIST,
    list,
});