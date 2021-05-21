exports.config = {
    capabilities:{
        browserName: 'chrome',
        shardTestFiles: true
    },
    allScriptsTimeout: 10000,
    baseUrl: 'https://www.epam.com/',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        './features/*.feature'
    ],
    restartBrowserBetweenTests: true,
    cucumberOpts: {
        require: [
            './tests/*.js'
        ],
        tags: [],
        strict: true,
        'dry-run': false,
        compiler: [],
    },
    onPrepare: function () {
        const {Given, Then, When, Before} = require('cucumber');
        global.Given = Given;
        global.When = When;
        global.Then = Then;
        global.Before = Before;
    }
};