import TodoList from "./components/Todolist/index";

const Todo = () => {
  const todoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Code",
    },
  ];

  return <TodoList todoList={todoList} />;
};

export default Todo;
