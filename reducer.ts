import {
    GET_TODO_LIST,
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_FAILURE,
    UPDATE_TODO_LIST,
    REMOVE_TODO_LIST,
    UPDATE_TODO_LIST_NAME,
    CREATE_TODO_LIST,
} from './constants.ts';
import {state} from "../interface";

const initialState = {
    todolist: [],
    error: null,
};

export const todoReducer = (state: state, action) => {
    switch (action.type) {
        case GET_TODO_LIST:
            return {
                ...state,
                error: null,
            };
        case GET_TODO_LIST_SUCCESS:
            return {
                ...state,
                todoList: action.todoList,
            };
        case GET_TODO_LIST_FAILURE:
            return {
                ...state,
                error: "API Fail",
            }
        case UPDATE_TODO_LIST:
            const todolist = state.todoList.map((list) => {
                if (list.id === action.id) {
                    list.status = action.status === "completed" ? "pending" : "completed";
                }
            });
            return {
                ...state,
                todolist
            }
        case REMOVE_TODO_LIST:
            state.todoList.slice(state.todoList.findIndex((element) => element.id === action.id), 1);
            return {
                ...state,
            }
        case UPDATE_TODO_LIST_NAME:
            state.todoList.map((list) => {
                if (list.id === action.id) {
                    list.title = action.value;
                }
            });
            return {
                ...state,
            }
        case CREATE_TODO_LIST:
            state.todoList.push(action.list);
            return {
                ...state,
            }
    }
};