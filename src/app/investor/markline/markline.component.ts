import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { ChartModule }  from 'highcharts';
import Highcharts = require('highcharts');
import exportMap=require('highcharts/modules/exporting');
import { FilerService } from '../../shared/service/company.service';


@Component({
  selector: 'app-markline',
  templateUrl: './markline.component.html',
  styleUrls: ['./markline.component.scss']
})
export class MarklineComponent implements OnInit {
  @ViewChild('containerhello') public chartEl: ElementRef;
  private _chart: any;
  @Input()investID:string;
  check:boolean=true;
  quarter=[];
  sumMarketValues=[];
  constructor(private companyservice :FilerService,public cd: ChangeDetectorRef) { 
    this.companyservice.getMarketForInvestor(this.investID).subscribe((data) => {
      this.quarter.push("Q"+data['name']+" 2017-18");    //data['quarter'] 
      this.sumMarketValues.push(data['y']);               //data['sumMarketValue']
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
          text: 'Investor'
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
