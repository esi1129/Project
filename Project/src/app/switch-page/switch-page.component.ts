import { Component } from '@angular/core';

@Component({
selector: 'switch-page-component',
templateUrl: './switch-page.component.html',
styleUrls: ['switch-page.component.css']
})
export class SwitchPageComponent {

testVariable : String = "";
testButton : Boolean = true;

public showResults(e : Event){
this.testVariable = (<HTMLInputElement>e.target).value
}

}
