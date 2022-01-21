export class FacillityInfo{
    code
    column
    position
    row
    // code: "GN"
    // column: "A"
    // coordinates: {x: 45, y: 0}
    // position: "rear"
    // row: "63"
    constructor(param){
        console.log('##fac', param);
        this.code = param.code;
        this.column = param.column;
        this.position = param.position;
        this.row = param.row;
    }
}