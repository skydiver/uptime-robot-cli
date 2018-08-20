const program = require('commander');
const pkg = require('../package.json');
const configure = require('../commands/configure');
const helpers = require('../lib/helpers');

program
  .version(pkg.version);

program
  .command('key')
  .description('Add your Uptime Robot API key')
  .action(() => configure
    .key(helpers.extractName(pkg.name))
    .catch(helpers.handleError));

program
  .command('clear')
  .description('Clear your Uptime Robot API key')
  .action(() => configure
    .clear(helpers.extractName(pkg.name))
    .catch(helpers.handleError));

program
  .command('view')
  .description('View your stored Uptime Robot API key')
  .action(() => configure
    .view(helpers.extractName(pkg.name))
    .catch(helpers.handleError));

program
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}