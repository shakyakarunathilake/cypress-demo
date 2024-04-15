import "./App.scss";
import TodoCard from "./components/atom/TodoCard.ts";

function App() {
  const todoList = [
    { id: 1, title: "Wash the dishes", completed: false, note: "" },
    {
      id: 2,
      title: "Do laundry",
      completed: true,
      note: "Took about 1 hour and 30 minutes",
    },
    { id: 3, title: "Cook dinner", completed: false, note: "" },
  ];

  return (
    <div className="app">
      <h1 data-testid="title">Cypress Demo</h1>
      {todoList.map((todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default App;
