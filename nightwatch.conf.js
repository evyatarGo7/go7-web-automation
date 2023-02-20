//
// Refer to the online docs for more details:
// https://nightwatchjs.org/guide/configuration/nightwatch-configuration-file.html
//
//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/
//

// This is the slack reporter
const options = {
  slack_message: function(results, options) {
    return {
      text: 'Test completed, passed ' + results.passed + ', failed ' + results.failed,
      username: 'Nightwatch',
      icon_emoji: ':ghost:'
    }
  },
  slack_webhook_url: 'https://hooks.slack.com/services/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'
}

const globals = require('./automation/nightwatch.globals');

module.exports = {

  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: './automation/tests',

  globals: {
    // Slack reporter
    reporter: (require('nightwatch-slack-reporter')(options)),
  },

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: './automation/pages',

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
  custom_assertions_path: '',

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html#external-test-globals
  globals_path : './automation/nightwatch.globals.js',

  webdriver: {},
  
  test_workers: {
    enabled: true,
    workers: 'auto'
  },

  test_settings: {

// -------------------- Default ------------------------

    default: {
      globals: {
        CRS_USERNAME: `${globals.dev.CRS_USERNAME}`,
        CRS_PASSWORD: `${globals.dev.CRS_PASSWORD}`,
        CRS_COMPANY_CODE: `${globals.dev.CRS_COMPANY_CODE}`,
      },

      disable_error_log: false,
      launch_url: 'https://nightwatchjs.org',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities : {
        'goog:chromeOptions' : {
          args: [
            '--start-maximized',
            // '-headless',
          ]
        },
        browserName : 'chrome',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },

      webdriver: {
        start_process: true,
        server_path: ''
      }
    },

// -------------------- Dev ------------------------

    dev: {
      globals: {
        CRS_USERNAME: `${globals.dev.CRS_USERNAME}`,
        CRS_PASSWORD: `${globals.dev.CRS_PASSWORD}`,
        CRS_COMPANY_CODE: `${globals.dev.CRS_COMPANY_CODE}`,
      },

      desiredCapabilities : {
        'goog:chromeOptions' : {
          args: [
            '--start-maximized',
            // '-headless',
          ]
        },
        browserName : 'chrome',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },

      webdriver: {
        start_process: true,
        server_path: ''
      }
    },

// --------------------------------------------

    safari: {
      desiredCapabilities : {
        browserName : 'safari',
        alwaysMatch: {
          acceptInsecureCerts: false
        }
      },
      webdriver: {
        start_process: true,
        host: 'localhost',
        server_path: '/usr/bin/safaridriver',
        default_path_prefix: '',
        proxy: undefined,
        cli_args: {}
      }
    },

// --------------------------------------------

    firefox: {
      desiredCapabilities : {
        browserName : 'firefox',
        alwaysMatch: {
          acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: [
              // '-headless',
              // '-verbose'
            ]
          }
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },

    // --------------------------------------------

    chrome1: {
      desiredCapabilities : {
        browserName : 'chrome',
        'goog:chromeOptions' : {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            '--start-maximized',
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },

    // --------------------------------------------

    edge: {
      desiredCapabilities : {
        browserName : 'MicrosoftEdge',
        'ms:edgeOptions' : {
          w3c: true,
          // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
          args: [
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        // Download msedgedriver from https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/
        //  and set the location below:
        server_path: '/Users/evyatar.da/IdeaProjects/go7-web-automation/drivers/msedgedriver',
        cli_args: [
          // --verbose
        ]
      }
    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the browserstack.com cloud service               |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - BROWSERSTACK_USERNAME                                                       |
    // - BROWSERSTACK_ACCESS_KEY                                                     |
    // .env files are supported                                                      |
    //////////////////////////////////////////////////////////////////////////////////

    browserstack: {
      globals: {
        CRS_USERNAME: `${globals.dev.CRS_USERNAME}`,
        CRS_PASSWORD: `${globals.dev.CRS_PASSWORD}`,
        CRS_COMPANY_CODE: `${globals.dev.CRS_COMPANY_CODE}`,
      },
      selenium: {
        host: 'hub.browserstack.com',
        port: 443
      },
      // More info on configuring capabilities can be found on:
      // https://www.browserstack.com/automate/capabilities?tag=selenium-4
      desiredCapabilities: {
        'bstack:options' : {
          userName: `${globals.browserStack.BROWSERSTACK_USERNAME}`,
          accessKey: `${globals.browserStack.BROWSERSTACK_ACCESS_KEY}`,
          os : 'OS X',
          osVersion : 'Ventura',
          browserVersion : 'latest',
          local : false,
          seleniumVersion : '3.14.0',
        },
        browserName : 'Edge',
      },

      disable_error_log: true,
      webdriver: {
        timeout_options: {
          timeout: 15000,
          retry_attempts: 3
        },
        keep_alive: true,
        start_process: false
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
        'bstack:options' : {
          os : 'Windows',
          osVersion : '11',
          browserVersion : 'latest',
          local : true,
          seleniumVersion : '3.14.0',
            userName: `${globals.browserStack.BROWSERSTACK_USERNAME}`,
            accessKey: `${globals.browserStack.BROWSERSTACK_ACCESS_KEY}`,
        },
        browserName: 'chrome',
        chromeOptions : {
          w3c: true
        }
      }
    },

    'browserstack.firefox': {
      extends: 'browserstack',
      desiredCapabilities: {
        'bstack:options' : {
        os : 'Windows',
        osVersion : 11,
        browserVersion : 'latest',
        local : false,
        seleniumVersion : '3.10.0',
          userName: `${globals.browserStack.BROWSERSTACK_USERNAME}`,
          accessKey: `${globals.browserStack.BROWSERSTACK_ACCESS_KEY}`,
      },
        browserName: 'firefox'
      }
    },

    'browserstack.safari': {
      extends: 'browserstack',
      desiredCapabilities: {
        'bstack:options' : {
          os : 'OS X',
          osVersion : 'Ventura',
          browserVersion : '16.0',
          local : false,
          seleniumVersion : '3.14.0',
            userName: `${globals.browserStack.BROWSERSTACK_USERNAME}`,
            accessKey: `${globals.browserStack.BROWSERSTACK_ACCESS_KEY}`,
        },
        browserName: 'safari'
      }
    },

    'browserstack.local_chrome': {
      extends: 'browserstack.local',
      desiredCapabilities: {
        'bstack:options' : {
          os : 'Windows',
          osVersion : '11',
          browserVersion : 'latest',
          local : true,
          seleniumVersion : '3.14.0',
            userName: `${globals.browserStack.BROWSERSTACK_USERNAME}`,
            accessKey: `${globals.browserStack.BROWSERSTACK_ACCESS_KEY}`,
        },
        browserName: 'chrome'
      }
    },

    'browserstack.local_firefox': {
      extends: 'browserstack.local',
      desiredCapabilities: {
        'bstack:options' : {
          os : 'Windows',
          osVersion : '11',
          browserVersion : 'latest',
          local : true,
          seleniumVersion : '3.10.0',
            userName: `${globals.browserStack.BROWSERSTACK_USERNAME}`,
            accessKey: `${globals.browserStack.BROWSERSTACK_ACCESS_KEY}`,
        },
        browserName: 'firefox'
      }
    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the Selenium service, either locally or remote,  |
    //  like Selenium Grid                                                           |
    //////////////////////////////////////////////////////////////////////////////////
    selenium_server: {
      // Selenium Server is running locally and is managed by Nightwatch
      // Install the NPM package @nightwatch/selenium-server or download the selenium server jar file from https://github.com/SeleniumHQ/selenium/releases/, e.g.: selenium-server-4.1.1.jar
      selenium: {
        start_process: true,
        port: 4444,
        server_path: '', // Leave empty if @nightwatch/selenium-server is installed
        command: 'standalone', // Selenium 4 only
        cli_args: {
          //'webdriver.gecko.driver': '',
          //'webdriver.chrome.driver': ''
        }
      },
      webdriver: {
        start_process: false,
        default_path_prefix: '/wd/hub'
      }
    },

    'selenium.chrome': {
      extends: 'selenium_server',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions : {
          w3c: true
        }
      }
    },

    'selenium.firefox': {
      extends: 'selenium_server',
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [
            // '-headless',
            // '-verbose'
          ]
        }
      }
    }
  }
};
