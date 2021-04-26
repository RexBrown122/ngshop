import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DogListComponentComponent } from '../dog-list-component/dog-list-component.component';
import { DogFavoritesComponentComponent } from '../dog-favorites-component/dog-favorites-component.component';

const routes: Routes = [
  {
    path: '',
    component: DogListComponentComponent
  },
  {
    path: 'dogfav', 
    component: DogFavoritesComponentComponent
  },  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
