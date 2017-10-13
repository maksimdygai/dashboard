'use strict';

const
	DEFAULT_CONFIG_PATH = './config.default.json',
	customPath = process.env.ENV_CONFIG_PATH;

let configPath = DEFAULT_CONFIG_PATH;

if(customPath) {
    console.log(`** Using custom configuration located at "${customPath}" ** `);
    configPath = customPath;
}

module.exports = require(configPath);
