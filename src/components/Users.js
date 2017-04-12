import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    let userList = this.props.users.map(user => <li>{user.userName}</li>)
    return (
      <div>
        <ul>
          {userList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    users: state.users,
    primaryUser: state.users[0]
  }
}


export const ConnectedUsers = connect(mapStateToProps)(Users)
