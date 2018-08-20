const program = require('commander');
const pkg = require('../package.json');
const monitors = require('../commands/monitors');
const helpers = require('../lib/helpers');
const { alertTypes } = require('../lib/uptimerobot');

program
  .version(pkg.version);

program
  .command('uptime')
  .description('Display monitors uptime')
  .action(() => monitors
    .uptime()
    .catch(helpers.handleError)
  );

program
  .command('ssl')
  .description('Display monitors SSL status')
  .action(() => monitors
    .ssl()
    .catch(helpers.handleError)
  );

program
  .command('alerts')
  .description('List monitors alerts')
  .option('-f, --filter-type <type>', 'Filter alerts by type')
  .action(options => monitors
    .alerts(options)
    .catch(helpers.handleError)
  );

program
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}