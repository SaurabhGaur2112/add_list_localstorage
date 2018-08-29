import React, { Component } from 'react';

class Task extends Component{
    constructor(props){
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(value){
        alert(value);
    }

    render(){
        return(
            <tr>
                <td style={{textAlign: 'left'}}>{this.props.tasks}</td>
                <td>
                    <button onClick={() => this.handleDelete(this.props.id)}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default Task;