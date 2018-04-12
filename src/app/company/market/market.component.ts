import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ChartModule }  from 'highcharts';
import Highcharts = require('highcharts');
import exportMap=require('highcharts/modules/exporting');
import { FilerService } from '../../shared/service/company.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  
  @ViewChild('containerhello') public chartEl: ElementRef;
  private _chart: any;
  @Input()companyID:string;
  check:boolean=true;
  quarter=[];
  sumMarketValues=[];
  constructor(private companyservice :FilerService,public cd: ChangeDetectorRef) { 
    this.companyservice.getMarketForCompany(this.companyID).subscribe((data) => {
      this.quarter.push("Q"+data['name']+" 2017-18"); //data['quarter']
      this.sumMarketValues.push(data['y']);            //data['sumMarketValue']
  });
  }

  ngOnInit() {
  }
  loadinggraph()
  {
    let opts:any={
      title : { text : ' ' },
      xAxis: {
        categories:this.quarter,
        tickPixelInterval: 150,
        title: {
          text: 'Company'
               }
    },    
    yAxis: {
        min: 0,
        title: {
            text: 'Market Value'
        }
    }, 
      series:[{
          name : 'Market Value',
          data : this.sumMarketValues
      }]

    };
    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
          type: 'area',
          renderTo: this.chartEl.nativeElement
      };
      
      this._chart = new Highcharts.Chart(opts);
      this.check=false;
   }
  }

}
