import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import {ChartModule} from 'highcharts';
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
import { HttpModule } from '@angular/http';
import { MarketComponent } from './company/market/market.component';
import { KeysPipe } from './shared/models/array.model';
import { HotpicksComponent } from './hotpicks/hotpicks.component';
import { ConnectService } from './shared/service/connect.service';
import { LoaderService } from './shared/service/load.service';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { HeatCompanyComponent } from './heat-company/heat-company.component';
import { InvestorComponent } from './investor/investor.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    compChartsComponent,
    CompanyComponent,
    FooterComponent,
    MarketComponent,
    KeysPipe,
    HotpicksComponent,
    ScoreboardComponent,
    HeatCompanyComponent,
    InvestorComponent
  ],
  imports: [
    Ng2PaginationModule,
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
  //  ChartModule
  ],
  providers: [FilerService,HttpModule,ConnectService,LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
