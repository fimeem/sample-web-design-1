import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EventSolutionComponent } from './departments/event-solution/event-solution.component';
import { EximComponent } from './departments/exim/exim.component';
import { TechnologiesComponent } from './departments/technologies/technologies.component';
import { TradingCorporationComponent } from './departments/trading-corporation/trading-corporation.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { UpdatesComponent } from './pages/updates/updates.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'career', component: CareersComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'event/solution', component: EventSolutionComponent},
  {path: 'exim', component: EximComponent},
  {path: 'technology', component: TechnologiesComponent},
  {path: 'trad', component: TradingCorporationComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'update', component: UpdatesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
