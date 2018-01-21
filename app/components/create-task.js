import React from 'react';

export default class CreateToDo extends React.Component {

  render() {
    return (
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type='text' placeholder='Enter a task' ref='task'/>
          <button >Submit</button>
        </form>
    )
  }

  onSubmit (e) {

    let task = {
      name: this.refs.task.value
    }
    
    this.props.createTask(task);
    this.refs.task.value = '';
    e.preventDefault();
  }

}
