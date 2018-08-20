const Table = require('cli-table');
const { tableHeader, tableRow } = require('./helpers');
const { alertType } = require('./uptimerobot');

const headers = [
  tableHeader('Name'),
  tableHeader('Type'),
  tableHeader('Value'),
  tableHeader('Threshold'),
  tableHeader('Recurrence'),
];

const table = (rows, filter) => {
  const tbl = new Table({ head: headers });
  rows.forEach((monitor) => {
    const alerts = monitor.alert_contacts;
    alerts.forEach((alert) => {
      if (filter && alert.type !== filter) {
        return;
      }
      const row = [
        tableRow(monitor.friendly_name),
        tableRow(alertType(alert.type)),
        tableRow(alert.value ? alert.value : ''),
        tableRow(alert.threshold),
        tableRow(alert.recurrence),
      ];
      tbl.push(row);
    });
  });
  return tbl;
};

module.exports = { table };