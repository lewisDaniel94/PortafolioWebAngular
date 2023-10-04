import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LogosHeaderComponent } from './component/logos-header/logos-header.component';
import { BannerComponent } from './component/banner/banner.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';
import { SkillComponent } from './component/skill/skill.component';
import { FooterComponent } from './component/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './component/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './component/experiencia/edit-experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { NeweducacionComponent } from './component/educacion/neweducacion.component';
import { EditeducacionComponent } from './component/educacion/editeducacion.component';
import { EditSkillComponent } from './component/skill/edit-skill.component';
import { NewSkillComponent } from './component/skill/new-skill.component';
import { EditAcercaDeComponent } from './component/acerca-de/edit-acerca-de.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosHeaderComponent,
    BannerComponent,
    ExperienciaComponent,
    AcercaDeComponent,
    ProyectosComponent,
    SkillComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({ }),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
