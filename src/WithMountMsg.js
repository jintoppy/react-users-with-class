import React, { Component } from 'react';

const withMountMsg = ((Comp, name) => {


    return class MyComp extends Component {
        
        componentDidMount(){
            console.log(name + ' component is Mounted');
        }

        render(){
            return <Comp {...this.props} />
        }
    };

});

export default withMountMsg;