/**
 * @overview The overall dashboard layout component. Essentially responsible for
 * rendering any dashboard cards.
 */

import React from 'react';
import './DashboardLayout.css';

const DashboardLayout = (props) => { return <div className="DashboardLayout">{props.children}</div>; };

export default DashboardLayout;
