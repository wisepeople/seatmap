import _ from 'lodash';
import {SeatDeck} from './SeatDeck'
// /// <reference path="./SeatAssign.ts" />
// export namespace SeatAssign{
//     export class SegmentsData {
//         isInitialized = false
//         public list:Array<SegmentData> = []
//         SegmentsData(param:{firstIdx:number,length:number}){
//             if(param && param.length) {
//                 this.list = new Array(param.length)
//                 this.isInitialized = true
//             }
//         }
//         /**
//          * setData
//          */
//         public setData(resp) {

//         }

//     }
//     export interface SegmentData{}
//     export class SeatSegment implements SegmentData{
//         _data=null
//         public isInitialized = false
//         SegmentsData(resp){
//             if(resp) {
//                 this._data = resp
//                 this.isInitialized = true
//             }
//         }
//         /**
//          * setData
//          */
//         public setData(resp) {

//         }

//     }
//     export class ErrorSegment implements SegmentData{}
//     export class GotoWCISegment implements SegmentData{}
//     export class SegmentInfo{}
// }


export class SegmentsData {
    param;
    index;
    list = [];
    isInitialized = false;
    constructor(param){
        this.param = param;
        this.index = 0;
        if(param && param.length) {
            this.list = new Array(param.length);
            this.isInitialized = true;
        }
    }
    /**
     * setData
     */
    setData(_idx, resp) {
        if(!!resp && _idx>=0 && _idx < this.param.length){
            this.list[_idx] = resp;
        }
    }
    getCurrentSegment(){
        return this.list[this.index];
    }
    isSetAll(){
        return _.every(this.list,_v=>!!_v);
    }
}
export class ErrorData{
    constructor(param){}}

export class SeatSegment{
    isAvailable;
    isGotoWCI;
    is5200;
    chked;
    decks;
    isMultiDeck;
    deckIndex;
    segmentInfo;
    tId;
    cabinClass;
    popupFlg;
    isInitialized = false;
    _data;
    constructor(resp, tId, occupiedSeats, param) {
        this.isAvailable = false;
        this.isGotoWCI = false;
        this.is5200 = false;
        this.chked = false;
        this.decks = new Array();
        this.isMultiDeck = false;
        this.deckIndex = 0;
        this.segmentInfo = null;
        this.tId = tId||'';
        this.cabinClass = '';
        this.popupFlg = '';
        if(resp) {
            const cvtdData = rebuildData(resp);
            cvtdData.seatmaps[0].decks.forEach((_deck) => {
                this.decks.push(new SeatDeck(_deck, tId));
            });

            this.isInitialized = true;
        }
    }
    getSeats(_travelerId) {
        this._data.data.seatmaps[0].decks
    }

}
export class ErrorSegment{
    constructor(param){}}
export class GotoWCISegment{
    constructor(param){}}
export class SegmentInfo{
    constructor(param){}}

export function rebuildData(_info){
// const _dicKeies = _.keys(this.order.dictionaries).map(_key=>_key);
    return _rebuildData(_rebuildData, _info.dictionaries, _info.data, '');
}
export function _rebuildData(_next, _dic, _info, _infoKey){
    const _dicKeies = _.keys(_dic).map(_key=>_key);
    const regex = /^([A-Za-z0-9_\-]+)Code$/;
    const regex2 = /^([A-Za-z0-9_\-]+)s$/;
    _.each(_info, (_v, _k)=>{
        switch(typeof _v){
            case 'object':
                if(_v instanceof Array){
                    // ????????? ?????? ????????? ???????????? key?????? ??????????????? ????????? ??????
                    // _k:    flights
                    // _key:        flight
                    // _v:          [item..]
                    // _v2:          item:object
                    // _i:          0
                    // _v2.id:       'ST1'
                    if(regex2.test(_k)){
                        const result = regex2.exec(_k);
                        if(!!result){
                            const _key = result[1];
                            _.each(_v, (_v2,_i,_arr)=>{
                                if(!!_v2 && !!_v2.id && !!_dic[_key] && !!_dic[_key][_v2.id]){
                                    _arr[_i]= _.extend({}, _v2, _dic[_key][_v2.id]);
                                    // _info[_key][_k] = _v;
                                }
                                // _next.call(this,_next,_v,_i);
                            });
                        }
                    }
                // } else {
                //     //object
                }
                _next(_next, _dic, _v, _k);
                break;
            case 'string':
                if(regex.test(_k)){
                    const result = regex2.exec(_k);
                    if(!!result){
                        const _key = result[1];
                        if(!!_dic[_key] && !_info[_key]){
                            _info[_key] = _.extend({code:_v}, _dic[_key][_v]);
                            // _info[_key][_k] = _v;
                        }
                    }
                }
                break;
            default:
                break;
        }
    });
    return _info;
}