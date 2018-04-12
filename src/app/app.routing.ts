import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { CompanyComponent } from './company/company.component';
import { HotpicksComponent } from './hotpicks/hotpicks.component';
import { HeatCompanyComponent } from './heat-company/heat-company.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { InvestorComponent } from './investor/investor.component';
import { ConsensusComponent } from './consensus/consensus.component';


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'company',          component: CompanyComponent },
    { path: 'investor',         component:InvestorComponent},
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'hotpicks',         component: HotpicksComponent},
    { path: 'scoreboard',       component: ScoreboardComponent},
    { path: 'heatComp',         component:HeatCompanyComponent},
    { path: 'consensus',        component:ConsensusComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
