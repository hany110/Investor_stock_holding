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
  sectornames=[];
  sectorvalues=[];
  constructor(private companyservice :FilerService,public cd: ChangeDetectorRef) { 
    this.companyservice.getSectorForInvestor(this.investID).subscribe((data) => {
      this.sectornames.push(data['name']);
      this.sectorvalues.push(data['y']);
  });
  }

  ngOnInit() {
  }
  loadinggraph()
  {
    let opts:any={
      title : { text : 'I did it !!!' },
      xAxis: {
        categories:this.sectornames,
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
          data : this.sectorvalues
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
