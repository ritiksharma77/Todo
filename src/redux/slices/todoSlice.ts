import { createSlice } from "@reduxjs/toolkit";
import { Todos } from "../../types";

const initialState: Todos = {
  todos: []
}

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now().toString(),
        name: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    completedTodo: (state, action) => {
      const index = state.todos.findIndex((todo: any) => todo.id === action.payload);
      state.todos[index].name = action.payload.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo: any) => todo.id !== action.payload);
    },
  },
});

export const {addTodo, removeTodo, completedTodo} = todoSlice.actions;

export default todoSlice.reducer;