import { ImagesComponent } from './images/images.component';
import { ContainersComponent } from './containers/containers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "containers", component: ContainersComponent },
  { path: "images", component: ImagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
