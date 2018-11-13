import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getForm() {
        return element(by.id('data-form'));
    }

    getFormSelect() {
        return element(by.id('data-select-id'));
    }

    getFormSelectOptions() {
        return element.all(by.class('data-form'));
    }

    get
}
