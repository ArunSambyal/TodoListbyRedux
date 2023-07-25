import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./TodoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const handleAddTodo = () => {
    dispatch(addTodo({ id: Date.now(), text: newTodo, complete: false }));
    setNewTodo("");
  };
  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.complete ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => handleToggle(todo.id)}>Toggle</button>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
