import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SwitchPageComponent} from "./switch-page/switch-page.component";
import {MenuComponent} from "./menu/menu.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MenuComponent,
    SwitchPageComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
