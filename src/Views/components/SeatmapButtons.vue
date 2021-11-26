<template>
    <!--
        [설명] Reflow 처리시 .seat-layout에 -reflow 추가
    -->
    <div class="payment-widget">
        <div class="payment-widget__aligner">
            <h2 class="payment-widget__key">유료 좌석 결제 금액</h2>
            <div class="payment-widget__fares">
                <span class="payment-widget__fare"><em class="payment-widget__fare-num">150,000</em>원</span>
            </div>

            <button type="button" class="payment-widget__confirm">저장하고 다음 항공편</button>
        <!-- <button type="button" class="payment-widget__confirm">신청완료</button> -->
        </div>
    </div>
</template>
<script>
export default ({
    name:'SeatmapButtons'
})
</script>

<style lang="less" scoped>

</style>