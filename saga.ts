import { call, put, takeLatest } from "redux-saga/effects";
import TodoService from "./service.ts";
import { todoListSuccess, todoListFailure } from './actions.ts';
import { GET_TODO_LIST } from './constants.ts';

export default function* getTodoList() {
    try {
        const data = yield call(TodoService.getTodoList)
        yield put(todoListSuccess(data))
    } catch (error) {
        yield put(todoListFailure(error))
    }
}

export function* todoWatcher() {
    yield takeLatest(GET_TODO_LIST, getTodoList);
}
