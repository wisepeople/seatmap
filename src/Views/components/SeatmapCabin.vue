<template>
    <div v-if="currentSegment&&currentSegment.decks" class="plane -rear -buffer">
        <table v-for="(deck, i) in currentSegment.decks" :key="i">
            <thead>
                <tr>
                    <td v-for="(col, j) in deck.columns" :key="j">
                        <seatmap-column v-if="!!col" :col="col"></seatmap-column>
                    </td>
                    <!-- <td>A</td>
                    <td>B</td>
                    <td>C</td>
                    <td class="-aisle">통로</td>
                    <td>D</td>
                    <td>E</td>
                    <td>F</td>
                    <td class="-aisle">통로</td>
                    <td>G</td>
                    <td>H</td>
                    <td>J</td> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in rows"
                :key="row.rowInfo.rowNumber"
                :class="{'-frontwing':false, '-rearwing':false, '-wing':false, '-windowless':false, '-escape':false}"
                >
                <seatmap-cell ref="cells"
                    v-for="cell in row.cols"
                    :key="cell.seatNumber"
                    :cell="cell"
                    :travelers="travelers"
                    :popoverId="popoverId"
                    @changePopoverState="onChangePopoverState"
                ></seatmap-cell>
                    <!-- v-on:showPopover="showPopover" -->
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import SeatmapCell from './SeatmapCell'
export default ({
    name:'SeatmapCabin',
    prop:{
        popoverId:String,
        travelers:Object,
        currentSegment:Object
    },
    data(){
        return {
            // popoverId:this.popoverId,
            // travelers:this.travelers,
            // seats:[

            // ],
            rows:[
                {
                    rowInfo:{
                        rowNumber:'1',
                        onWing:false,
                        noWindow:false
                    },
                    cols:[{type:'seat', seatNumber:'1A'}, {type:'seat', seatNumber:'1B'}, {type:'asile'}, {type:'seat', seatNumber:'1D'}, {type:'seat', seatNumber:'1E'}]
                },
                {
                    rowInfo:{
                        rowNumber:'2',
                        onWing:false,
                        noWindow:false
                    },
                    cols:[{type:'seat', seatNumber:'2A'}, {type:'seat', seatNumber:'2B'}, {type:'asile'}, {type:'seat', seatNumber:'2D'}, {type:'seat', seatNumber:'2E'}]
                },
                {
                    rowInfo:{
                        rowNumber:'3',
                        onWing:false,
                        noWindow:false
                    },
                    cols:[{type:'seat', seatNumber:'3A'}, {type:'seat', seatNumber:'3B'}, {type:'asile'}, {type:'seat', seatNumber:'3D'}, {type:'seat', seatNumber:'3E'}]
                },
                {
                    rowInfo:{
                        rowNumber:'4',
                        onWing:false,
                        noWindow:false
                    },
                    cols:[{type:'seat', seatNumber:'4A'}, {type:'seat', seatNumber:'4B'}, {type:'asile'}, {type:'seat', seatNumber:'4D'}, {type:'seat', seatNumber:'4E'}]
                }
            ]
        }
    },
    components: {
        SeatmapCell
    },
    methods:{
        onChangePopoverState(_val){
            this.$emit('changePopoverState', _val)
        }
    }
})
</script>
