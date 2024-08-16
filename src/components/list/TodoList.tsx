import "./TodoList.css";
import { Todo } from "../../types";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
const TodoList = () => {
  const todos = useSelector((state: any) => state.todos.todos);
  return (
    <div>
      {todos &&
        todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
