import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DogListComponentComponent } from './dog-list-component/dog-list-component.component';
import { DogFavoritesComponentComponent } from './dog-favorites-component/dog-favorites-component.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponentComponent,
    DogFavoritesComponentComponent,
    DogDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
