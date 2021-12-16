<template>
    <div class="contents">
        <h1 id="skip" class="h1">좌석 배정</h1>
        <template v-if="!isLoading&&travelers&&currentSegment">
            <seatmap-itinerary :flights="flights" :popoverId="popoverId"></seatmap-itinerary>
            <seatmap-segment :travelers="travelers" :popoverId="popoverId" :flights="flights" :currentSegment="currentSegment" ></seatmap-segment>
            <!-- @changePopoverState="onChangePopoverState" -->
            <seatmap-buttons></seatmap-buttons>
        </template>
    </div>
</template>
<script lang="ts">
/*// <reference path="./SegmentsData.ts" />*/
// import SeatAssign from './Model/Row'
// import {Cell, Seat, Facillity, Asile, Empty} from './Model/Cell'
import {SeatAssignFlights} from '../Model/SeatAssignFlights'
// import {SeatAssignFlight} from '../Model/SeatAssignFlight'
// import {Test} from '../components/test'
import {SeatAssignTravelers} from '../Model/SeatAssignTravelers'
// import {SeatAssignTraveler} from '../Model/SeatAssignTraveler'
import {rebuildData, SegmentsData, ErrorData, SeatSegment, GotoWCISegment, SegmentInfo} from '../Model/SegmentsData'
// import * as SeatFlights from './Model/SeatFlights.ts'
// import * as _ from 'lodash'
// import _ from 'lodash'
// import _uuid from 'lodash-uuid'
import axios from 'axios'
import SeatmapItinerary from './components/SeatmapItinerary.vue'
import SeatmapSegment from './components/SeatmapSegment.vue'
import SeatmapButtons from './components/SeatmapButtons.vue'
import { isMobile, isIOS, isAndroid } from 'mobile-device-detect';

