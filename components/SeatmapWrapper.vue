<template>
    <div class="contents">
        <h1 id="skip" class="h1">좌석 배정</h1>
        <seatmap-itinerary></seatmap-itinerary>
        <seatmap-segment></seatmap-segment>
        <seatmap-buttons></seatmap-buttons>
    </div>
</template>
<script>
import SeatmapItinerary from './SeatmapItinerary'
import SeatmapSegment from './SeatmapSegment'
import SeatmapButtons from './SeatmapButtons'
export default ({
    name: 'SeatmapWrapper',
    components: {
        SeatmapItinerary,
        SeatmapSegment,
        SeatmapButtons
    },
    beforeCreate(){
        console.log('beforeCreate', this);
    },
    created(){
        console.log('created', this);
    }
})
</script>
<style lang="less" scoped>

</style>