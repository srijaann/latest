import React, { useState } from "react";

function Todo({ todo, index }) {
  return;
  <div>{todo.text}</div>;
}

function Hooks() {
  const [todos, setTodos] = useState([
    {
      text: "Learn",
      iscompleted: false
    },
    {
      text: "Study",
      iscompleted: false
    },
    {
      text: "Teach",
      iscompleted: false
    }
  ]);

  return (
    <div>
      <div>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo}></Todo>
        ))}
      </div>
    </div>
  );
}

export default Hooks;
