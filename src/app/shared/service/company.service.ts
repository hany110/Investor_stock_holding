import { Injectable } from "@angular/core";
import { Filer } from "../models/filer.model";
import { mock } from "../data/filer.mock";

@Injectable()
export class FilerService{
    private comp_investor:Filer[]=mock;
    getSharesHeld() {
        const x: any[]=[];
        
        for (const val of this.comp_investor) {
            x.push(val['Shares_Held'] );
        }
        return x;
    }
    getPreviousShares() {
        const x: any[]=[];
        
        for (const val of this.comp_investor) {
            if(val['Change_in_shares']>0){
            x.push(val['Shares_Held']-val['Change_in_shares'] );
            }
            else{
                x.push(val['Shares_Held']+(val['Change_in_shares']*-1) );  
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
}
