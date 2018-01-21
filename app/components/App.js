import React from 'react';
import ReactDOM from 'react-dom';

import CreateToDo from './create-task';
import ToDoList from './to-do-list';


const tasks = {
	items: [],

	add(task) {
		this.items.push(task);
	},

	delete(index) {
		this.items.splice(index, 1);
	}
};


export class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tasks: tasks.items
		}
	}


	render() {
		return (
			<div>
				<h1>To Do</h1>
				<CreateToDo createTask={this.createTask.bind(this)} />
				<ToDoList tasks={this.state.tasks}
									deleteTask={this.deleteTask.bind(this)}

				/>
			</div>
		);
	}

	createTask (task) {
		tasks.add(task);
		this.setState({tasks: this.state.tasks})
	}

	deleteTask (index) {
		tasks.delete(index);
		this.setState({tasks: this. state.tasks})
	}
}
