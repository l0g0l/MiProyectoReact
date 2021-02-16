// import React, {Component} from 'react';
import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        posts: []

    }
    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(res);
        const data = await res.json();
        this.setState({posts: data})

    }

    render() {
        return (
            <div>
               <h1>Publicaciones</h1> 
               {this.state.posts.map(item => {
                    return <div key ={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>

                    </div> 
                   })
               }

            </div>
        )
    }
}
