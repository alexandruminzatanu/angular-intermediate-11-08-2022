import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProtectionGuard } from './home-protection.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [HomeProtectionGuard]
  },
  {
    path: 'intra',
    component: LoginComponent
  },
  {
    path: 'chuck-list',
    loadChildren: () => import('./chuck-list/chuck-list.module').then(m => m.ChuckListModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
