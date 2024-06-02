import React from 'react';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import EditModal from './components/EditModal';

import logo from './list.png';
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Sholat Subuh berjamaah",
        description: "Bangun pagi dan sholat di masjid",
        date: "2024-06-02",
        completed: true
      },
      {
        id: 2,
        title: "Baca Quran",
        description: "Baca Quran setelah sholat subuh",
        date: "2024-06-02",
        completed: false
      },
      {
        id: 3,
        title: "Bangun Pagi",
        description: "Bangun pagi pukul 3 untuk shalat malam",
        date: "2024-06-02",
        completed: true
      },
    ],
    isEdit: false,
    editData: {
      id: "",
      title: "",
      description: "",
      date: ""
    }
  }

  update = () => {
    const { id, title, description, date } = this.state.editData;
    const newData = { id, title, description, date, completed: false };
    const newTodos = this.state.todos.map(todo => todo.id === id ? newData : todo);
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        title: "",
        description: "",
        date: ""
      }
    });
  }

  setField = (field, value) => {
    this.setState({
      editData: {
        ...this.state.editData,
        [field]: value
      }
    });
  }

  openModal = (id, data) => {
    const todo = this.state.todos.find(todo => todo.id === id);
    this.setState({
      isEdit: true,
      editData: todo
    });
  }

  closeModal = () => {
    this.setState({
      isEdit: false
    });
  }

  deleteTask = (id) => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    });
  }

  addTask = (data) => {
    const id = this.state.todos.length + 1;
    const newData = {
      id,
      ...data,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newData]
    });
  }

  toggleComplete = (id) => {
    const newTodos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: newTodos });
  }

  render() {
    const { todos } = this.state;
    const todoList = todos.filter(todo => !todo.completed);
    const completedList = todos.filter(todo => todo.completed);

    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo"/>
          <h1>ListTask</h1>
        </div>
        <p className="subJudul">Buat list yang Anda butuhkan!</p>
        <div className="list">
          <h2>Todo List</h2>
          {todoList.map(item =>
            <TodoItem
              key={item.id}
              todo={item}
              del={this.deleteTask}
              open={this.openModal}
              toggleComplete={this.toggleComplete}
            />
          )}
        </div>
        <div className="list">
          <h2>Completed</h2>
          {completedList.map(item =>
            <TodoItem
              key={item.id}
              todo={item}
              del={this.deleteTask}
              open={this.openModal}
              toggleComplete={this.toggleComplete}
            />
          )}
        </div>
        <div className="input-form">
          <FormInput add={this.addTask} />
        </div>
        <EditModal
          edit={this.state.isEdit}
          close={this.closeModal}
          setField={this.setField}
          data={this.state.editData}
          update={this.update}
        />
      </div>
    );
  }
}

export default App;
