import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RoundPipe } from './pipes/round.pipe';
import { DataComponent } from './data/data.component';
import { DataService } from './services/data.service';
import { ApiDataService } from './services/api-data.service';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService, ApiDataService],
  bootstrap: [AppComponent, DataComponent]
})
export class AppModule { }
