import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RoundPipe } from './pipes/round.pipe';
import { DataComponent } from './components/data-component/data.component';
import { DataService } from './services/data.service';
import { ApiDataService } from './services/api-data.service';


@NgModule({
	declarations: [
		AppComponent,
		DataComponent,
		RoundPipe
	],
	imports: [

		BrowserModule,
		ReactiveFormsModule
	],
	providers: [DataService, ApiDataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
