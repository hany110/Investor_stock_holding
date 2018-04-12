import { Component, OnInit, Input, OnDestroy, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef, NgZone } from '@angular/core';
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
  @Input()companyID:string;
  private _chart: any;
  private currfilers=[];
  private Q1=[];
  private Q2=[];
  private Q3=[];
  private Q4=[];
  private check:boolean=true;
  constructor(private companyservice :FilerService,public cd: ChangeDetectorRef,private zone:NgZone) { 
    this.companyservice.getInvQuarterForCompany(this.companyID).subscribe((data) => {
      this.currfilers.push(data['investorName']);
      this.Q1.push(data['q1']);
      this.Q2.push(data['q2']);
      this.Q3.push(data['q3']);
      this.Q4.push(data['q4']);
    });

  }
  
  ngOnInit() {
    
  }
 loadinggraph(){
   console.log(this.Q1);
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
    categories:this.currfilers,
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
        '<td style="padding:0"><b>{point.y} </b></td></tr>',
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
    name: 'Q1',
    data: this.Q1  
    },
    {
      name: 'Q2',
      data: this.Q2  
      },
    {
        name: 'Q3',
        data: this.Q3  
     },
     {
      name: 'Q4',
      data: this.Q4 
      }
    ]};
  if (this.chartEl && this.chartEl.nativeElement) {
    opts.chart = {
        type: 'column',
        renderTo: this.chartEl.nativeElement
    };
    
    this._chart = new Highcharts.Chart(opts);
}
this.check=false;
 }
  ngAfterViewInit() 
  {

    
  }
 
  ngOnDestroy() {
    
  }
 /* @Input()data:Filer={Filer_Name:"default",City:"default",State:"default",
Shares_Held:0,Market_Value:0,per_of_Portfolio:0,
Prior_per_of_Portfolio:0,Ranking:0,Prior_Ranking:0,
Change_in_shares:0,Filer_State:"default",per_Ownership:0,
source_date:"default",filing_date:"default"};*/

 

  

}
