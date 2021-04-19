<template>
    <seatmap-seat v-if="cell.type=='seat'"></seatmap-seat>
    <seatmap-facility v-else-if="cell.type=='facility'"></seatmap-facility>
    <!-- <span class="aisle">통로</span> -->
    <span class="aisle" v-else-if="cell.type=='aisle'">통로<span aria-hidden="true">33</span></span>
    <span class="empty" v-else>빈영역</span>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default({
    name:'SeatmapCell',
    data:{

    }
})
</script>

<style lang="less" scoped>

</style>