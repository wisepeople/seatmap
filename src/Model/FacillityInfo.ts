export class FacillityInfo{
    code: any;
    column: any;
    position: any;
    row: any;
    // code: "GN"
    // column: "A"
    // coordinates: {x: 45, y: 0}
    // position: "rear"
    // row: "63"
    constructor(param: { code: any; column: any; position: any; row: any; }){
        console.log('##fac', param);
        this.code = param.code;
        this.column = param.column;
        this.position = param.position;
        this.row = param.row;
    }
}