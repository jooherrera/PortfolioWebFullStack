import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BtnLogComponent } from './components/navbar/btn-log/btn-log.component';
import { BtnRedSocialComponent } from './components/navbar/btn-red-social/btn-red-social.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SoftComponent } from './components/soft/soft.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modalLogin/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditBtnComponent } from './components/edit-btn/edit-btn.component';
import { EditableComponent } from './components/editable/editable.component';
import { CursoComponent } from './components/curso/curso.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BtnLogComponent,
    BtnRedSocialComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    SoftComponent,
    ProjectsComponent,
    ModalComponent,
    EditBtnComponent,
    EditableComponent,
    CursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
