import React from "react";

export default function TodoList(props) {
  const { TodoList, handleClick } = props;
  function todoClick(item) {
    return handleClick(item.id);
  }
  return (
    <div>
      <ul>
        {TodoList.map((item, key) => (
          <li onClick={() => todoClick(item)}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
