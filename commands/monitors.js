const { fetch } = require('../lib/api');
const { figletLog } = require('../lib/helpers');
const { table:tableAlerts } = require('../lib/table-alerts');
const { table:tableSSL } = require('../lib/table-ssl');
const { table:tableUptime } = require('../lib/table-uptime');

const fetchUptime = async () => {
  figletLog('Checking your monitors ...');
  const monitors = await fetch();
  const tbl = tableUptime(monitors);
  console.log('\n' + tbl.toString());
};

const fetchSSL = async () => {
  figletLog('Checking your monitors ...');
  const monitors = await fetch();
  const tbl = tableSSL(monitors);
  console.log('\n' + tbl.toString());
};

const fetchAlerts = async (filter) => {
  figletLog('Checking your alerts ...');
  const monitors = await fetch();
  const tbl = tableAlerts(monitors, filter);
  console.log('\n' + tbl.toString());
};

const monitors = {
  async uptime() {
    await fetchUptime();
  },
  async ssl() {
    await fetchSSL();
  },
  async alerts(options) {
    const filter = options.filterType || false;
    await fetchAlerts(filter);
  }
};

module.exports = monitors;