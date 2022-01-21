import { SeatRow } from "./SeatRow";
import { SeatInfo } from "./SeatInfo";
import { SeatColumn } from "./SeatColumn";
// import { Facillity } from './Cell';
import { FacillityInfo } from "./FacillityInfo";
import _ from "lodash";

export class SeatDeck {
  deckInfo;
  columns;
  rows;
  constructor(deck, tId) {
    // deckDimensions: {width: 11, length: 45, startWingsX: 4, endWingsX: 21, exitRowsX: Array(3)}
    // deckType: "main"
    // facilities: (28) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    // firstAvailableSeat: {seatNumber: "28A", x: 1}
    // seats: (29
    this.deckInfo = new SeatDeckInfo({
      deckDimensions: deck.deckDimensions,
      facilities: deck.facilities,
      firstAvailableSeat: deck.firstAvailableSeat,
    });
    // this.zones = deck.zones.map(_z=>new SeatZone(_z));

    // 0:
    // cabin: "eco"
    // coordinates: {x: 1, y: 0}
    // seatNumber: "28A"
    // travelers: Array(4)
    // 0: {id: "PT1", seatCharacteristicsCodes: Array(5), seatAvailabilityStatus: "available"}
    // 1: {id: "PT2", seatCharacteristicsCodes: Array(5), seatAvailabilityStatus: "available"}
    // 2: {id: "PT3", seatCharacteristicsCodes: Array(5), seatAvailabilityStatus: "available"}
    // 3: {id: "PT4", seatCharacteristicsCodes: Array(5), seatAvailabilityStatus: "available"}
    // length: 4
    // console.log(deck.seats);
    // debugger;
    // 통로 추출
    const _groupedSeats = _.groupBy(deck.seats, (_seat) => {
      // console.log(_seat);
      return parseInt(_seat.seatNumber);
    });
    // const _maxRow = _.maxBy(_groupedSeats, _row => _row.length);
    const _rowArr = _.map(_groupedSeats, (_row) => {
      return _row;
    });
    const _lengthArr = _.map(_rowArr, (_row) => {
      return _row.length;
    });
    const _len = _.max(_lengthArr);
    const _idx = _.indexOf(_lengthArr, _len);
    const _maxRow = _rowArr[_idx];
    const _term = 0;
    const _arr = [];
    const _columns = new Array(deck.deckDimensions.width).fill({ name: "" });
    const _arrAll = _.map(_columns, (_v, _k) => _k);

    // _.each(_maxRow, (_col) => {
    //     if (_col && _col.coordinates) { _arr.push(_col.coordinates.y + _term); }
    // });

    _.each(_maxRow, (_col) => {
      if (_col && _col.coordinates) {
        _arr.push(_col.coordinates.y + _term);
      }
      const c = /[A-Z]$/.exec(_col.seatNumber);
      // console.log(c[0]);
      if (!!c && c.length > 0) {
        _columns[_col.coordinates.y + _term] = new SeatColumn(c[0]);
      } else {
        debugger;
      }
    });
    this.columns = _columns;
    const _aisleCol = _.xor(_arrAll, _arr);

    // 좌석 Table 구성
    // this.rows = _.map(new Array(deck.deckDimensions.length+1),_row=>new SeatRow());
    this.rows = new Array() < SeatRow > deck.deckDimensions.length + 1;
    _.each(deck.seats, (_seat) =>
      this.rows[_seat.coordinates.x]?.setCol(
        _seat.coordinates.y,
        new SeatInfo(_seat, tId)
      )
    );

    // Facillity 구성
    _.each(deck.facilities, (_fac) =>
      this.rows[_fac.coordinates.x]?.setCol(
        _fac.coordinates.y,
        new FacillityInfo(_fac)
      )
    );

    // 행번호 입력
    _.each(this.rows, (_row) => {
      if (_row.cols[0]) {
        const _col = _row.cols[0];
        if (!!_col && _col instanceof SeatInfo && _col.seatNumber) {
          _row.set("rowNumber", parseInt(_col.seatNumber));
        }
      }
    });
    // 출구행 설정
    _.each(deck.deckDimensions.exitRowsX, (_posX) =>
      this.rows[_posX].set("exit")
    );
    // 출구행 설정
    let _row;
    for (
      var i = deck.deckDimensions.startWingsX,
        iMax = deck.deckDimensions.endWingsX;
      i <= iMax;
      i++
    ) {
      _row = this.rows[i];
      _row.set("wing");
      if (i == deck.deckDimensions.startWingsX) {
        _row.set("wingStart");
      }
      if (i == deck.deckDimensions.endWingsX) {
        _row.set("wingEnd");
      }
    }
  }
}
class SeatDeckInfo {
  deckDimensions;
  facilities;
  firstAvailableSeat;
  constructor(param) {
    this.deckDimensions = param.deckDimensions;
    this.facilities = param.facilities;
    this.firstAvailableSeat = param.firstAvailableSeat;
  }
}
