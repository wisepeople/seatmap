'use strict'
import _ from 'lodash'
import { SeatAssignFlight } from './SeatAssignFlight';

export class SeatAssignFlights{
    list;
    currentIndex;
    // list;
    constructor(resp){
        this.list = _.map(resp, (_fl, _i) => {
            return new SeatAssignFlight(_fl)
        });
        this.currentIndex = 0;
    }

    getCurrent(){
        return this.list[this.currentIndex];
    }
    setCurrent(_id){
        //TODO
        const _idx = _.findIndex(this.list, {id:_id});
        if(_idx>-1){
            this.currentIndex=_idx;
            return true;
        } else {
            return false;
        }
    }
    setCurrentByIndex(_idx){
        if(_idx>=0 && _idx<this.list.length){
            this.currentIndex=_idx;
            return true;
        } else {
            return false;
        }
    }
    selectNext(){
        if(this.currentIndex>=0 && this.currentIndex+1 < this.list.length){
            this.currentIndex++;
            return true;
        } else {
            return false;
        }
    }
    getList(){
        return this.list;
    }
    getFlight(_idx){
        if(!!this.list && !!this.list[_idx]){
            return this.list[_idx];
        } else {
            return null;
        }
    }
}