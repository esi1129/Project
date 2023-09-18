import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {MenuComponent} from "./menu/menu.component";
import {MusicComponent} from "./music/music.component";
import {FormComponent} from "./form/form.component";
import {AccountComponent} from "./account/account.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'music', component: MusicComponent },
  { path: 'form', component: FormComponent },
  { path: 'account', component: AccountComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
