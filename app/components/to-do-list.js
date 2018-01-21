import React from 'react';

import ToDoListItem from './to-do-list-item';

export default class ToDoList extends React.Component {



  renderItems() {
    return this.props.tasks.map((task, index) => {
      return (
        <ToDoListItem
          key={index}
          task={task.name}
          id={index}
          deleteTask={this.props.deleteTask}
        />
      )
    })
  }


  render() {
    return (
      <table>
        <tbody>
            {this.renderItems()}
        </tbody>
      </table>
    )
  }
}