// dummy API
const URLS = {
    ORDER:'/dummyAPI/order.json',
    SEAT:'/dummyAPI/seats.json'
};
export default ({
    name: 'SeatmapWrapper',
    components: {
        SeatmapItinerary,
        SeatmapSegment,
        SeatmapButtons
    },
    data() {
        return {
            baseInfo:{
                isMobile:isMobile,
                isIOS:isIOS,
                isAndroid:isAndroid,
            },
            popoverId:'',
            order:null,
            seats:null,
            seatData:SegmentsData,
            currentSegment:SeatSegment,
            flights:SeatAssignFlights,
            travelers:SeatAssignTravelers,
            showSegment:false,
            isLoading:true
        }
    },
    beforeCreate(){
        console.log('SeatmapWrapper/beforeCreate', this);

    },
    // created(){
    //     console.log('SeatmapWrapper/created', this);
    //     // API call
    //     axios.get(URLS.ORDER).then(this.onSuccessOrder).catch(this.onErrorOrder).finally(this.onFinallyOrder)
    // },
    methods:{
        // onChangePopoverState(_val: any){
        //     console.log('onChangePopoverState', _val);
        //     // this.$set(this,'popoverId',_val);
        // },
        /**
         * 예약 조회 성공
         */
        // onSuccessOrder(resp: { status: string; data: any }){
        //     if(resp.status == '200'){
        //         // this.order = resp.data;
        //         // console.log(this.order);
        //         // const _dicKeies = Vue._.keys(this.order.dictionaries).map(_key=>_key);
        //         // const regex = /^([A-Za-z0-9_\-]+)Code$/;
        //         // const regex2 = /^([A-Za-z0-9_\-]+)s$/;
        //         // const doMapping = (_next, _info, _infoKey)=>{
        //         //     Vue._.each(_info, (_v, _k)=>{
        //         //         switch(typeof _v){
        //         //             case 'object':
        //         //                 if(_v instanceof Array){
        //         //                     // 배열의 경우 하위로 내려가면 key값이 유실되므로 여기서 처리
        //         //                     // _k:    flights
        //         //                     // _key:        flight
        //         //                     // _v:          [item..]
        //         //                     // _v2:          item:object
        //         //                     // _i:          0
        //         //                     // _v2.id:       'ST1'
        //         //                     if(regex2.test(_k)){
        //         //                         const _key = regex2.exec(_k)[1];
        //         //                         Vue._.each(_v, (_v2,_i,_arr)=>{
        //         //                             if(!!_v2 && !!_v2.id && !!this.order.dictionaries[_key] && !!this.order.dictionaries[_key][_v2.id]){
        //         //                                 _arr[_i]= Vue._.extend({}, _v2, this.order.dictionaries[_key][_v2.id]);
        //         //                                 // _info[_key][_k] = _v;
        //         //                             }
        //         //                             // _next.call(this,_next,_v,_i);
        //         //                         });
        //         //                     }
        //         //                 // } else {
        //         //                 //     //object
        //         //                 }
        //         //                 _next.call(this, _next, _v, _k);
        //         //                 break;
        //         //             case 'string':
        //         //                 if(regex.test(_k)){
        //         //                     const _key = regex.exec(_k)[1];
        //         //                     if(!!this.order.dictionaries[_key] && !_info[_key]){
        //         //                         _info[_key] = Vue._.extend({code:_v}, this.order.dictionaries[_key][_v]);
        //         //                         // _info[_key][_k] = _v;
        //         //                     }
        //         //                 }
        //         //                 break;
        //         //             default:
        //         //                 break;
        //         //         }
        //         //     });
        //         //     return _info;
        //         // };
        //         const _cvtedData = rebuildData.call(this, this.order);
        //         console.log('_cvtedData',_cvtedData);
        //         const _flightsData = Vue._.reduce(_cvtedData.air.bounds, (_arr, _bound, _bi)=>{
        //             return Vue._.reduce(_bound.flights, (_arr, _fl, _fi)=>{
        //                 _arr.push(_.extend({},_fl,this.order.dictionaries.flight[_fl.id]));
        //                 return _arr;
        //             }, _arr);
        //         }, []);
        //         this.flights = new SeatAssignFlights(_flightsData);
        //         this.travelers = new SeatAssignTravelers(_cvtedData.travelers);
        //         this.seats=[];
        //         this.seatData = new SegmentsData({length:this.flights.getList().length, firstIdx:0});
        //         this.flights.getList().forEach((_fl: { id: string },_i: any) => {
        //             //TODO options
        //             axios.get(URLS.SEAT+'?FLIGHTID='+_fl.id).then(this.onSuccessSeat.bind(this, _i)).catch(this.onErrorSeat.bind(this, _i)).finally(this.onFinallySeat.bind(this,_i))
        //         })
        //     } else {
        //         // this.onError.call(this, resp)
        //         throw new Error('order call failed.')
        //     }
        // },
        /**
         * 좌석 조회 성공
         */
        // onSuccessSeat(_i: string|number, resp: { status: number; data: { contextualSeatmapReplyList: any[] } }){
        //     console.log('onSuccessSeat', resp);
        //     if(resp.status==200 && resp.data && resp.data.contextualSeatmapReplyList && resp.data.contextualSeatmapReplyList[0]){
        //         this.seats[_i] = resp.data.contextualSeatmapReplyList[0];
        //         this.seatData.setData(_i, new SeatSegment(resp.data.contextualSeatmapReplyList[0], this.travelers.getCurrentId()));

        //         // setTimeout(()=>{
        //         // // 후처리
        //         // this.currentSegment = this.seatData.getCurrentSegment()
        //         // // show segment
        //         // this.showSegment = true
        //         // this.isLoading = false
        //         // },1000);
        //     } else {
        //         this.seats[_i] = {};
        //         this.seatData.setData(_i, new ErrorData());
        //     }
        //     if(this.seatData.isSetAll()){
        //         // setTimeout(()=>{
        //             // 후처리
        //             this.currentSegment= this.seatData.getCurrentSegment();//TODO
        //             // this.currentSegment = this.seatData.getCurrentSegment()
        //             // show segment
        //             this.showSegment = true
        //             this.isLoading = false
        //         // },1000);
        //     }
        // },
        // onErrorSeat(_i: any, error: any){
        //     // this.seatData[_i] = new ErrorData(error)
        //     this.seatData.setData(_i);
        //     if(this.seatData.isSetAll()){
        //         // setTimeout(()=>{
        //             // 후처리
        //             this.currentSegment= this.seatData.getCurrentSegment();//TODO
        //             // this.currentSegment = this.seatData.getCurrentSegment()
        //             // show segment
        //             this.showSegment = true
        //             this.isLoading = false
        //         // },1000);
        //     }
        // },
        // /**
        //  * 공통 통신 에러
        //  */
        // onErrorOrder(error: any){
        //     // this.seatData[_i] = new ErrorData(error)
        //     console.error(error)
        // },
        // /**
        //  * 공통 통신 에러
        //  */
        // onError(_i: any, error: any){
        //     // this.seatData[_i] = new ErrorData(error)
        //     console.error(error)
        // },
        // /**
        //  * 예약 조회 Finally
        //  */
        // onFinallyOrder(resp: any){
        //     console.log('onFinallyOrder', resp)
        //     // 후처리
        //     // show Flights
        // },
        // /**
        //  * 좌석 조회 Finally
        //  */
        // onFinallySeat(_i: any, resp: any){
        //     if(this.seatData.isSetAll()){
        //         console.log('onFinallySeat', '1');
        //         // setTimeout(()=>{
        //             // 후처리
        //             this.currentSegment= this.seatData.getCurrentSegment();//TODO
        //             // this.currentSegment = this.seatData.getCurrentSegment()
        //             // show segment
        //             this.showSegment = true
        //             this.isLoading = false
        //         // },1000);
        //     } else {
        //         console.log('onFinallySeat', '2');
        //     }
        // }
    }
})

// export class SeatAssignFlights{
//     private list:SeatAssignFlight
//     constructor(resp:any[]){
//         this.list = resp.map((_fl:object, _i:number) => {
//             return new SeatAssignFlight(_fl)
//         })
//     }
// }
// export class SeatAssignFlight{
//     constructor(data:object){
//         console.log('SeatFlight', data)
//     }
// }

// export class SeatAssignTravelers{
//     list:SeatAssignTraveler
//     constructor(resp:any[]){
//         this.list = resp.map((_tra, _i) => {
//             return new SeatAssignTraveler(_tra)
//         })
//     }
// }
// export class SeatAssignTraveler{
//     constructor(data:object){
//         console.log('SeatAssignTraveler', data)
//     }
// }
</script>