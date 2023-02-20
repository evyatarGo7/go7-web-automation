
// @ts-ignore
import { NightWatchCustomCommands } from '../go7-web-automation/automation/commands';

// @ts-ignore
export interface Assertion extends NightWatchBrowser {
  windowMaximize: () => NightWatchBrowser;
  backSpace: (numberOfTimes: string) => NightWatchBrowser;
  clearValueByCss: (selector: string) => NightWatchBrowser;
  fileUpload: (filePath: string) => NightWatchBrowser;
  clearValueByXpath: (selector: string) => NightWatchBrowser;
  clickIfExistByCss: (selector: string) => NightWatchBrowser;
  clickIfExistByXpath: (selector: string) => NightWatchBrowser;
  dbClick: (selector: string) => NightWatchBrowser;
  elementDisabledByCss: (selector: string) => NightWatchBrowser;
  elementDisabledByXpath: (selector: string) => NightWatchBrowser;
  elementNotPresentByCss: (selector: string) => NightWatchBrowser;
  elementPresentByCss: (selector: string) => NightWatchBrowser;
  elementPresentByXpath: (selector: string) => NightWatchBrowser;
  enterValue: (selector: string, value: string) => NightWatchBrowser;
  hasValidLink: (selector: string, timeoutInMilliseconds: number) => NightWatchBrowser;
  isElementExistWithRefreshByXpath: (selector: string, numberOfTimesToRun: number, waitInterval: number) => NightWatchBrowser;
  isElementExistWithRefreshByCss: (selector: string, numberOfTimesToRun: number, waitInterval: number) => NightWatchBrowser;
  IDMTravellerSearchRetry: (selector: string, numberOfTimesToRun: number, waitInterval: number) => NightWatchBrowser;
  mapZoomIn: (numberOfTimes: number) => NightWatchBrowser;
  mapZoomOut: (numberOfTimes: number) => NightWatchBrowser;
  multipleClicks: (selector: string, numberOfTimes: number) => NightWatchBrowser;
  scrollToElement: (selector: string) => NightWatchBrowser;
  scrollToLocation: (verticalValue: number, horizontalValue: number) => NightWatchBrowser;
  setValidPassword: () => NightWatchBrowser;
  switchToTab: (tabNumber: number) => NightWatchBrowser;
  textorByXpath: (selector: string) => NightWatchBrowser;
  textorByCss: (selector: string) => NightWatchBrowser;
  validateCookie: (cookieName: string, cookieValue: string) => NightWatchBrowser;
  validateUrlOnSecondTab: (selector: string, url: string) => NightWatchBrowser;
  waitAndClickByCss: (selector: string) => NightWatchBrowser;
  waitAndClickByXpath: (selector: string) => NightWatchBrowser;
  waitAndClickByIndex: (selector: string, indexNumber: number) => NightWatchBrowser;
  waitAndClickOnText: (text: string) => NightWatchBrowser;
  waitAndSetValueByCss: (selector: string, inputValue: string) => NightWatchBrowser;
  waitAndSetValueByXpath: (selector: string, inputValue: string) => NightWatchBrowser;
  waitForAttributeContainsByCss: (selector: string, attrName: string, attrValue: string) => NightWatchBrowser;
  waitForAttributeContainsByXpath: (selector: string, attrName: string, attrValue: string) => NightWatchBrowser;
  waitForPropertyContainsByCss: (cssSelector: string, cssPropertyName: string, cssPropertyValue: string) => NightWatchBrowser;
  waitForPropertyNotContainsByCss: (cssSelector: string, cssPropertyName: string, cssPropertyValue: string) => NightWatchBrowser;
  waitForTextByCss: (selector: string, textValue: string) => NightWatchBrowser;
  waitForTextNotExistByCss: (selector: string, textValue: string) => NightWatchBrowser;
  waitForTextByXpath: (selector: string, textValue: string) => NightWatchBrowser;
  waitForUrlToContain: (url: string) => NightWatchBrowser;
  waitUntilClickable: (selector: string) => NightWatchBrowser;
  numberFromStringCss : (selector: string) => NightWatchBrowser;
  numberFromStringXpath : (selector: string) => NightWatchBrowser;

  // Authentication
  loginToCRS: () => NightWatchBrowser;

  // API
  apiValidateResponseValue: (username: string, password: string) => NightWatchBrowser;
  apiValidateStatusCode: (username: string, password: string) => NightWatchBrowser;
  validateUrlResponse: (url: string) => NightWatchBrowser;

}


export interface NightWatchBrowser extends NightWatchCustomCommands{ }



