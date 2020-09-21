import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OgrenciComponent } from './ogrenci/ogrenci.component';

const routes: Routes = [
  { path:"kayit", component: OgrenciComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
