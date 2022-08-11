import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuckCardComponent } from './chuck-card/chuck-card.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ChuckCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ChuckCardComponent
  ]
})
export class ChuckDetailsModule { }
