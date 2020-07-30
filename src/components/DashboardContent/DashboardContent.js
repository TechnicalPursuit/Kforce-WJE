/**
 * @overview A wrapper component for Dashboard content (overall card layout).
 */

import React from 'react';
import './DashboardContent.css';

const DashboardContent = (props) => { return <div className="DashboardContent">{props.children}</div>; };

export default DashboardContent;
