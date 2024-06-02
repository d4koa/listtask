import React from "react"
import Button from "./Button"
import "../styles/FormInput.css"

class FormInput extends React.Component {
  state = {
    title: "",
    description: "",
    date: ""
  }

  change = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit = e => {
    e.preventDefault()
    if (this.state.title !== "" && this.state.description !== "" && this.state.date !== "") {
      this.props.add(this.state)
    }
    this.setState({
      title: "",
      description: "",
      date: ""
    })
  }

  render() {
    return (
      <form style={inputForm} onSubmit={this.submit}>
        <input
          type="text"
          name="title"
          onChange={this.change}
          value={this.state.title}
          style={input}
          placeholder="add task"
        />
        <input
          type="text"
          name="description"
          onChange={this.change}
          value={this.state.description}
          style={input}
          placeholder="add description"
        />
        <input
          type="date"
          name="date"
          onChange={this.change}
          value={this.state.date}
          style={input}
          placeholder="add date"
        />
        <Button text="add" variant="primary" action={this.submit} />
      </form>
    )
  }
}

export default FormInput;

const inputForm = {
  background: "#fff",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0"
}

const input = {
  width: "70%",
  border: "none",
}
