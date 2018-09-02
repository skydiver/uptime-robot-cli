#! /usr/bin/env node

const program = require('commander');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

// updateNotifier({ pkg }).notify({ isGlobal: true });

program
  .version(pkg.version)
  .command('configure', 'configure Uptime Robot API key')
  .command('monitor', 'view your monitors')
  .parse(process.argv);