import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SwitchPageComponent} from "./switch-page/switch-page.component";
import {MenuComponent} from "./menu/menu.component";

const routes: Routes = [
  { path: 'menu', component: MenuComponent},
  { path: 'home', component: SwitchPageComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
