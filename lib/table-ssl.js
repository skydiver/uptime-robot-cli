const Table = require('cli-table');
const { tableHeader, tableRow } = require('./helpers');

const headers = [
  tableHeader('Name'),
  tableHeader('Brand'),
  tableHeader('Product'),
  tableHeader('Expiration'),
];

const table = (rows) => {
  const tbl = new Table({ head: headers });
  rows.forEach((monitor) => {
    if (monitor.ssl.brand || monitor.ssl.brand || monitor.ssl.brand) {
      const row = [
        tableRow(monitor.friendly_name),
        tableRow(monitor.ssl.brand),
        tableRow(monitor.ssl.product),
        tableRow(new Date(monitor.ssl.expires * 1000)),
      ];
      tbl.push(row);
    }
  });
  return tbl;
};

module.exports = { table };