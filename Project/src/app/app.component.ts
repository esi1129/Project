import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit{

  title = 'Project';


  @ViewChild('app', {static : true}) apps : ElementRef | undefined;


  public ngOnInit() {
    if (this.apps) {
      this.apps.nativeElement.innerHTML = "Hi everyone";
    }

    this.renderer.setStyle(this.apps?.nativeElement,"color",'purple')

  }

  constructor(private renderer: Renderer2) {
  }
}
