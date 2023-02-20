// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {

  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test','nightwatch/examples'],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['nightwatch/page-objects'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: [
    './automation/commands',
    './automation/commands/commands-general',
    './automation/commands/commands-hotel',
    './automation/commands/commands-air',
    './automation/commands/commands-api',
    './automation/commands/commands-auth',
  ],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: ['nightwatch/custom-assertions'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: '',
  
  webdriver: {},

  test_workers: {
    enabled: true
  },

  test_settings: {
// Environment (default)
            default: {
              launch_url: 'https://www.aerocrs.com/login/',
              globals: {
                crsUsername: 'Evyatar.Da',
                crsPassword: 'z8ZT9ec6',
                crsCompanyCode: 'SLS3',
              },
              desiredCapabilities: {
                browserName: 'chrome'
              },
              // disable_error_log: false,
            },

// Environment (dev)
            dev: {
              launch_url: 'https://www.aerocrs.com/login/',
              globals: {
                crsUsername: 'Evyatar.Dat43t43t',
                crsPassword: 'z8ZT9ec6',
                crsCompanyCode: 'SLS3',
              },
              desiredCapabilities: {
                browserName: 'chrome'
              },
              disable_error_log: false,
            },

//== Chrome ============================================================================================================

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true,
          args: [
            '--start-maximized',
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            // '--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        port: 9512,
        host: 'localhost',
        default_path_prefix: '',
        cli_args: [
          // --verbose
        ]
      }
    },

//== Firefox ===========================================================================================================

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        'goog:firefoxOptions': {
          w3c: true,
          args: [
            '--start-maximized',
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            // '--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        port: 4444,
        host: 'localhost',
        default_path_prefix: '',
        cli_args: [
          // --verbose
        ]
      }
    },

//== Edge ==============================================================================================================

    edge: {
      desiredCapabilities : {
        browserName : 'MicrosoftEdge',
        'ms:edgeOptions' : {
          w3c: true,
          // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
          args: [
            '--start-maximized',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        // Download msedgedriver from https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/
        //  and set the location below:
        port: 9514,
        host: 'localhost',
        server_path: '/Users/evyatar.da/IdeaProjects/go7-web-automation/drivers/msedgedriver',
        ssl: false,
        default_path_prefix: '',
        proxy: undefined,
        cli_args: [

        ]

      }
    },

//== Safari ============================================================================================================

    safari: {

      desiredCapabilities: {
        browserName: 'safari',
        launch_url: 'localhost',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for using the browserstack.com cloud service                    |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - BROWSERSTACK_USERNAME                                                       |
    // - BROWSERSTACK_ACCESS_KEY                                                     |
    // .env files are supported                                                      |
    //////////////////////////////////////////////////////////////////////////////////

    browserstack: {
      selenium: {
        host: 'hub.browserstack.com',
        port: 443
      },
      // More info on configuring capabilities can be found on:
      // https://www.browserstack.com/automate/capabilities?tag=selenium-4
      desiredCapabilities: {
        'bstack:options': {
          userName: '${BROWSERSTACK_USERNAME}',
          accessKey: '${BROWSERSTACK_ACCESS_KEY}'
        }
      },

      disable_error_log: true,
      webdriver: {
        timeout_options: {
          timeout: 15000,
          retry_attempts: 3
        },
        keep_alive: true,
        start_process: false,
      }
    },

    'browserstack.local': {
      extends: 'browserstack',
      desiredCapabilities: {
        'browserstack.local': true
      }
    },
    
    'browserstack.chrome': {
      extends: 'browserstack',
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: true
        }
      }
    },
    
    'browserstack.local_chrome': {
      extends: 'browserstack.local',
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    
  },


  // An object which will be made available on the main test api, throughout the test execution
  globals: {

    // this controls whether to abort the test execution when an assertion failed and skip the rest
    // it's being used in waitFor commands and expect assertions
    abortOnAssertionFailure: true,

    // this controls whether to abort the test execution when an element cannot be located; an error
    // is logged in all cases, but this also enables skipping the rest of the testcase;
    // it's being used in element commands such as .click() or .getText()
    abortOnElementLocateError: false,

    // this will overwrite the default polling interval (currently 500ms) for waitFor commands
    // and expect assertions that use retry
    waitForConditionPollInterval: 500,

    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
    // expect assertions
    waitForConditionTimeout: 5000,

    // this will cause waitFor commands on elements to throw an error if multiple
    // elements are found using the given locate strategy and selector
    throwOnMultipleElementsReturned: false,

    // Since v2, the warning if multiple elements are found using the given locate strategy
    // and selector is not shown by default anymore; set this to false to enable those warnings
    suppressWarningsOnMultipleElementsReturned: true,

    // controls the timeout value for async hooks. Expects the done() callback to be invoked within this time
    // or an error is thrown
    asyncHookTimeout: 20000,

    // controls the timeout value for when running async unit tests. Expects the done() callback to be invoked within this time
    // or an error is thrown
    unitTestsTimeout: 2000,

    // controls the timeout value for when executing the global async reporter. Expects the done() callback to be invoked within this time
    // or an error is thrown
    customReporterCallbackTimeout: 20000,

    // Automatically retrying failed assertions - You can tell Nightwatch to automatically retry failed assertions until a given timeout is reached, before the test runner gives up and fails the test.
    retryAssertionTimeout: 5000,

    // use the same browser session to run the individual  test suites
    reuseBrowserSession: false,

    reporter: function(results, cb) {cb(results)},

    beforeTestSuite(browser) {
      return Promise.resolve();
    },

    afterTestSuite(browser) {
      return Promise.resolve();
    },

    beforeTestCase(browser) {
      return Promise.resolve();
    },

    afterTestCase(browser) {
      return Promise.resolve();
    },

    onBrowserNavigate(browser) {
      return Promise.resolve();
    },

    onBrowserQuit(browser) {
      return Promise.resolve();
    },
  },
};
