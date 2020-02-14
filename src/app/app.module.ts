import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CallRestApiComponent } from './components/call-rest-api/call-rest-api.component';
import { HttpClientModule } from '@angular/common/http'
import { CallApiServiceService } from './services/call-api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CallRestApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CallApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
