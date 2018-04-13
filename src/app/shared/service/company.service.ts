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
   //FOR INVESTORS

    getScoreList()
    {
        return this.http.get('assets/data/filer.json')          //link for scoreboard
        // return this.http.get('http://192.168.43.43:4200/webapi/investors/scoreboard') 
        .flatMap((data) =>data.json());
    }
    
      getCompanyForFiler(invID:string)
      {
          console.log(invID);
          return this.http.get('assets/data/filer.json')
       // return this.http.get('http://192.168.43.43:4200/webapi/holdings/'+invID)  //get companies of investor
        .flatMap((data) =>(data.json()));
      }
      getInvestorDetails(investorID:string) //on clicking a investor ...redirect to investor page
    {
        console.log("getInvestorDetails called");
       // return this.http.get('http://192.168.43.43:4200/webapi/investors/portfolio/'+investorID) 
       return this.http.get('assets/data/investor.json')
        .flatMap((data) => Observable.of(data.json()));
    }
    getMarketForInvestor(investorID:string)         //market value of investor over quarters 
    {
        console.log("getMarketForInvestor() called");
        return this.http.get('assets/data/sector.json')
        //  return this.http.get('http://192.168.43.43:4200/webapi/investors/quarters/'+investorID)    
        .flatMap((data) => data.json());
    }
    getSectorForInvestor(investorID:string)     //distribution of investor across sectors
    {
        console.log("getSectorForInvestor() called");
        return this.http.get('assets/data/sector.json')      
         //  return this.http.get('http://192.168.43.43:4200/webapi/investors/sectors/'+investorID)
        .flatMap((data) => data.json());
    }

    //FOR COMPANIES
   
    getHotPicksList()
    {
        return this.http.get('assets/data/filer.json')        //link for hot buys
        //  return this.http.get('http://192.168.43.43:4200/webapi/company/hotpicks')
        .flatMap((data) => data.json());
    }
    getColdSellsList()
    {
        return this.http.get('assets/data/filer.json')        //link for hot buys
        //  return this.http.get('http://192.168.43.43:4200/webapi/company/coldpicks')
        .flatMap((data) => data.json());
    }
    getConsensusList()
    {
        return this.http.get('assets/data/filer.json')        //link for consensus list
        //  return this.http.get('http://192.168.43.43:4200/webapi/company/consensus')
        .flatMap((data) => data.json());
    }
    getCompanyDetails(companyID:string) //on clicking a company ...redirect to company page
    {
        console.log("getCompanyDetails called");
        return this.http.get('assets/data/investor.json')
        //return this.http.get('http://192.168.43.43:4200/webapi/company/'+companyID)      
        .flatMap((data) => Observable.of(data.json()));
    }
    getFilerForComp(QID:string,companyID:string) {  //getting holdings of company per quarter
        return this.http.get('assets/data/filer.json')
       // return this.http.get('http://192.168.43.43:4200/webapi/holdings?company='+companyID+"&quarter="+QID)
        .flatMap((data) => data.json());
      }
      getMarketForCompany(companyID:string) //getting market value over quarters for company
      {
          return this.http.get('assets/data/sector.json')
          //return this.http.get('http://192.168.43.43:4200/webapi/company/quarters/'+companyID) 
          .flatMap((data) => data.json());
      }
      getInvQuarterForCompany(companyID:string)     //getting bar graph of all investors per company
      {
        return this.http.get('assets/data/bargraph.json')
        //return this.http.get('http://192.168.43.43:4200/webapi/company/bargraph/'+companyID) 
        .flatMap((data) => data.json());
      }

      getHeatMap()      //for heat map
      {
          return this.http.get('assets/data/sector.json')
          //return  this.http.get('http://192.168.43.43:4200/webapi/company/bargraph/'+companyID)
          .flatMap((data)=>data.json());
      }


      getPreviousShares(pastshares,currsharescopy) {    //FOR COMPCHART(BAR GRAPH )
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
    
    getInvestor(){
        const x: any[] = [];
    
        for (const val of this.comp_investor) {
            x.push(val['Filer_Name']);
        }
        return x;
    }
    getSharesHeld() {
        const x: any[]=[];
        
        for (const val of this.comp_investor) {
            x.push(val['Shares_Held'] );
        }
        return x;
    }
    
    
    
}
