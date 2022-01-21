'use strict'
import _ from 'lodash'

export class SeatAssignFlight{
    bookingClass
    id
    cabinClass
    statusCode
    marketingAirlineCode
    operatingAirlineCode
    marketingFlightNumber
    operatingAirlineFlightNumber
    departure
    arrival
    aircraftCode
    isOpenSegment
    aircrafflightStatustCode
    aircraft
    constructor(data){
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
