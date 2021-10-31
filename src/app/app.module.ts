import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { EllipsisModule } from 'ngx-ellipsis';

import { SharedService } from './services/shared.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeDepartmentComponent } from './components/home-department/home-department.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FinalPortionComponent } from './components/final-portion/final-portion.component';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShowCareersComponent } from './components/show-careers/show-careers.component';
import { EventSolutionComponent } from './departments/event-solution/event-solution.component';
import { EximComponent } from './departments/exim/exim.component';
import { TechnologiesComponent } from './departments/technologies/technologies.component';
import { TradingCorporationComponent } from './departments/trading-corporation/trading-corporation.component';
import { EventServicesComponent } from './components/event-services/event-services.component';
import { ContactUsInfoComponent } from './components/contact-us-info/contact-us-info.component';
import { TechnologiesServicesComponent } from './components/technologies-services/technologies-services.component';
import { TradServicesComponent } from './components/trad-services/trad-services.component';
import { EximServicesComponent } from './components/exim-services/exim-services.component';
import { UpdatesComponent } from './pages/updates/updates.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TechPortfolioComponent } from './components/tech-portfolio/tech-portfolio.component';
import { PortfolioBodyComponent } from './components/portfolio-body/portfolio-body.component';
import { WavesElementComponent } from './components/waves-element/waves-element.component';
import { HeaderTypeAComponent } from './components/headers/header-type-a/header-type-a.component';
import { HeaderTypeBComponent } from './components/headers/header-type-b/header-type-b.component';
import { HeaderTypeCComponent } from './components/headers/header-type-c/header-type-c.component';
import { HeaderTypeDComponent } from './components/headers/header-type-d/header-type-d.component';
import { HeaderTypeEComponent } from './components/headers/header-type-e/header-type-e.component';
import { HeaderTypeFComponent } from './components/headers/header-type-f/header-type-f.component';
import { HeaderTypeGComponent } from './components/headers/header-type-g/header-type-g.component';
import { FooterAComponent } from './components/headers/footer-a/footer-a.component';
import { ContactUsAComponent } from './components/headers/contact-us-a/contact-us-a.component';
import { FooterMiddlePortionComponent } from './components/headers/footer-a/footer-middle-portion/footer-middle-portion.component';
import { FooterFinalPortionComponent } from './components/headers/footer-a/footer-final-portion/footer-final-portion.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { SocialMediaIconComponent } from './components/headers/footer-a/social-media-icon/social-media-icon.component';
import { WaveElementBComponent } from './components/wave-element-b/wave-element-b.component';
import { HeaderTypeAboutUsComponent } from './components/headers/header-type-about-us/header-type-about-us.component';
import { OurTeamBComponent } from './components/our-team-b/our-team-b.component';
import { JobOpeningsComponent } from './components/job-openings/job-openings.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { TechServicesBComponent } from './components/tech-services-b/tech-services-b.component';
import { TechServicesContentComponent } from './components/technologies-services/tech-services-content/tech-services-content.component';
import { EventServicesContentComponent } from './components/event-services/event-services-content/event-services-content.component';
import { TradServicesContentComponent } from './components/trad-services/trad-services-content/trad-services-content.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeDepartmentComponent,
    ContactUsComponent,
    FinalPortionComponent,
    AboutComponent,
    CareersComponent,
    ContactComponent,
    ShowCareersComponent,
    EventSolutionComponent,
    EximComponent,
    TechnologiesComponent,
    TradingCorporationComponent,
    EventServicesComponent,
    ContactUsInfoComponent,
    TechnologiesServicesComponent,
    TradServicesComponent,
    EximServicesComponent,
    UpdatesComponent,
    PortfolioComponent,
    TechPortfolioComponent,
    PortfolioBodyComponent,
    WavesElementComponent,
    HeaderTypeAComponent,
    HeaderTypeBComponent,
    HeaderTypeCComponent,
    HeaderTypeDComponent,
    HeaderTypeEComponent,
    HeaderTypeFComponent,
    HeaderTypeGComponent,
    FooterAComponent,
    ContactUsAComponent,
    FooterMiddlePortionComponent,
    FooterFinalPortionComponent,
    CopyrightComponent,
    SocialMediaIconComponent,
    WaveElementBComponent,
    HeaderTypeAboutUsComponent,
    OurTeamBComponent,
    JobOpeningsComponent,
    BenefitsComponent,
    TechServicesBComponent,
    TechServicesContentComponent,
    EventServicesContentComponent,
    TradServicesContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatButtonModule,
    EllipsisModule,
  ],
  providers: [
    SharedService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
