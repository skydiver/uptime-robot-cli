const inquirer = require('inquirer');
const helpers = require('../lib/helpers');
const Settings = require('../lib/settings');

const key = async (name) => {
  const settings = new Settings(name);
  const answers = await inquirer.prompt([{
    type: 'input',
    name: 'key',
    message: 'Enter your Uptime Robot API Key:',
    validate: helpers.notEmpty
  }]);
  await settings.storeParam('api_key', answers.key);
  helpers.stringSuccess('API key successfully stored.');
};

const clear = async (name) => {
  const answer = await inquirer.prompt([{
    type: 'confirm',
    name: 'key',
    message: 'Are you sure you want to remove your Uptime Robot API Key?',
    default: false
  }]);
  if (answer.key) {
    const settings = new Settings(name);
    await settings.clearAll();
    helpers.stringSuccess('API key successfully removed.');
  }
};

const view = async (name) => {
  const settings = new Settings(name);
  const apiKey = await settings.readParameter('api_key');
  console.log(`Your current Uptime Robot API key: ${helpers.stringBold(apiKey)}`);
};


const configure = { key, clear, view };

module.exports = configure;