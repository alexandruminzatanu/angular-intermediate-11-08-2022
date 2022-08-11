import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChuckDetailsModule } from './chuck-details/chuck-details.module';
import { SuffixPipe } from './suffix.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SuffixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ChuckDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
