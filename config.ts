import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
import { Config } from './node_modules/protractor';

// Require protractor-beautiful-reporter to generate reports.
var HtmlReporter = require('protractor-beautiful-reporter');

export let config: Config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: ['--disable-gpu']
        }
    },

    framework: 'jasmine2',

    specs: ['F:/Protractor_feb/protractor-min/src/spec/example.spec.ts'],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 90000,
        isVerbose: true
    },

    beforeLaunch: function () {
        require('ts-node').register({
            project: 'tsconfig.json'
        });
    },

    onPrepare: () => {

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: StacktraceOption.PRETTY
            },
            summary: {
                displaySuccessful: true,
                displayFailed: true,
            }
        }));
        // Add a screenshot reporter and store screenshots to `./test-results`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'test-results',
            preserveDirectory: false, // Preserve base directory
            screenshotsSubfolder: 'screenshots',
            jsonsSubfolder: 'jsons', // JSONs Subfolder
            takeScreenShotsForSkippedSpecs: true, // Screenshots for skipped test cases
            takeScreenShotsOnlyForFailedSpecs: false, // Screenshots only for failed test cases
            docTitle: 'Test Automation Execution Report', // Add title for the html report
            docName: 'TestResult.html', // Change html report file name
            gatherBrowserLogs: true // Store Browser logs
        }).getJasmine2Reporter());
    }
}