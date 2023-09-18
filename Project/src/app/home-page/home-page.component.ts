import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'switch-page-component',
  templateUrl: './home-page.component.html',
  styleUrls: ['home-page.component.css']
})
export class HomePageComponent implements OnInit {

  //variables

  testVariable: String = "";
  testButton: Boolean = true;
  name: String = "";
  attributeBoolean: Boolean = true;
  number: number = 0;

  //input & output

  @Input('inputVariableName') inputVariable : number = 30

  @Output('outputVariableName') outputVariable = new EventEmitter<number>()

  //Arrays

  users: Array<String> = ["test1", "test2"]
  passwords: number[] = [110218213, 71566430, 24663938]

  //objects

  userObject: any = [
    {
      name: "user1",
      age: 20
    },
    {
      name: "user2",
      age: 22
    },
    {
      name: "user3",
      age: 16
    }
  ]

  //define a empty object as Json file

  styles = {}

  //using Json in Init

  ngOnInit(): void {
    this.styles = {
      'font-size': '40px',
      'color': 'red'
    }
  }

  //define a function as event

  public showResults(e: Event) {
    this.testVariable = (<HTMLInputElement>e.target).value
  };

  //track by

  public  addUser(){
    this.userObject = [
      {
        name: "user1",
        age: 20
      },
      {
        name: "user2",
        age: 22
      },
      {
        name: "user3",
        age: 16
      },
      {
        name: "user4",
        age: 19
      }
    ]
  }

  public trackByFunc(index: number,  el: any) {
     return el.age;
  }


//viewChild

  public increment(){
    this.number++;
}

}
