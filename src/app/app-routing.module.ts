import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './linkedfishers/acceuil/acceuil.component';
import { AppComponent } from './app.component';
import { BondiComponent } from './bondi/bondi.component';


const routes: Routes = [
  { path: '', component: BondiComponent },
  { path: 'acceuil', component: AcceuilComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],
})
export class AppRoutingModule { }
