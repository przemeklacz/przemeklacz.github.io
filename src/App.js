import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './UsersList';


const allUsers = ["Michał", "Ania", "Łukasz", "Tomek"];
class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredUsers: allUsers
    };
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
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
}

export default App;