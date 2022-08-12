import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeItemComponent } from './joke-item/joke-item.component';
import { JokeListComponent } from './joke-list/joke-list.component';

const routes: Routes = [{
  path: 'list',
  component: JokeListComponent,
  // children : [{
  //   path: 'item2',
  //   component: JokeItemComponent
  // }]
},
{
  path: 'item',
  component: JokeItemComponent
},
{
  path: '**',
  redirectTo: 'list'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChuckListRoutingModule { }
