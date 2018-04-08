import { Injectable } from "@angular/core";
import { Filer } from "../models/filer.model";
import { mock } from "../data/filer.mock";
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable,Subject } from 'rxjs/Rx';
import { profile } from "../models/profile.model";  
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FilerService{
    private comp_investor:Filer[]=mock;
    constructor(private http: Http)
    {

    }
    getHotPicksList()
    {
        return this.http.get('assets/data/filer.json')        //link for hot buys
        .flatMap((data) => data.json());
    }
    getColdSellsList()
    {
        return this.http.get('assets/data/filer.json')        //link for hot buys
        .flatMap((data) => data.json());
    }
    getScoreList()
    {
        return this.http.get('assets/data/filer.json')          //link for scoreboard
        .flatMap((data) =>data.json());
    }
    getFilerForComp(companyID:string) {
        return this.http.get('assets/data/filer.json')
        .flatMap((data) => data.json());
      }
    getSharesHeld() {
        const x: any[]=[];
        
        for (const val of this.comp_investor) {
            x.push(val['Shares_Held'] );
        }
        return x;
    }
    getPreviousShares(pastshares,currsharescopy) {
        const x: any[]=[];
        
        for (var i=0;i<pastshares.length;i++) {
            if(pastshares[i]>0){
            x.push(currsharescopy[i]-pastshares[i] );
            }
            else{
                x.push(currsharescopy[i]+(pastshares[i]*-1) );  
            }
        }
        return x;
    }
    getCompanyDetails(companyID:string) //on clicking a company ...redirect to company page
    {
        console.log("getCompanyDetails called");
        return this.http.get('http://192.168.43.43:4200/webapi/companies/'+companyID)      
        .flatMap((data) => data.json());
    }
    getInvestor(){
        const x: any[] = [];
        
        for (const val of this.comp_investor) {
            x.push(val['Filer_Name']);
        }
        return x;
    }

    
    
}
