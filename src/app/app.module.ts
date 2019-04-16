import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ShowFriendComponent } from './show-friend/show-friend.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    AddFriendComponent,
    ShowFriendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}
