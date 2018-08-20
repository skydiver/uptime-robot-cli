const Table = require('cli-table');
const { tableHeader, tableRow } = require('./helpers');
const { monitorStatus, monitorType } = require('./uptimerobot');

const headers = [
  tableHeader('Name'),
  tableHeader('URL'),
  tableHeader('Status'),
  tableHeader('Type'),
  tableHeader('Interval'),
  tableHeader('Uptime'),
];

const table = (rows) => {

  const tbl = new Table({ head: headers });

  rows.forEach((value) => {
    tbl.push([
      tableRow(value.friendly_name),
      tableRow(value.url),
      tableRow(monitorStatus(value.status)),
      tableRow(monitorType(value.type)),
      tableRow(value.interval),
      tableRow(value.all_time_uptime_ratio + '%'),
    ]);
  });

  return tbl;

};

module.exports = { table };