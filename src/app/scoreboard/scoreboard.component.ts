import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilerService } from '../shared/service/company.service';
import { ConnectService } from '../shared/service/connect.service';
import { LoaderService } from '../shared/service/load.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  private score=[];
  constructor(private companyService : FilerService,private conn:ConnectService,private load:LoaderService,private router:Router) { 

    this.companyService.getScoreList().subscribe((data) => {
      this.score.push(data);
  });
  }

  loadInvestor(data:string)
  {
      console.log("Ready to load investor details");
      //this.Company.emit({name:data});
      this.load.invClicked(data);
      this.router.navigate(['investor']);

  }

  ngOnInit() {
  }

}
