import { ElementFinder, ExpectedConditions, browser } from "protractor";
class WebUtils {

    async safeClick(element: ElementFinder, timeout: number): Promise<void> {
        try {
            await browser.wait(ExpectedConditions.visibilityOf(element), timeout);
            await browser.wait(ExpectedConditions.elementToBeClickable(element), timeout);
            await element.click();
        } catch (error) {
            console.log(error);
            throw new Error;
        }
    }

    async safeSendKeys(element: ElementFinder, keysToSend: string, timeout: number) {
        try {
            await browser.wait(ExpectedConditions.visibilityOf(element), timeout);
            await browser.wait(ExpectedConditions.presenceOf(element), timeout);
            await element.clear(); 
            await element.sendKeys(keysToSend);
        } catch (error) {
            console.log(error);
        }
    }

    async safeGetText(element: ElementFinder, timeout: number) {

        try {
            await browser.wait(ExpectedConditions.visibilityOf(element), timeout);
            await browser.wait(ExpectedConditions.elementToBeClickable(element), timeout);
            const text = await element.getText();
            return text;
        } catch (error) {
            console.log(error);
            throw new Error;
            
        }
    }

}

const Utils = new WebUtils();
export default Utils;