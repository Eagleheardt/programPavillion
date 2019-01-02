import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'angular2-useful-swiper';

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
import { SnekComponent } from './snek/snek.component';
import { SavorComponent } from './savor/savor.component';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';
import { MadnessComponent } from './madness/madness.component';
import { PiratesortComponent } from './piratesort/piratesort.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { NavmediaComponent } from './navmedia/navmedia.component';
import { Decorbar1Component } from './decorbar1/decorbar1.component';
import { HomeslideshowComponent } from './homeslideshow/homeslideshow.component';
import { TestsliderComponent } from './testslider/testslider.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

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
    SnekComponent,
    SavorComponent,
    MinesweeperComponent,
    MadnessComponent,
    PiratesortComponent,
    ChallengesComponent,
    NavmediaComponent,
    Decorbar1Component,
    HomeslideshowComponent,
    TestsliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    SwiperModule,
    Ng2CarouselamosModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
