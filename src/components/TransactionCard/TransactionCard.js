/**
 * @overview
 */

import React from 'react';
import './TransactionCard.css';

const TransactionCard = (props) => {
    return <div className="TransactionCard">{props.children}</div>;
};

export default TransactionCard;
