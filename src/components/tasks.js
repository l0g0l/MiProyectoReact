import React, { Component } from 'react';
import Task from './task';
import PropTypes from 'prop-types'; // solo para indicar el tipo dedato que tenemos que pasar


class Tasks extends Component {

    render() {
        {/* con esto lo que hacemos en iterar tareas que es un array y le digo que por cada elemento me lo meta en una etiqueta P. Cada vez que hacemos un map e iteramos elementos hay que crear una propiedad KEY por cada uno de ellos con valor único, en este caso es el id
        {this.state.tareas.map(e => <p key= {e.id}>
          {e.title}-
          {e. description}-
          {e.done}-
          {e.id}
          <Tasks/> {/* a cada elemento le añado el componente tasks que es tarea
          </p>)}. Todo esto lo cambiamos por props ya que es una clase PADRE*/}

        return this.props.tasks.map(task => 
            <Task 
            task= {task} 
            key= {task.id} 
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
            />)
            {/*<p key= {e.id}>
            {e.title}-
            {e. description}-
            {e.done}-
            {e.id}
          
            <input type="checkbox" />
            <button>
                X
            </button>
        </p> toda esta iteración la quito de aquí y me la llevo a task, puesto que es la creación de una sola tarea, lo sustituyo por el componente <task />*/}



        
    }
}

// Task.propTypes = {
//     tasks: PropTypes.array.isRequired
// }
export default Tasks;