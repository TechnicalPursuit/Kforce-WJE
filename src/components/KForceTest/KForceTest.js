/**
 * @overview The "Environmental Impact" widget, which contains Abatement,
 * CarEquivalents, and TreeEquivalents widgets.
 *
 * For simple demonstration purposes this widget relies entirely on internal
 * state to determine the values it provides to its children. A fully-functional
 * version would follow the pattern found in EnergySavingsChart to load data via
 * ajax, place it in redux, and then push that through via 'this.props'.
 */

import React, { Component } from 'react';
import './KForceTest.css';

/* eslint-disable import/extensions */
import { mockJSON } from './KForceTestMockData.js';
/* eslint-enable import/extensions */

import TransactionCard from '../TransactionCard/TransactionCard';
import CustomerTransaction from '../CustomerTransaction/CustomerTransaction';

class KForceTest extends Component {
    constructor(props) {
        super(props);

        this.transactionData = mockJSON.data;
    }

    render() {
        const transactions = this.transactionData.map(
            (item, key) => {
                return <TransactionCard key={item.id}><CustomerTransaction dollars={item.amount} date={item.date} /></TransactionCard>;
            }
        );

        return (
            <div className="KForceTest">
                {transactions}
            </div>
        );
    }
}

export default KForceTest;
