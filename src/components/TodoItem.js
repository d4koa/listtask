import React from "react"
import propTypes from "prop-types"
import Button from "./Button"

const TodoItem = ({ todo, del, open, toggleComplete }) => {
  const delById = (id) => {
    del(id)
  }

  return (
    <div style={todoItem}>
      <div>
        <h3 style={titleTodo}>{todo.title}</h3>
        <p style={descriptionTodo}>{todo.description}</p>
        <p style={dateTodo}>{todo.date}</p>
      </div>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <Button text="edit" variant="success" action={() => open(todo.id)} />
        <Button text="delete" variant="warning" action={() => delById(todo.id)} />
      </div>
    </div>
  )
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  del: propTypes.func.isRequired,
  toggleComplete: propTypes.func.isRequired
}

export default TodoItem;

const todoItem = {
  background: "#2da4f8",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  height: "10rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0"
}

const titleTodo = {
  fontSize: "20px"
}

const descriptionTodo = {
  fontSize: "18px"
}

const dateTodo = {
  fontSize: "12px"
}
