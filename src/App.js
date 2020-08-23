import React from "react";
import TodoList from "./components/TodoList";

function App() {
  const listTodo = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
    { id: 3, title: "three" },
  ];
  function handleChange(todo) {
    console.log(listTodo.filter((item) => item.id !== todo));
  }
  return (
    <>
      <TodoList handleClick={handleChange} TodoList={listTodo} />
    </>
  );
}

export default App;
