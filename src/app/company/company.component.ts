import { Component, OnInit, Input, OnDestroy, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Filer } from '../shared/models/filer.model';
import { mock } from '../shared/data/filer.mock';
import { ChartModule }            from 'highcharts';
import Highcharts = require('highcharts');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FilerService } from '../shared/service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()filers:Filer[]=mock;
  @ViewChild('chart') public chartEl: ElementRef;
  private _chart: any;

  constructor(private companyservice : FilerService) {
    console.log(this.companyservice.getSharesHeld());
    
  } 

  ngOnInit() {
  
  }
  
  ngAfterViewInit() {
    let opts: any = {
      title : { text : 'I did it !!!' },
      xAxis: {
        categories:this.companyservice.getInvestor(),
        tickPixelInterval: 150,
        title: {
          text: 'Investor'
               }
    },    
    yAxis: {
        min: 0,
        title: {
            text: 'Sharesheld'
        }
    }, 
      series:[{
          name : 'shares',
          data : this.companyservice.getSharesHeld()
      }]
  };
  
  if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
          type: 'spline',
          renderTo: this.chartEl.nativeElement
      };
      
      this._chart = new Highcharts.Chart(opts);
  }
  
}
  

ngOnDestroy() {
    
}

  
  
}
