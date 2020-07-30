/**
 * @overview A simple common footer component. This one always renders a simple
 * copyright banner.
 */

import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <span className="copyright">Copyright (C) 2020 Technical Pursuit Inc.</span>
            </div>
        );
    }
}

export default Footer;
