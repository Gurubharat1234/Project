import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{ path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) }, { path: 'Login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
{path:'menu', component:MenuComponent},
{path:'add', component:AddMenuComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
