import { Component, OnInit, Input, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Filer } from '../shared/models/filer.model';
import { mock } from '../shared/data/filer.mock';
import { ChartModule }            from 'highcharts';
import Highcharts = require('highcharts');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FilerService } from '../shared/service/company.service';
import { ConnectService } from '../shared/service/connect.service';
import { LoaderService } from '../shared/service/load.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit, OnDestroy {
  @Input()abc:Filer[]=mock;
  companyID:string;
  companyDetails:string;
  constructor(private companyservice : FilerService,private conn:ConnectService,private load:LoaderService) {
    this.companyID=load.getCompanyID();
  } 
  private filers=[];
  ngOnInit() {
    this.companyservice.getCompanyDetails(this.companyID).subscribe((data) =>
    {
        this.companyDetails=data;
        console.log(data);
    });
    this.companyservice.getFilerForComp(this.companyID).subscribe((data) => 
        {
         this.filers.push(data);
         });
  }
  

ngOnDestroy() {
    
}

  
  
}
