import { Config } from "protractor";

export const config: Config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            binary: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\new_chrome.exe'
        }
    },
    specs: [
        "./Tests/*spec.js",
    ]
};