const rp = require('request-promise');
const pkg = require('../package.json');
const helpers = require('../lib/helpers');
const Settings = require('../lib/settings');

const fetch = async () => {

  let name = helpers.extractName(pkg.name);
  let settings = new Settings(name);
  let key = await settings.readParameter('api_key');

  const options = {
    method: 'POST',
    uri: 'https://api.uptimerobot.com/v2/getMonitors',
    body: {
      api_key: key,
      all_time_uptime_ratio: 1,
      response_times_average: 1,
      alert_contacts: 1,
    },
    json: true
  };

  return await rp(options)
    .then((parsedBody) => {
      return parsedBody.monitors;
    })
    .catch((err) => {
      console.log('Something went wrong...');
      console.log(err);
    });

};

module.exports = { fetch };