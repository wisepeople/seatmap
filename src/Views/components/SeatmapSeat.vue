<template>
    <td>
        <button type="button" class="economy -legroom" tabindex="-1" @click="onClickSeat">
            <span class="_hidden">31C</span>
            <span class="_hidden">&nbsp;엑스트라 레그룸</span>
            <span class="_hidden">&nbsp;복도 좌석</span>
            <span class="_hidden">&nbsp;항공기 날개 위에 있음</span>
            <span class="_hidden">&nbsp;비상 탈출구 근처 좌석</span>
        </button>
        <div v-if=showPopover class="seatMask" tabindex="-1" @click="hidePopover">&nbsp;</div>
        <seatmap-seat-detail v-if="showPopover" @hidePopover="hidePopover" :seat="seat"></seatmap-seat-detail>
    </td>
</template>
<script>
import SeatmapSeatDetail from './SeatmapSeatDetail'
import { uuid } from 'vue-uuid' // Import uuid
export default ({
    name:'SeatmapSeat',
    components: {
        SeatmapSeatDetail
    },
    props: {
        popoverId:String,
        seat: Object,
    },
    // computed:{
    //     // 왜 인식이 안될까...
    //     showPopover(){
    //         return this.uuid == this.popoverId;
    //     }
    // },
    data(){
        return {
            // popoverId:this.popoverId,
            uuid: '',
            showPopover: false,
            seat:this.seat
        }
    },
    methods: {
        onClickSeat(event){
            event.preventDefault()
            // debugger
            if(this.seat.status == 'available') {
            // this.$emit('changePopoverState', this.uuid);
                // this.showPopover = (this.uuid == popoverId);     //watch로 이동
                this.showPopover = true;
            }
        },
        hidePopover(){
            // this.$emit('changePopoverState', '');
            this.showPopover = false     //watch로 이동
        }
    },
    created(){
        console.log('seat/created', this);
        this.uuid = uuid.v1();
    },
    watch:{
        // 왜 인식이 안될까...
        // popoverId(_newVal, _oldVal){
        //     this.showPopover = (this.uuid != _newVal);
        // }
    }
})
</script>
<style scoped>
.seatMask{
    position: fixed;
    width:100%;
    height: 100%;
    top:0;
    left:0;
    background-color: rgba(60, 60, 60, 0.4);
    z-index: 90;
}
</style>