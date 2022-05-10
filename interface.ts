export interface TodoInterface {
    id: number,
    title: string,
    status: string,
    user_id: number,
    due_on: number,
}


export interface state { 
    todolist: TodoInterface[] | [],
    error: null | string,
};