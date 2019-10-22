import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.x.completed ? 'line-through':'none'
        }
    }

    render() {
        return (
            <div style={{backgroundColor:'#ff66cc'}}>
                <p>Hello another component <b>{this.props.x.title}</b></p>
            </div>
        )
    }
}

// PropTypes here.
Todoitem.propTypes = {
    x:PropTypes.object.isRequired
}

export default Todoitem

// Note: to quickly generate a class-based component we use the 'rce' + tab.
