import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { ChartModule }  from 'highcharts';
import Highcharts = require('highcharts');
import exportMap=require('highcharts/modules/exporting');
import { FilerService } from '../../shared/service/company.service';

@Component({
  selector: 'app-sectpie',
  templateUrl: './sectpie.component.html',
  styleUrls: ['./sectpie.component.scss']
})
export class SectpieComponent implements OnInit {
  @ViewChild('containerhello') public chartEl: ElementRef;
  private _chart: any;
  @Input()investID:string;
  check:boolean=true;
  sector=[];
  constructor(private companyservice :FilerService,public cd: ChangeDetectorRef) {
    this.companyservice.getSectorForInvestor(this.investID).subscribe((data) => {
        this.sector.push(data);
    });
   }
   
   loadinggraph()
   {
    Highcharts.setOptions({
      colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
          radialGradient: {
            cx: 0.5,
            cy: 0.3,
            r: 0.7
          },
          stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
          ]
        };
      })
    });
    console.log(this.sector);
    let opts:any={
      
      title: {
        text: 'Sector Allocation for Q4 2017-18'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y:.1f}$</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            },
            connectorColor: 'silver'
          }
        }
      },
      series: [{
        name: 'Brands',
        data: this.sector
        
      }]
    };
   
    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
          type: 'pie',
          renderTo: this.chartEl.nativeElement
      };
      
      this._chart = new Highcharts.Chart(opts);
  }
    // Build the chart
    this.check=false;
   }
  ngOnInit() {
  

  }

}
