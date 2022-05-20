import React from "react";
import PropTypes from "prop-types";

TodoList.protoTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
};

const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
};

export default TodoList;
