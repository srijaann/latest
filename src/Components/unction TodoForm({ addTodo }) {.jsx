Function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handlesubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add new todo"
          onChange={e => setValue(e.target.value)}
        />
      </form>
    );
  }


  function Todo({ todo, index, completeTodo }) {
    return
    <div style={{ textDecoration: todo.iscompleted ? "line-through" : '' }}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
  }
  