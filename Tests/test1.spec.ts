import { Locator, browser, element, by, WebElement, ExpectedConditions, ElementFinder, WebDriver, Key } from "protractor";
import { format } from "path";
import { protractor } from "protractor/built/ptor";
import { exec } from "child_process";
import Utils from "../utils"
import { homePage } from '../Pages/HomePage';

describe('Search', () => {
    let londonMoreContent: string;
    // let cityPickButton = element(by.xpath('//span[@class="geolink__reg"]'));
    // let cityInput = element(by.xpath('//input[@id="city__front-input"]'));
    // let citiesFirstElement = element(by.css('.popup__items li:first-child'));
    // let moreButton = element(by.xpath('//a[@data-statlog="tabs.more"]'));
    let morePopup = element(by.xpath('//div[@class="home-tabs__more"]'));

    it('Open yandex and save element content', async () => {

        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.ru');
        let lp = await homePage.changeCountry();
        let hp = await lp.selectCity('Лондон');
        londonMoreContent = await hp.getMoreContent();        
        await hp.changeCountry();
        await lp.selectCity('Париж');
        await hp.clickOnTab();
        expect(await morePopup.getText()).toEqual(londonMoreContent);



        

        // await Utils.safeClick(cityPickButton, 5000);
        // await Utils.safeSendKeys(cityInput, 'Лондон', 5000);
        // await Utils.safeClick(citiesFirstElement, 5000);
        // await Utils.safeClick(moreButton, 5000);


        // await Utils.safeGetText(morePopup, 5000).then( (txt) => {
        //     console.log(txt);
        //     londonMoreContent = txt;
        // })

        // await browser.wait(ExpectedConditions.elementToBeClickable(morePopup));
        // await morePopup.getText().then( content => {
        //     console.log(typeof content);
        //     londonMoreContent = content;
        // });

        // await browser.wait(ExpectedConditions.textToBePresentInElement(cityPickButton, 'Лондон'));
        // await cityPickButton.click();
        // await Utils.safeSendKeys(cityInput, 'Париж', 5000);
        // await Utils.safeClick(citiesFirstElement, 5000);
        // await browser.wait(ExpectedConditions.textToBePresentInElement(cityPickButton, 'Париж'));
        // await Utils.safeClick(moreButton, 5000);
        // await browser.wait(ExpectedConditions.elementToBeClickable(morePopup));
        // expect(await morePopup.getText()).toEqual(londonMoreContent);
        
    });
});