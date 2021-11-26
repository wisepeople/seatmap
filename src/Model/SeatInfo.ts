
// cabin: "eco"
// coordinates:
// x: 16
// y: 10
// __proto__: Object
// seatNumber: "40J"
// travelers: Array(4)
// 0:
// id: "PT1"
// seatAvailabilityStatus: "occupied"
// seatCharacteristicsCodes: (2) ["RS", "W"]

import _ from "lodash";

// __proto__: Object
export class SeatInfo{
    seatAvailabilityStatus: string = '';
    seatCharacteristicsCodes: Array<string> = [];
    seatNumber: string;
    constructor(param: { seatNumber: string; travelers: any; }, tId: string){
        this.seatNumber = param.seatNumber;
        const _tra = _.find(param.travelers, {id:tId});
        if(!!_tra) {
            this.seatAvailabilityStatus = _tra.seatAvailabilityStatus;
            this.seatCharacteristicsCodes = _tra.seatCharacteristicsCodes;
        }
    }
}