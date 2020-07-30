/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const router = express.Router();

//  Build up base path where all mock data files should reside.
const projectDir = process.cwd();
const mockPath = path.join(projectDir, 'mocks');

/**
 * A sample "specific" route where you can define a precise file to match a path.
 * Note here we match '/' with 'classic' which we can't do by path value alone.
 */
router.get('/', (req, res, next) => {
    console.log(`${req.originalUrl} using specific file lookup route...`);
    const fullpath = path.join(mockPath, 'classic.json');
    console.log(`${req.originalUrl} using ${fullpath}`);
    res.sendFile(fullpath);
});

/**
 * A generic route which will take the path after the '/api' prefix and use it
 * to locate a file by name. Bad paths will result in errors obviously.
 */
router.use((req, res, next) => {
    console.log(`${req.originalUrl} using fallback file lookup route...`);
    const target = req.originalUrl.slice('/api/'.length);

    //  Check for relative path offset cheats here...
    if (/\.\./.test(target)) {
        res.status(400).send({ status: 400, error: `Invalid API path ${target}` });
        return;
    }

    const ext = /\.json$/.test(target) ? '' : '.json';
    const fullpath = path.join(mockPath, `${target}${ext}`);
    console.log(`${req.originalUrl} using ${fullpath}`);
    res.sendFile(fullpath);
});
module.exports = router;
