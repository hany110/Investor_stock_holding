import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilerService } from '../shared/service/company.service';
import { LoaderService } from '../shared/service/load.service';
import { ConnectService } from '../shared/service/connect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotpicks',
  templateUrl: './hotpicks.component.html',
  styleUrls: ['./hotpicks.component.scss']
})
export class HotpicksComponent implements OnInit {
  //@Output()Company=new EventEmitter<{name:string}>();

  public check:boolean=true;
  private hotbuys=[];
  private coldsells=[];
  constructor(private companyService : FilerService,private conn:ConnectService,private load:LoaderService,private router:Router) { 
  

    this.companyService.getHotPicksList().subscribe((data) => {
        this.hotbuys.push(data);
    });

    this.companyService.getColdSellsList().subscribe((data) => {
        this.coldsells.push(data);
    });
  }
  tohot()
  {
    this.check=true;
    console.log("in hot");
  }
  tocold()
  {
    this.check=false;
    console.log("in cold");
  }
  loadCompany(companyID:string)
  {
      console.log("Ready to load company details");
      //this.Company.emit({name:data});
      this.load.compClicked(companyID);
      this.router.navigate(['company']);

  }
  ngOnInit() {
  }

}
