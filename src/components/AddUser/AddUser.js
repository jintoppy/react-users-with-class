import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddUser.css';

class AddUser extends Component {
    state = {
        name: '',
        description: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            login: this.state.name,
            avatar_url: this.state.description
        };
        this.props.addUser(newUser);
    }

    setName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    setDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    render(){
        return (
            <div>
                <h3>Add user</h3>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        Name:
                        <input value={this.state.name} onChange={this.setName} />
                    </div>
    
                    <div>
                        Description:
                        <textarea value={this.state.description} onChange={this.setDescription} rows="10" cols="50" />
                    </div>
                    <div>
                        <input type="submit" value="Add User"  />
                    </div>
                </form>
            </div>
        )
    }
}

AddUser.propTypes = {
    addUser: PropTypes.func
};

export default AddUser;