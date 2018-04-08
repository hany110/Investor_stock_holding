import { Injectable } from "@angular/core";

@Injectable()
export class LoaderService{

    private companyID:string;
    private investorID:string;
    compClicked(ID: string) {
        this.companyID=ID;
      }
    invClicked(ID:string)
    {
        this.investorID=ID;
    }
      getCompanyID()
      {
        console.log('get company ID called');
        return this.companyID;
      }
      getInvestorID()
      {
        console.log('get investor ID called');
        return this.investorID;
      }
}