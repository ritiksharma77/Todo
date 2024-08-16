import { useState } from "react";
import "./TodoInput.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice";
const TodoInput = () => {
  const [inputValue, setInputValue] = useState<String>("");
  const dispatch = useDispatch();
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleAddButton = () => {
    if (inputValue === "") return;
    dispatch(addTodo(inputValue));
    setInputValue("");
  };
  const handleButtonPress = (e: any) => {
    if (e.keyCode === 13 && inputValue !== "") {
      handleAddButton();
    }
  };
  return (
    <div className="input-wrapper">
      <input
        className="input-container"
        type="text"
        placeholder="Enter a task"
        value={String(inputValue)}
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => handleButtonPress(e)}
      />
      <button className="input-button" type="button" onClick={handleAddButton}>
        Add Task
      </button>
    </div>
  );
};
export default TodoInput;
