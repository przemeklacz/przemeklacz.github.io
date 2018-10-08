import React, {
  Component
} from 'react';
import './App.css';
import UsersList from './UsersList';


const allUsers = ["Michal", "Kasia", "Jacek", "Marta", "Tomek", "Ania"];
class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredUsers: allUsers,
      selectedUser: null
    };
  }

  setSelectedUser = (selectedUser) => {
    this.setState({
      selectedUser
    });
  }

  getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }

  filterUsers(e) {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text)
    this.setState({
      filteredUsers
    });
  }

  render() {
    return ( 
      <div>
        <input onInput={this.filterUsers.bind(this)} />
        {this.state.selectedUser}
         <UsersList userSelected={this.setSelectedUser} users={this.state.filteredUsers} />
      </div>
    );
  }
}

export default App;