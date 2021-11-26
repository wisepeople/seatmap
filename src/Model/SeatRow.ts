import { FacillityInfo } from "./FacillityInfo";
import { SeatInfo } from "./SeatInfo";

export class SeatRow{
    cols: Array<SeatInfo|FacillityInfo>;
    info: SeatRowInfo;
    constructor(params: any) {
        this.cols = [];
        this.info = new SeatRowInfo();
    }
    setCol(idx: number, seatInfo: SeatInfo | FacillityInfo){
        this.cols[idx] = seatInfo;
    }
    set(key: string, value?: number){
        this.info.set(key, value||-1);
    }
}
class SeatRowInfo{
    rowNumber: number;
    isExit: boolean;
    onWing: boolean;
    wingStart: boolean;
    wingEnd: boolean;
    constructor(_rowNumber?: number) {
        this.rowNumber = _rowNumber||-1;
        this.isExit = false;
        this.onWing = false;
        this.wingStart = false;
        this.wingEnd = false;
    }
    set(key: string, value: number){
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