import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilerService } from '../shared/service/company.service';
import { LoaderService } from '../shared/service/load.service';
import { ConnectService } from '../shared/service/connect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consensus',
  templateUrl: './consensus.component.html',
  styleUrls: ['./consensus.component.scss']
})
export class ConsensusComponent implements OnInit {

  consensus=[];
  constructor(private companyService : FilerService,private conn:ConnectService,private load:LoaderService,private router:Router)
   { 
     this.companyService.getConsensusList().subscribe((data)=>
     {
        this.consensus.push(data);
     }
    );
   }

   loadCompany(companyID:string)
   {
       console.log("Ready to load company details");
       this.load.compClicked(companyID);
       this.router.navigate(['company']);
 
   }

  ngOnInit() {
  }

}
