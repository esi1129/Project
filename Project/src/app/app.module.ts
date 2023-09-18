import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SwitchPageComponent} from "./switch-page/switch-page.component";
import {MenuComponent} from "./menu/menu.component";
import {FormsModule} from "@angular/forms";
import {FormComponent} from "./form/form.component";

@NgModule({
  declarations: [
    MenuComponent,
    FormComponent,
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
