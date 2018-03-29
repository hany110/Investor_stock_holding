import { Component, OnInit, Input, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Filer } from '../../shared/models/filer.model';
import { FilerService } from '../../shared/service/company.service';
import { ChartModule } from 'highcharts';
import Highcharts = require('highcharts');

@Component({
  selector: 'app-compCharts',
  templateUrl: './compCharts.component.html',
  styleUrls: ['./compCharts.component.css']
})
export class compChartsComponent implements OnInit,OnDestroy,AfterViewInit {

  @ViewChild('changeinshare') public chartEl: ElementRef;
  private _chart: any;

  
  constructor(private companyservice :FilerService) { }
  ngAfterViewInit() {
    let opts: any ={
      chart: {
        type: 'column'
    },
    title: {
        text: 'Change in Shares '
    },
    subtitle: {
        text: 'company name'
    },
    xAxis: {
      categories:this.companyservice.getInvestor(),
      crosshair : true
    },
    yAxis: {
      min: 0,
      title: {
          text: 'Sharesheld'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
    },
    series: [{
      name: 'Past quarter',
      data: this.companyservice.getPreviousShares()  
      },
      {
      name: 'Current quarter',
      data: this.companyservice.getSharesHeld()
      }]
    };
    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
          type: 'column',
          renderTo: this.chartEl.nativeElement
      };
      
      this._chart = new Highcharts.Chart(opts);
  }
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    
  }
 /* @Input()data:Filer={Filer_Name:"default",City:"default",State:"default",
Shares_Held:0,Market_Value:0,per_of_Portfolio:0,
Prior_per_of_Portfolio:0,Ranking:0,Prior_Ranking:0,
Change_in_shares:0,Filer_State:"default",per_Ownership:0,
source_date:"default",filing_date:"default"};*/

 

  

}
