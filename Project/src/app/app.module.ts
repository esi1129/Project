import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {MenuComponent} from "./menu/menu.component";
import {FormsModule} from "@angular/forms";
import {FormComponent} from "./form/form.component";
import {AccountComponent} from "./account/account.component";
import {MusicComponent} from "./music/music.component";

@NgModule({
  declarations: [
    MusicComponent,
    AccountComponent,
    MenuComponent,
    FormComponent,
    HomePageComponent,
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
