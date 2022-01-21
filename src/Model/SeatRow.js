import { FacillityInfo } from "./FacillityInfo";
import { SeatInfo } from "./SeatInfo";

export class SeatRow{
    cols;
    info;
    constructor(params) {
        this.cols = [];
        this.info = new SeatRowInfo();
    }
    setCol(idx, seatInfo){
        this.cols[idx] = seatInfo;
    }
    set(key, value){
        this.info.set(key, value||-1);
    }
}
class SeatRowInfo{
    rowNumber;
    isExit;
    onWing;
    wingStart;
    wingEnd;
    constructor(_rowNumber) {
        this.rowNumber = _rowNumber||-1;
        this.isExit = false;
        this.onWing = false;
        this.wingStart = false;
        this.wingEnd = false;
    }
    set(key, value){
        switch(key){
            case 'rowNumber':
                this.rowNumber = value;
                break;
            case 'exit':
                this.isExit = true;
                break;
            case 'wing':
                this.onWing = true;
                break;
            case 'wingStart':
                this.wingStart = true;
                break;
            case 'wingEnd':
                this.wingEnd = true;
                break;
            default:
                break;
        }
    }
}