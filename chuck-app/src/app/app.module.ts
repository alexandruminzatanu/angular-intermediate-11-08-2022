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
import { DuplicateDirective } from './duplicate.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JokeCreateComponent } from './joke-create/joke-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SuffixPipe,
    DuplicateDirective,
    HomeComponent,
    LoginComponent,
    JokeCreateComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ChuckDetailsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
