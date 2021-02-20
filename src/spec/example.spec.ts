import { browser, by, element, ExpectedConditions as EC } from 'protractor';
import { ExamplePage } from './example.po';

describe('TODO', () => {
let page: ExamplePage

    describe('angulario homepage verify list', function () { //Suite in Jasmine
        it('should check top 5 link buttons', function () { // Test in Jasmine
            browser.manage().window().maximize();
            browser.get('https://angular.io');
            var ele =  element(by.css('.nav-link'));
            browser.wait(EC.visibilityOf(ele))
            expect(element.all(by.css('.nav-link')).getText())
            .toEqual(['', 'FEATURES', 'DOCS', 'RESOURCES', 'EVENTS', 'BLOG']);
        });
    });

    describe('Protractor Demo App', function () {
        it('should check top 5 link buttons', function () { // Test in Jasmine
            browser.get('https://angular.io'); // Entering application url in browser
            browser.manage().window().maximize();
            var ele =  element(by.css('.nav-link'));
            browser.wait(EC.visibilityOf(ele))
            // Printing normal array
            //console.log(page.getArrays())
            // Using this in expect 
            expect(['', 'FEATURES', 'DOCS', 'RESOURCES', 'EVENTS', 'BLOG']).toContain(page.getAllTexts())

        });
    });
});
