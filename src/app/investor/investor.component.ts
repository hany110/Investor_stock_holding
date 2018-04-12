import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../shared/service/load.service';
import { FilerService } from '../shared/service/company.service';
import { ConnectService } from '../shared/service/connect.service';
import { ChartModule }            from 'highcharts';
import Highcharts = require('highcharts');
import exportMap=require('highcharts/modules/exporting');
@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss']
})
export class InvestorComponent implements OnInit {

  allquarters:string[]=["Q4 2017-18","Q3 2017-18","Q2 2017-18","Q1 2017-18"];
  selectedQuarter = 'Q4 2017-18';
  


  investID:string;
  investDetails:string;
  constructor(private companyservice : FilerService,private conn:ConnectService,private load:LoaderService) {
      this.investID=load.getInvestorID();
     
   }

  ngOnInit() {

      this.companyservice.getInvestorDetails(this.investID).subscribe((data)=>  //brings investor details
        {
            this.investDetails=data;
        }
      );

      this.companyservice.getCompanyForFilerQuat('Q4',this.investID).subscribe((data)=> //when component is initialised for first time
      {
          this.investDetails=data;
      });
  }

  onChange(quarter)
{
    console.log(quarter);
    this.selectedQuarter = quarter;
    console.log(this.selectedQuarter.split(" ")[0]);
    this.companyservice.getCompanyForFilerQuat(this.selectedQuarter.split(" ")[0],this.investID).subscribe((data)=> //changes table content when quarter is filtered
    {
        this.investDetails=data;
    }
  );
}

}
