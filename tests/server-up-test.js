const assert = require('assert');
const request = require('request');

module.exports = {
    'react server running?': (browser) => {
        request('http://localhost:3000', (error, response, body) => {
            browser.assert.equal(response.statusCode, 200);
            browser.end();
        });
    }
};
