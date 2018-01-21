import React from 'react';

export default class ToDoListItem extends React.Component{
  constructor(props) {
    super(props);

  }

  renderAction() {

    return (
      <td>
        <button onClick={this.deleteTask.bind(this)}>Delete</button>
      </td>
    )

  }


  renderTask() {

    const task = this.props.task;

    return (
        <td>
          {task}
        </td>
    );
  }

  render() {
    return (
      <tr>
        {this.renderTask()}
        {this.renderAction()}
      </tr>
    );
  }

  deleteTask() {
    console.log(this.key);
    this.props.deleteTask(this.props.id);
  }
}
