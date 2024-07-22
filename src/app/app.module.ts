import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ImageComponent } from './image/image.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SideInfoComponent } from './signup-components/side-info/side-info.component';
import { FormDetailsComponent } from './signup-components/form-details/form-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    InfoBoxComponent,
    ServicesComponent,
    FooterComponent,
    SignupPageComponent,
    ImageComponent,
    FirstpageComponent,
    SideInfoComponent,
    FormDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }