import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';
import { BlogComponent } from './blog/blog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Title }  from '@angular/platform-browser';
import { ForensicsComponent } from './forensics/forensics.component';
import { RomsComponent } from './roms/roms.component';
import { IstockComponent } from './istock/istock.component';
import { SnekComponent } from './snek/snek.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PersonalComponent,
    ProfessionalComponent,
    BlogComponent,
    SidebarComponent,
    AppComponent,
    ForensicsComponent,
    RomsComponent,
    IstockComponent,
    SnekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
