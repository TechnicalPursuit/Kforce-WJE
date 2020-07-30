/**
 * @overview A Node.js mock data server. This server provides access to mock
 * data found in the ./mocks directory, allowing you to capture and mock any
 * json needed to drive the sample dashboard.
 *
 * Start this server using `npm run server`. NOTE that the port default here is
 * port 4000. You can change this on the command line, via environment vars etc.
 * BUT... you must also update the `proxy` setting in package.json to the port.
 */

/* eslint-disable no-console, no-process-exit, func-names, prefer-destructuring */

(function() {
    'use strict';

    var app,                // Express application instance.
        argv,               // The argument list.
        bodyParser,         // Handle request body parsing.
        cors,               // Allow server to be cors-accessible.
        handlebars,         // Templating engine for simple views.
        helmet,             // Simple security add-ons for server.
        http,               // The node.js http module.
        env,                // Current execution environment.
        express,            // Express web framework.
        fs,                 // File system module.
        logger,             // Configured logger instance.
        logStream,          // Stream for app-level logger.
        minimist,           // Argument processing.
        morgan,             // Local app-level logger.
        path,               // Path utility module.
        port,               // Port to listen on.
        router,             // Loaded routes reference.
        server,             // The server instance created.
        sh,                 // ShellJS shell access routines.
        winston;            // Logger for routes etc.

    //  ---
    //  Baseline require()'s
    //  ---

    express = require('express');
    bodyParser = require('body-parser');
    cors = require('cors');
    handlebars = require('express-handlebars');
    helmet = require('helmet');
    http = require('http');
    minimist = require('minimist');
    fs = require('fs');
    sh = require('shelljs');
    path = require('path');
    morgan = require('morgan');
    winston = require('winston');

    router = require('./routes');

    //  ---
    //  APP Config
    //  ---

    //  Create app instance and capture the environment data from it.
    app = express();
    env = app.get('env');

    //  Parse command line arguments.
    argv = minimist(process.argv.slice(2), {}) || { _: [] };

    //  Map the defaulted environment from Express into our argument list.
    argv.env = argv.env || env;
    env = argv.env;
    app.set('env', env);

    //  ---
    //  Loggers
    //  ---

    if (!sh.test('-d', './logs')) {
        sh.mkdir('./logs');
    }
    logStream = fs.createWriteStream(path.join(__dirname, './logs/access.log'), { flags: 'a' });
    app.use(morgan('combined', { stream: logStream }));

    logger = winston.createLogger({
        format: winston.format.combine(
            winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            winston.format.printf((info) => { return `${info.timestamp} | ${info.message}`; })
        ),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: './logs/winston.log' })
        ]
    });

    app.locals.logger = logger;

    //  ---
    //  Middleware
    //  ---

    app.use(bodyParser.json());     //  send/receive JSON for mocks
    app.use(helmet());              //  security baseline
    app.use(cors());                //  cors-accessible

    app.engine('handlebars',
        handlebars({
            defaultLayout: 'main'
        }));
    app.set('view engine', 'handlebars');
    app.set('views', './views');

    //  Documentation page
    app.get('/', (req, res) => {
        res.render('index');
    });

    //  General handler. If an /api route forward, otherwise report error.
    app.use((req, res, next) => {
        if (!req.path.match(/api\//)) {
            return res.status(400).json({ error: `Invalid target URI: ${req.path}` });
        }

        return next();
    });

    //  The router should load custom mock data routes.
    app.use(router);

    //  Lots of options for where to get a port number but rely on arg list,
    //  env settings, and then cfg data. Our registered IANA port is the last
    //  option and is hard-coded.
    //  THIS SHOULD MATCH THE PROXY SETTING TO HAVE REACT CONNECT PROPERLY.
    port = argv.port || process.env.PORT ||
        process.env.npm_package_config_port ||
        4000;

    server = http.createServer(app);
    server.listen(port);

    console.log(`API mock server listening on port ${port}`);
}());
