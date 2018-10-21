import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RoundPipe } from './pipes/round.pipe';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
