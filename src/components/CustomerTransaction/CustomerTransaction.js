/**
 * @overview The "Customer Transaction" widget, which contains information about
 * the transaction date, the amount and points earned.
 */

import React, { Component } from 'react';
import './CustomerTransaction.css';

class CustomerTransaction extends Component {
    constructor(props) {
        super(props);

        function getFormattedDateTime(dateTimeToFormat) {
            var output,
                monthOptions;
            output = new Date(dateTimeToFormat);
            monthOptions = {
                month: 'long',
                year: 'numeric',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };

            return output.toLocaleTimeString('en-us', monthOptions);
        }

        function computePoints(dollars) {
            let computedPoints = 0;
            if (dollars > 50) {
                computedPoints += (Math.min(dollars, 100) - 50);
            }
            if (dollars > 100) {
                computedPoints += ((dollars - 100) * 2);
            }

            return Math.round(computedPoints);
        }

        const date = getFormattedDateTime(props.date);
        const initialDollars = Number.parseFloat(props.dollars).toFixed(2);
        const initialPoints = computePoints(initialDollars);

        /* eslint-disable object-shorthand */
        //  For demo purposes we use pure state here. This isn't really how the
        //  true component would likely work but it's an example of how a
        //  state-based widget can be constructed.
        this.state = {
            date: date,
            dollars: initialDollars,
            points: initialPoints
        };
        /* eslint-enable object-shorthand */
    }

    render() {
        const { date, dollars, points } = { ...this.state };

        return (
            <div className="CustomerTransaction">
                <div className="date">Date: {date.toString()}</div>
                <div className="dollars">Dollars: ${dollars}</div>
                <div className="points">Points: {points}</div>
            </div>
        );
    }
}

export default CustomerTransaction;
