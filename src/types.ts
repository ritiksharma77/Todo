export interface Todo {
    id: string,
    name: string,
    completed: boolean
}
export interface Todos {
    todos: Todo[]
}

export interface RootState {
  todos: Todos;
}
