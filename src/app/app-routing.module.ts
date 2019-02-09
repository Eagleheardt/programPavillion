import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';
import { BlogComponent } from './blog/blog.component';
import { ChallengesComponent } from './challenges/challenges.component'

// Personal Routes Components
import { ForensicsComponent } from './forensics/forensics.component';
import { RomsComponent } from './roms/roms.component';

// Professional Routes Components
import { SavorComponent } from './savor/savor.component';
import { SnekComponent } from './snek/snek.component';

// Challenges Routes Components
import { MinesweeperComponent } from './minesweeper/minesweeper.component';
import { MadnessComponent } from './madness/madness.component';
import { PiratesortComponent } from './piratesort/piratesort.component';
import { PiratepokerComponent } from './piratepoker/piratepoker.component';
import { PiratespadesComponent } from './piratespades/piratespades.component';

/**********************************\
|**********************************|
|*****  Beginning of Routes  ******|
|**********************************|
\**********************************/

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'professional', component: ProfessionalComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'challenges', component: ChallengesComponent},

// Personal Paths
  {path: 'personal/forensics', component: ForensicsComponent}, // This will use sub pages instead of nesting pages
  {path: 'personal/roms', component: RomsComponent},

// Professional Paths
  {path: 'professional/savor', component: SavorComponent}, // This will use sub pages instead of nesting pages
  {path: 'professional/snek', component: SnekComponent},

// Challenges Paths
  {path: 'challenges/minesweeper', component: MinesweeperComponent}, // This will use sub pages instead of nesting pages
  {path: 'challenges/madness', component: MadnessComponent},
  {path: 'challenges/piratesort', component: PiratesortComponent},
  {path: 'challenges/piratepoker', component: PiratepokerComponent},
  {path: 'challenges/piratespades', component: PiratespadesComponent}

];

/**********************************\
|**********************************|
|***********  End of Routes  ******|
|**********************************|
\**********************************/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
 