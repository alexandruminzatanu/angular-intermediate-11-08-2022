import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChuckListRoutingModule } from './chuck-list-routing.module';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeItemComponent } from './joke-item/joke-item.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    JokeListComponent,
    JokeItemComponent
  ],
  imports: [
    CommonModule,
    ChuckListRoutingModule,
    MatCardModule

  ]
})
export class ChuckListModule { }
