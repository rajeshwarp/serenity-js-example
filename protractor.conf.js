const
    { ArtifactArchiver, ConsoleReporter } = require('@serenity-js/core'),
    { SerenityBDDReporter } = require('@serenity-js/serenity-bdd');
    
exports.config = {
    chromeDriver: require('chromedriver/lib/chromedriver').path,
    SELENIUM_PROMISE_MANAGER: true,

    directConnect: true,
    allScriptsTimeout: 11000000,
    specs: [ 'features/*.feature', ],
    framework:      'custom',
    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),


    serenity: {
        crew: [
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
            new SerenityBDDReporter(),
            new ConsoleReporter(),
        ]
    },

    cucumberOpts: {
        require: [
            'features/step_definitions/*.ts',
            'features/support/setup.ts',
        ],
        'require-module': ['ts-node/register'],
        tags: [],
    },

    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: [
                '--disable-infobars',
                //'--no-sandbox',
                //'--disable-gpu',
                //'--window-size=1024x768',
                //'--headless',
            ],
        },
    },
};
