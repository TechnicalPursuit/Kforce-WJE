/**
 * @overview The requisite Hello World widget.
 */

import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        let { className } = this.props;
        className = className || 'Hello';
        return (
            <h1 className={className}>Hello World!</h1>
        );
    }
}

export default Hello;
