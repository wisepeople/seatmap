<template>
        <seatmap-seat v-if="cell.type=='seat'" :popoverId="popoverId" :seat="cell" :travelers="travelers" @changePopoverState="onChangePopoverState"></seatmap-seat>
        <seatmap-facility v-else-if="cell.type=='facility'" :facility="cell"></seatmap-facility>
        <!-- <span class="aisle">통로</span> -->
        
        <td v-else-if="cell.type=='aisle'"><span class="aisle" >통로<span aria-hidden="true">33</span></span></td>
        <td v-else><span class="empty" >빈영역</span></td>
</template>
<script>

import SeatmapSeat from './SeatmapSeat'
import SeatmapFacility from './SeatmapFacility'
export default({
    name:'SeatmapCell',
    props: {
        popoverId:String,
        cell: Object,
        travelers:Object
    },
    data(){
        return {
            // popoverId:this.popoverId,
            // travelers:this.travelers
            // cell:this.cell
        }
    },
    components: {
        SeatmapSeat,
        SeatmapFacility
    },
    methods:{
        onChangePopoverState(_val){
            this.$emit('changePopoverState', _val)
        }
    }
})
</script>