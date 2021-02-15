import React, { Component } from 'react';
import PropTypes from 'prop-types';

 {/* creo una funcion para dar estilos aqui, no en el CSS, de esta forma, con un ternario puedo hacer un condicional, de que si la tarea se true o false se pinte de una manera u otra. Para cambiar el estado de la trea, lo hago en task.json*/}
class Task extends Component {
   
    StyleCompleted() {
        {/* si es verdadero, pinta azul, sino pinta negro*/}
        return {
            fontSize: '20px',
            color: this.props.task.done ?'blue':'black', 
            textDecoration: this.props.task.done ? 'line-through':'none'
            
        }
    }

    render() {
        const { task } = this.props;
        return (
            <p style={this.StyleCompleted()}>
                {task.title} -
                {task.description} -
                {task.done} -
                {task.id}
                <input type="checkbox" />
                <button style={btnDelete}>
                    X
            </button>
            </p>
        )
    }
}
 Task.propTypes = {
     task:PropTypes.object.isRequired
 }
const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}
export default Task