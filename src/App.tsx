import "./App.css";
import Header from "./components/header/Header";
import TodoInput from "./components/input/TodoInput";
import TodoList from "./components/list/TodoList";

function App() {
  return (
    <div className="todo-container">
      <Header />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
