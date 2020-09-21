import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    shouldComponentUpdate(){
        return false;
    }
    render(){
        return (
            <header>This is my app</header>
        )
    }
    
};

export default Header;