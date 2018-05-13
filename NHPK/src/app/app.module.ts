import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BoardComponent } from './board/board.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { OpeningHoursComponent } from './opening-hours/opening-hours.component';
import { CoursesComponent } from './courses/courses.component';
import { CompetitionComponent } from './competition/competition.component';
import { ResultsComponent } from './results/results.component';
import { DynamicShootingComponent } from './dynamic-shooting/dynamic-shooting.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'board', component: BoardComponent },
  { path: 'opening-hours', component: OpeningHoursComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'competition', component: CompetitionComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'dynamic-shooting', component: DynamicShootingComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: MainpageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    BoardComponent,
    MainpageComponent,
    OpeningHoursComponent,
    CoursesComponent,
    CompetitionComponent,
    ResultsComponent,
    DynamicShootingComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
