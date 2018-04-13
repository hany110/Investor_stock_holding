import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Highcharts = require('highcharts');
import Heatmap=require('highcharts/modules/heatmap');
Heatmap(Highcharts);
import Treemap=require('highcharts/modules/treemap');
import { FilerService } from '../shared/service/company.service';
Treemap(Highcharts);

@Component({
  selector: 'app-heat-company',
  templateUrl: './heat-company.component.html',
  styleUrls: ['./heat-company.component.scss']
})
export class HeatCompanyComponent implements OnInit, AfterViewInit {
  @ViewChild('containerhello') public chartEl: ElementRef;
  private _chart: any;
  check:boolean=true;
 nameColor:{name:string,value:number,colorValue:number};
 heatmap=[];
  constructor(private companyService :FilerService) {
    this.companyService.getHeatMap().subscribe((data)=>
    {
     /* this.nameColor.name=data['name'];
      this.nameColor.value=6;
      this.nameColor.colorValue=data['colorValue'];
      console.log(this.nameColor);*/
      this.heatmap.push(data);
    }
    );
}

loadinggraph()
{
  console.log(this.heatmap);
  let opts:any={
    colorAxis: {
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[0]
  },
  series: [{
      layoutAlgorithm: 'squarified',
      data: this.heatmap
  }],
  title: {
      text: 'Highcharts Treemap'
  }
  };
  if (this.chartEl && this.chartEl.nativeElement) {
   
    opts.chart = {
      
        type: 'treemap',
        renderTo: this.chartEl.nativeElement
    };
    this._chart = new Highcharts.Chart(opts);
  }
  this.check=false;
}

  ngOnInit() {
   
   
  }

  ngAfterViewInit() {
    

  }

}

/*{name: 'A',
value: 6,
colorValue: 1
}, {
name: 'B',
value: 6,
colorValue: 2
}, {
name: 'C',
value: 6,
colorValue: 3
}, {
name: 'D',
value: 6,
colorValue: 4
}, {
name: 'E',
value: 6,
colorValue: 5
}, {
name: 'F',
value: 6,
colorValue: 6
}, {
name: 'G',
value: 6,
colorValue: 7
}*/