#!/usr/bin/env node

'use strict';
var yargs = require("yargs");
var spawn = require('child_process').spawn;
var path = require('path');
var gulpExecPath = path.join(__dirname, '../node_modules/.bin/');

var argv = yargs.usage("$0 command")
    .command("build", "build everything for dev, no minimizing", function (yargs) {
        spawn(
            path.join(gulpExecPath, "gulp"),
            ['build', '--cwd', 'node_modules/front-kickstart/', '--color', 'always'],
            { env: {NODE_ENV: 'dev'}, stdio: 'inherit' }
        );
    })
    .command("build:prod", "build task, but minimized", function (yargs) {
        spawn(
            path.join(gulpExecPath, "gulp"),
            ['build:prod', '--cwd', 'node_modules/front-kickstart/', '--color', 'always'],
            { env: {NODE_ENV: 'prod'}, stdio: 'inherit' }
        );
    })
    .command("watch", "build task, and automatically rebuild modified files", function (yargs) {
        spawn(
            path.join(gulpExecPath, "gulp"),
            ['watch', '--cwd', 'node_modules/front-kickstart/', '--color', 'always'],
            { env: {NODE_ENV: 'dev'}, stdio: 'inherit' }
        );
    })
    .command("live", "watch task, plus automatically reload browser", function (yargs) {
        spawn(
            path.join(gulpExecPath, "gulp"),
            ['live', '--cwd', 'node_modules/front-kickstart/', '--color', 'always'],
            { env: {NODE_ENV: 'dev'}, stdio: 'inherit' }
        );
    })
    .demandCommand(1, "Simply type 'fks build' or whatever task you want to launch)\n ")
    .help("h", "Display command list")
    .alias("h", "help")
    .argv