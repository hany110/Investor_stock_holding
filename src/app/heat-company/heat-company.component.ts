import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Highcharts = require('highcharts');
import Treemap=require('highcharts/modules/treemap');
Treemap('Highcharts');
@Component({
  selector: 'app-heat-company',
  templateUrl: './heat-company.component.html',
  styleUrls: ['./heat-company.component.scss']
})
export class HeatCompanyComponent implements OnInit, AfterViewInit {
 
  constructor() {
}


  ngOnInit() {
    Highcharts.chart('container', {
      colorAxis: {
          minColor: '#FFFFFF',
          maxColor: Highcharts.getOptions().colors[0]
      },
      series: [{
          type: 'treemap',
          layoutAlgorithm: 'squarified',
          data: [{
              name: 'A',
              value: 6,
              colorValue: 1
          }, {
              name: 'B',
              value: 6,
              colorValue: 2
          }, {
              name: 'C',
              value: 4,
              colorValue: 3
          }, {
              name: 'D',
              value: 3,
              colorValue: 4
          }, {
              name: 'E',
              value: 2,
              colorValue: 5
          }, {
              name: 'F',
              value: 2,
              colorValue: 6
          }, {
              name: 'G',
              value: 1,
              colorValue: 7
          }]
      }],
      title: {
          text: 'Highcharts Treemap'
      }
  });
   
  }

  ngAfterViewInit() {
    

  }

}
