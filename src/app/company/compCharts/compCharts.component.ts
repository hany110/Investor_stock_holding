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
  @Input()compName:string;
  private _chart: any;
  private currfilers=[];
  private currshares=[];
  private currsharescopy=[];
  private pastshares=[];
  private check:boolean=true;
  constructor(private companyservice :FilerService,public cd: ChangeDetectorRef,private zone:NgZone) { 
    this.companyservice.getFilerForComp(this.compName).subscribe((data) => {

      this.currfilers.push(data['Filer_Name']);
      this.currshares.push(data['Shares_Held']);
      this.currsharescopy.push(data['Shares_Held']);
      this.pastshares.push(data['Change_in_shares']);
      this.cd.detectChanges();
      
    });

  }
  
  ngOnInit() {
    
  }
 loadinggraph(){
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
    name: 'Past quarter',
    data: this.companyservice.getPreviousShares(this.pastshares,this.currsharescopy)
    },
    {
    name: 'Current quarter',
    data: this.currshares
    }]
  };
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
