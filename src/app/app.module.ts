import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BtnLogComponent } from './components/navbar/btn-log/btn-log.component';
import { BtnRedSocialComponent } from './components/navbar/btn-red-social/btn-red-social.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileImgComponent } from './components/header/profile-img/profile-img.component';
import { ProfileInfoComponent } from './components/header/profile-info/profile-info.component';
import { BannerComponent } from './components/header/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BtnLogComponent,
    BtnRedSocialComponent,
    HeaderComponent,
    ProfileImgComponent,
    ProfileInfoComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
