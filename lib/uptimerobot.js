const alertTypes = {
  1: 'SMS',
  2: 'E-mail',
  3: 'Twitter DM',
  4: 'Boxcar',
  5: 'Web-Hook',
  6: 'Pushbullet',
  7: 'Zapier',
  8: 'Pro SMS',
  9: 'Pushover',
  10: 'HipChat',
  11: 'Slack',
  13: 'Android App',
  18: 'Telegram',
};

const monitorType = (typeNumber) => {
  const types = {
    1: 'HTTP(s)',
    2: 'Keyword',
    3: 'Ping',
    4: 'Port',
  };
  return typeNumber in types ? types[typeNumber] : 'Unknown';
};

const monitorStatus = (statusNumber) => {
  const status = {
    0: 'Paused',
    1: 'Not Checked Yet',
    2: 'Up',
    8: 'Seems Down',
    9: 'Down',
  };
  return statusNumber in status ? status[statusNumber] : 'Unknown';
};

const alertType = (alertTypeNumber) => {
  return alertTypeNumber in alertTypes ? alertTypes[alertTypeNumber] : 'Unknown';
};


module.exports = {
  alertType,
  alertTypes,
  monitorStatus,
  monitorType,
};