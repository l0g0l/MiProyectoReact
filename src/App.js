import React, { Component } from 'react';
import './App.css';
// import MiComponente from './components/MiComponente';
import tasks from './examples/tasks.json';

// importamos components
import Tasks from './components/tasks';
import TaskForm from './components/taskForm';

console.log(tasks);


class App extends Component {

  state = {

    "tasks": tasks
  }

  addTask = (title,descripcion) => {
    console.log(title,descripcion);
   const newTask = {
     "title":title,
     descripcion: descripcion,
     id: this.state.tasks.length
   }

   console.log(newTask);
   
   this.setState({
    "tasks":[...this.state.tasks, newTask]
   })
  
  }
  render() {

    return <div>

      <TaskForm addTask={this.addTask}/>
      <Tasks tasks={this.state.tasks} />


    </div>
  }

}



export default App;