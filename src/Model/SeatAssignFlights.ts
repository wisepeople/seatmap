'use strict'
import _ from 'lodash'
export class SeatAssignFlights{
    list: SeatAssignFlight[];
    currentIndex: number;
    // list;
    constructor(resp: any){
        this.list = _.map(resp, (_fl, _i) => {
            return new SeatAssignFlight(_fl)
        });
        this.currentIndex = 0;
    }

    getCurrent(){
        return this.list[this.currentIndex];
    }
    setCurrent(_id: any){
        //TODO
        const _idx = _.findIndex(this.list, {id:_id});
        if(_idx>-1){
            this.currentIndex=_idx;
            return true;
        } else {
            return false;
        }
    }
    setCurrentByIndex(_idx: number){
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
    getFlight(_idx: number){
        if(!!this.list && !!this.list[_idx]){
            return this.list[_idx];
        } else {
            return null;
        }
    }
}
export class SeatAssignFlight{
    bookingClass: any;
    id: any;
    cabinClass: any;
    statusCode: any;
    marketingAirlineCode: any;
    operatingAirlineCode: any;
    marketingFlightNumber: any;
    operatingAirlineFlightNumber: any;
    departure: any;
    arrival: any;
    aircraftCode: any;
    isOpenSegment: any;
    aircrafflightStatustCode: any;
    aircraft: any;
    constructor(data: { bookingClass: any; id: any; cabin: any; statusCode: any; marketingAirlineCode: any; operatingAirlineCode: any; marketingFlightNumber: any; operatingAirlineFlightNumber: any; departure: any; arrival: any; aircraftCode: any; isOpenSegment: any; flightStatus: any; aircraft: any; }){
        console.log('SeatAssignFlight', data);
        this.bookingClass=data.bookingClass;
        this.id=data.id;
        this.cabinClass = data.cabin;//first,business,eco
        this.statusCode = data.statusCode;//: "HK",
        this.marketingAirlineCode=data.marketingAirlineCode;
        this.operatingAirlineCode=data.operatingAirlineCode;
        this.marketingFlightNumber=data.marketingFlightNumber;
        this.operatingAirlineFlightNumber=data.operatingAirlineFlightNumber;
        this.departure=data.departure;
        this.arrival=data.arrival;
        this.aircraftCode = data.aircraftCode;
        this.isOpenSegment = data.isOpenSegment;
        this.aircrafflightStatustCode = data.flightStatus;
        this.aircraft = data.aircraft;
    }

    getDate(){
        return this.departure.dateTime;
    }
    isEconomy(){
        return this.cabinClass == 'eco';
    }
    isKE(){
        return this.marketingAirlineCode == 'KE';
    }
    isKEOwn(){
        return this.marketingAirlineCode == 'KE' && this.operatingAirlineCode == 'KE';
    }
    isCS(){
        return this.marketingAirlineCode == 'KE' && this.operatingAirlineCode != 'KE';
    }
    isOAL(){
        return this.marketingAirlineCode != 'KE' && this.operatingAirlineCode != 'KE';
    }
    isCanada(){
        return this.departure.location.countryCode == 'CA' || this.arrival.location.countryCode == 'CA';
    }
}
