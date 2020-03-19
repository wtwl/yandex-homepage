import { element, by, browser } from "protractor";
import Utils from '../utils';
import { homePage } from '../Pages/HomePage'

class LocationPage {

    private cityInput = element(by.xpath('//input[@id="city__front-input"]'));
    private citiesFirstElement = element(by.css('.popup__items li:first-child'));

    async selectCity(city: string) {
        await Utils.safeSendKeys(this.cityInput, city, 5000);
        await Utils.safeClick(this.citiesFirstElement, 5000);
        return homePage; 
    }

}


let locationPage = new LocationPage;

export { locationPage };