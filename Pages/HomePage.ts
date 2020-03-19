import { ElementFinder, element, by } from "protractor";
import Utils from '../utils'
import { locationPage } from "./LocationPage";


export default class HomePage {

    private cityPickButton: ElementFinder = element(by.xpath('//span[@class="geolink__reg"]'));
    private moreButton: ElementFinder = element(by.xpath('//a[@data-statlog="tabs.more"]'));
    private morePopup: ElementFinder = element(by.xpath('//div[@class="home-tabs__more"]'));
    constructor(){};

    async changeCountry() {
        await Utils.safeClick(this.cityPickButton, 5000);
        return locationPage;
    }

    async getMoreContent() {
        Utils.safeClick(this.moreButton, 5000);
        return Utils.safeGetText(this.morePopup, 5000);
    }

    async clickOnTab() {
        await Utils.safeClick(this.moreButton, 5000);
    }

}

let homePage = new HomePage();

export { homePage }