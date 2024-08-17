import "./TodoList.css";
import { RootState, Todo, Todos } from "../../types";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  return (
    <div>
      {todos &&
        todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
