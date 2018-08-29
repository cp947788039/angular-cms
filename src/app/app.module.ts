import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Platform and Environment providers/directives/pipes
import { ROUTER_CONFIG } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// App is our top level component
import { AppComponent } from './app.component';
// Application wide providers
const APP_PROVIDERS = [];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTER_CONFIG),
  ],
  providers: [
    ...APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
