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
  
  investID:string;
    investName:string;
  investDetails=[];
    stocks=[];
  constructor(private companyservice : FilerService,private conn:ConnectService,private load:LoaderService) {
      this.investID=load.getInvestorID();
     
   }

  ngOnInit() {

      this.companyservice.getInvestorDetails(this.investID).subscribe((data)=>  //brings investor details
        {
            this.investName=data['name'];
            this.investDetails=data;
            
        }
      );

      this.companyservice.getCompanyForFiler(this.investID).subscribe((data)=> //when component is initialised for first time
      {
          console.log("getCompanyForFiler()called");
         this.stocks.push(data);
      });
  }

}
