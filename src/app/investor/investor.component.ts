import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../shared/service/load.service';
import { FilerService } from '../shared/service/company.service';
import { ConnectService } from '../shared/service/connect.service';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss']
})
export class InvestorComponent implements OnInit {
  investid:string;
  constructor(private companyservice : FilerService,private conn:ConnectService,private load:LoaderService) {
      this.investid=load.getInvestorID();
   }

  ngOnInit() {
  }

}
