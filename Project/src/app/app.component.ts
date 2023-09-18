import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit,AfterViewInit{

  switchKey = "key2";
  title = 'Project';

  public emptyFunc() {

  }

  //ViewChild
  //changes on element ref not secure in DOM must be use renderer

  @ViewChild('app', {static : true}) apps : ElementRef | undefined;
  @ViewChild(HomePageComponent , { read : HomePageComponent}) SPComponent : HomePageComponent | undefined;

  //if you have some same component use @ViewChildren(HomePageComponent , { read : HomePageComponent}) SPComponent : Query<HomePageComponent> | undefined;
  //in ngAfterViewInit this.SPComponent.forEach((comp => (comp.increment();))


  public  ngAfterViewInit() {

    if (this.SPComponent) {

      this.SPComponent.increment();
    }
  }

  public ngOnInit() {

    if (this.apps) {
      this.apps.nativeElement.innerHTML = "Hi everyone";
    }

    this.renderer.setStyle(this.apps?.nativeElement,"color",'purple')



  }

  constructor(private renderer: Renderer2) {
  }
}
