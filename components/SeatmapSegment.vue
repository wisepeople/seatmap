<template>
    <!--
            [설명]
            - 상단 고정시 .seat-layout에 -fixed 추가
            - Reflow 처리시 .seat-layout에 -reflow 추가(-fixed 삭제할 필요 없음)
            - 모바일에서는 고정하지 않습니다.
        -->
        <div class="seat-layout">
            <div class="seat-layout__aside">
                <seatmap-travelers></seatmap-travelers>
                <seatmap-remarks></seatmap-remarks>
            </div>

            <div class="seat-layout__container">

                <div class="seat-layout__contents">
                    <h2 class="h3">좌석 선택</h2>

                    <div class="_hidden">
                        <h3 class="h3">키보드 운용방법</h3>
                        <ul class="list -disc">
                            <li class="list__item">좌석 이동 : 방향키</li>
                            <li class="list__item">좌석 선택 : 엔터키 혹은 스페이스바</li>
                        </ul>
                    </div>

                    <p class="caption">공동 운항하는 항공편으로 기내 시설물의 위치가 실제와 상이할 수 있습니다.</p>
                <!-- <p class="caption">공동 운항하는 항공편으로 좌석 배치도가 실제와 상이할 수 있습니다.</p> -->

                    <div role="group" aria-label="기내 층수 선택" class="selections -inline">
                        <div class="selection">
                            <input type="radio" id="floor1" name="floor" checked="checked" />
                            <label for="floor1">1층</label>
                        </div>
                        <div class="selection">
                            <input type="radio" id="floor2" name="floor" />
                            <label for="floor2">2층</label>
                        </div>
                    </div>
                    <seatmap-cabin></seatmap-cabin>
                </div>

                <h3 class="h3" aria-hidden="true">키보드 운용방법</h3>
                <ul class="list -disc" aria-hidden="true">
                    <li class="list__item">좌석 이동 : 방향키(Arrow Key)</li>
                    <li class="list__item">좌석 선택 : 엔터키(Enter Key) 혹은 스페이스바(Space bar)</li>
                </ul>
            </div>
        </div>
</template>
<script>
export default ({
    name:'SeatmapSegment'
})
</script>

<style lang="less" scoped>

</style>