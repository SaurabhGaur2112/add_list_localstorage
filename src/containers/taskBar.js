import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskAdd } from '../action/index';
import { bindActionCreators } from 'redux';
import TaskList from './taskList';

class TaskBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            taskValue: '',
            allTasks: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
            allTasks: JSON.parse(localStorage.getItem('allTasks'))
        });
    }

    handleChange(event){
        this.setState({
            taskValue: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.taskAdd(this.state.taskValue);

        this.setState({
            taskValue: '',
            allTasks: JSON.parse(localStorage.getItem('allTasks'))
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter Task"
                        onChange={this.handleChange}
                        value={this.state.taskValue}
                    />

                    <button type="submit">Add</button>
                </form>

                <TaskList tasks={this.state.allTasks} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        taskAdd: taskAdd
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(TaskBar);