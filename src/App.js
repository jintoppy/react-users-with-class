import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import UserDetail from './components/UserDetail/UserDetail';
import AddUser from './components/AddUser/AddUser';
import './App.css';


class App extends Component {
  state = {
    selectedUser: null,
    users: []
  };

  onSelectUser = (user) => {
      this.setState({
        selectedUser: user
      });
  }

  addUser = (newUser) => {
    this.setState({
      users: [...this.state.users, newUser]
    });
  }

  async componentDidMount(){
    try{
      const response = await axios.get('https://api.github.com/users');
      this.setState({
        users: response.data
      });
    }
    catch(err){
      console.log(err);
    }
  }

  render(){
    console.log('render');
    return (
      <>
        <Header />
        <AddUser addUser={this.addUser} />
        <UserList list={this.state.users} onSelectUser={this.onSelectUser} />
        <UserDetail selectedUser={this.state.selectedUser} />
      </>
    );
  }
  
}

export default App;
