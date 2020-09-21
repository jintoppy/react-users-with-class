import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withMountMsg from '../../WithMountMsg';
import './UserDetail.css';

class UserDetail extends Component {
    render(){
        return (
            <div className="user-details">
                <h3>User Details</h3>
                <h2>{this.props.selectedUser}</h2>
            </div>
        )
    }
}

UserDetail.propTypes = {
    selectedUser: PropTypes.string
};

const UserDetailWithMountMsg = withMountMsg(UserDetail, 'UserDetail');

export default UserDetailWithMountMsg;