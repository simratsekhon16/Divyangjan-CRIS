import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

const routes: Routes = [
  { path: '', 
    component:FirstpageComponent, },
  {
    path: 'firstpage',
    component: FirstpageComponent,
  },
    {
      path: 'signup-page',
      component: SignupPageComponent,
      data: { fullPage: true }
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
