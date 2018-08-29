import React, { Component } from 'react';
import Task from './task';

class TaskList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.tasks == null){
            return "No values";
        }
        return(
            <table border="1" style={{marginTop: '20px'}}>
                <thead>
                    <tr>
                        <th style={{width: '200px'}}>Task</th>
                        <th style={{width: '100px'}}>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.tasks.map((task, index) => 
                    <Task 
                        key={index} 
                        tasks={task} 
                        id={index}
                    />
                    )}
                </tbody>
            </table>
        );
    }
}

export default TaskList;