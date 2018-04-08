import { Component, ChangeDetectorRef,OnInit } from '@angular/core';
import { FilerService } from '../shared/service/company.service';
import { profile } from '../shared/models/profile.model';
import {  Observable  } from 'rxjs/Rx';  
import { KeysPipe } from '../shared/models/array.model'
@Component({
    selector: 'app-home',
    providers: [FilerService],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
  
    constructor(private _articleService: FilerService) {  
      
    } 
    ngOnInit(){
        
    }
}
