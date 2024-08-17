import "./TodoItem.css";
import DeleteIcon from "../../assets/delete-icon.svg";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/slices/todoSlice";
import { Todo } from "../../types";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };
  return (
    <>
      <div className="todo-item" key={todo.id}>
        {todo.name}
        <img
          src={DeleteIcon}
          onClick={handleDelete}
          width={24}
          height={24}
          alt="Delete"
        />
      </div>
    </>
  );
};
