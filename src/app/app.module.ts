import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MainComponent} from './main/main.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { InputComponent } from './main/input/input.component';
import { FreshPipe } from './fresh.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputComponent,
    FreshPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
