// /// <reference path="./SeatAssign.ts" />
// export namespace SeatAssign{
//     export class Travelers{}
//     export class Traveler{}

import { SeatAssignTraveler } from "./SeatAssignTraveler";

// }
export class SeatAssignTravelers{
    currentIndex: number;
    list: SeatAssignTraveler[];
    constructor(resp: any[]){
        this.currentIndex = 0;
        this.list = resp.map((_tra, _i) => {
            return new SeatAssignTraveler(_tra)
        })
    }
    getCurrentId(){
        return this.list[this.currentIndex].getId();
    }
    getList(){
        return this.list;
    }
}