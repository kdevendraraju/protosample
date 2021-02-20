import { by, element, ElementFinder } from "protractor";

export class ExamplePage {

    getAllElements() {
        element.all(by.css('.nav-link')).each(function (element) {
            element.getText().then(function (text) {
                console.log(text);
            });
        });
    }

    getArrays(): any {
        var array_name = ['val1', 'val2', 'val3']
        return array_name
    }

    getAllTexts(): any{
        var txts = [];
        return element.all(by.css('.nav-link')).each(function(item: ElementFinder){
           return item.getText().then(function(txt){
             txts.push(txt);
           });
        }).then(function(){
           return txts;
        });
     }
}