import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import {ChartModule } from 'highcharts';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { compChartsComponent } from './company/compCharts/compCharts.component';
import { FilerService } from './shared/service/company.service';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    compChartsComponent,
    CompanyComponent,
    FooterComponent
  ],
  imports: [
    Ng2PaginationModule,
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    
  ],
  providers: [FilerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
