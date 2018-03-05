import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FooBarService } from './services/foo-bar.service';
//import { GithubApiService } from './services/github-api.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FooBarService,
    //GithubApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
