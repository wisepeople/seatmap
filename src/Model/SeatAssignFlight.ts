'use strict'
import _ from 'lodash'

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
