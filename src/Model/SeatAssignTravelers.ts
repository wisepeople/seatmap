// /// <reference path="./SeatAssign.ts" />
// export namespace SeatAssign{
//     export class Travelers{}
//     export class Traveler{}
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
// id: "PT1"
// names: Array(1)
// 0:
// firstName: "Test"
// isPreferred: true
// lastName: "NA"
// nameType: "universal"
// title: "DR"
// passengerTypeCode: "ADT"
export class SeatAssignTraveler{
    id: any;
    firstName: any;
    lastName: any;
    title: any;
    isPreferred: any;
    nameType: any;
    passengerTypeCode: any;
    constructor(data: { id: any; names: { firstName: string, lastName: string, title: string, isPreferred: boolean, nameType: string }[]; passengerTypeCode: any; }){
        console.log('SeatAssignTraveler', data);
        this.id = data.id;
        this.firstName = data.names[0].firstName;
        this.lastName = data.names[0].lastName;
        this.title = data.names[0].title;
        this.isPreferred = data.names[0].isPreferred;
        this.nameType = data.names[0].nameType;
        this.passengerTypeCode = data.passengerTypeCode;
    }
    getId(){
        return this.id;
    }
}