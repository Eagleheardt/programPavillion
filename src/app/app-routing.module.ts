import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';
import { BlogComponent } from './blog/blog.component';

// Personal Routes Components
import { ForensicsComponent } from './forensics/forensics.component';
import { RomsComponent } from './roms/roms.component';


// Professional Routes Components
import { SavorComponent } from './savor/savor.component';
import { SnekComponent } from './snek/snek.component';

/* const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'professional', component: ProfessionalComponent},
  {path: 'blog', component: BlogComponent}
]; */

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'professional', component: ProfessionalComponent},
  {path: 'blog', component: BlogComponent},

// Personal Paths
  {path: 'personal/forensics', component: ForensicsComponent}, // This will use sub pages instead of nesting pages
  {path: 'personal/roms', component: RomsComponent},

// Professional Paths
  {path: 'professional/savor', component: SavorComponent}, // This will use sub pages instead of nesting pages
  {path: 'professional/snek', component: SnekComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
 