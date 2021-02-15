import React, { Component } from 'react';

export default class TaskForm extends Component {
    state = {
        title: '',
        descripcion: ''
    }


    onSubmit = event => {
        console.log(this.state); // muestra los datos de title y descripcion que hayas metido en los inputs
       
        
        this.props.addTask(this.state.title, this.state.descripcion)
        event.preventDefault()
        
    }

    onChange = event => {
        console.log(event.target.name, event.target.value)
        this.setState({

            [event.target.name]: event.target.value,

        })

    }
    render() {
        this.props.addTask('title one', 'descripcion one')
        
        return (

            <form onSubmit={this.onSubmit}>
                <input
                    name="title"
                    type="text"
                    placeholder="escribe tarea"
                    onChange={this.onChange}
                    value={this.state.title} />
                <br />
                <br />
                <textarea
                    name="descripcion"
                    placeholder="escribe una descripcion" onChange={this.onChange}
                    value={this.state.descripcion}></textarea>
                <button
                    type="submit">Enviar formulario
            </button>
            </form>
        )
    }

}

