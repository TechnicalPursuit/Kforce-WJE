import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import { sprintf } from 'sprintf-js';
import jStat from 'jStat';
import lodash from 'lodash';

import Hello from '../components/Hello/Hello';

import DashboardLayout from '../components/DashboardLayout/DashboardLayout';
import Footer from '../components/Footer/Footer';

import CustomerTransaction from '../components/CustomerTransaction/CustomerTransaction';

//  ---
//  Built-Ins
//  ---

storiesOf('Welcome', module).add('to Storybook', () => { return <Welcome showApp={linkTo('Button')} />; });

storiesOf('Button', module)
    .add('with text', () => { return <Button onClick={action('clicked')}>Hello Button</Button>; })
    /* eslint-disable */
    .add('with some emoji', () => { return <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>; });
    /* eslint-enable */

//  ---
//  Simple Examples
//  ---

storiesOf('Hello', module)
    .add('default', () => { return <Hello />; })
    .add('with style', () => { return <Hello className="fluffy" />; });

//  ---
//  Header/Footer/Layout
//  ---

storiesOf('Footer', module)
    .add('default', () => { return <Footer />; });

//  ---
//  Third-Party Utilities
//  ---

storiesOf('jStat', module)
    .add('default', () => {
        var arr = [2, 6, 4, 7, 2, 7, 4];
        var obj = jStat(arr);

        return <div>The sum of {JSON.stringify(arr)} is {obj.sum()}</div>;
    });

storiesOf('lodash', module)
    .add('default', () => {
        var arr = lodash.partition([1, 2, 3, 4], (n) => { return n % 2; });
        return <div>{JSON.stringify(arr)}</div>;
    });

storiesOf('sprintf', module)
    .add('default', () => {
        var str = sprintf('%2$s %3$s a %1$s', 'cracker', 'Polly', 'wants');
        return <div>{str}</div>;
    });

//  ---
//  Third-Party Widgets
//  ---

//  ---
//  Additional Widgets
//  ---

storiesOf('CustomerTransaction', module)
    .add('default', () => { return <CustomerTransaction date="2020-05-07T11:04:20Z" dollars="120" />; });
