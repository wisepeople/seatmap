<template>
    <div>
        <h2 class="_hidden">항공편 선택</h2>
        <!--
            [설명]
            - 상단 고정시 .seat-drops에 -fixed 추가
            - Reflow 처리시 .seat-drops에 -reflow 추가(-fixed 삭제할 필요 없음)
        -->
        <div class="seat-drops">
            <div class="seat-drops__aligner">
                <div class="seat-drops__heading">
                    <span class="_hidden">세개 중 첫번째 항공편</span>

                    <div class="seat-drops__summary -colored">
                        <div class="seat-journey">
                            <div class="seat-journey__aside">
                                <div class="seat-journey__infos">
                                    <div class="seat-journey__info">
                                        <em class="remark -secondary -bold">KE091</em>
                                        <!--
                                            [설명]
                                            - .opener와 .popover는 모바일에서만 노출됩니다.
                                            - PC일 경우 DOM을 삭제해주시고 모바일로 변경시 다시 삽입해주셔야 합니다.
                                            - .opener의 ._pc-hidden은 예시를 위한 것이니 삭제 하시면 됩니다.
                                        -->
                                            <button type="button" class="opener popover__trigger _pc-hidden" aria-controls="popover0" aria-expanded="false">스카이팀 여정 상세 보기</button>
                                            <div id="popover0" class="popover -down -left" aria-hidden="true">
                                                <span class="popover__edge" aria-hidden="true"></span>
                                                <p class="popover__p">항공기<a href="#" class="link">B777-000ER<span class="_hidden">&nbsp;새 창 열림</span></a></p>

                                                <button type="button" class="popover__close">닫기</button>
                                            </div>
                                    </div>

                                    <div class="seat-journey__info _mo-hidden">
                                        <a href="#" class="link" target="_blank">B777-000ER<span class="_hidden">&nbsp;새 창 열림</span></a>
                                    </div>
                                    <div class="seat-journey__info -expand">3월 19일 (화) 19:36</div>
                                </div>
                                <div class="seat-journey__value">
                                    <em class="remark -positive">1명 신청</em>
                                </div>
                            </div>

                            <div class="seat-journey__locations">
                                <div class="seat-journey__location">
                                    <span class="_hidden">출발지</span>
                                    <span class="seat-journey__code">&nbsp;ICN</span>
                                    <span class="seat-journey__name">&nbsp;서울/인천&nbsp;</span>
                                </div>
                                <div class="seat-journey__location">
                                    <span class="_hidden">도착지</span>
                                    <span class="seat-journey__code">&nbsp;YYZ</span>
                                    <span class="seat-journey__name">&nbsp;토론토&nbsp;</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" aria-controls="drop-list" aria-expanded="false" class="seat-drops__expander">
                        <span class="seat-drops__value">
                            <span class="remark -secondary">항공편 선택</span>
                            <span class="remark -secondary" aria-hidden="true">
                                <span class="remark -bold">1</span> / 3
                            </span>
                        </span>
                    </button>
                </div>

                <div id="drop-list" class="seat-drops__expand" aria-hidden="true">
                    <div class="seat-drops__contents">
                        <ol class="bundles">
                            <li class="bundle -lined">
                                <button type="button" class="seat-journey-option">
                                    <span class="seat-journey-option__number" aria-hidden="true">1.</span>
                                    <!--
                                        [설명]
                                        - 선택 되었을 때 '선택됨' 텍스트 추가
                                        - 해제 되었을 때 '선택됨' 텍스트 삭제
                                    -->
                                    <span class="_hidden">첫번째 항공편&nbsp;</span>
                                    <span class="seat-journey-option__locations">
                                        <span class="seat-journey-option__location">
                                            <span class="_hidden">출발지&nbsp;</span>
                                            <span class="seat-journey-option__code">ICN</span>
                                        </span>
                                        <span class="seat-journey-option__location">
                                            <span class="_hidden">&nbsp;도착지&nbsp;</span>
                                            <span class="seat-journey-option__code">YYZ</span>
                                        </span>
                                    </span>
                                    <span class="seat-journey-option__infos">
                                        <span class="seat-journey-option__info">
                                            <span class="remark -secondary -bold">&nbsp;KE090</span>
                                        </span>
                                    </span>
                                    <span class="seat-journey-option__value">
                                        <span class="remark -positive">&nbsp;1명 신청</span>
                                    </span>
                                    <!--
                                        [설명]
                                        - 선택 되었을 때 '선택됨' 텍스트 추가
                                        - 해제 되었을 때 '선택됨' 텍스트 삭제
                                    -->
                                    <span class="_hidden">&nbsp;선택됨</span>
                                </button>
                            </li>

                            <li class="bundle -lined">
                                <button type="button" class="seat-journey-option">
                                    <span class="seat-journey-option__number" aria-hidden="true">2.</span>
                                    <span class="_hidden">두번째 항공편&nbsp;</span>
                                    <span class="seat-journey-option__locations">
                                        <span class="seat-journey-option__location">
                                            <span class="_hidden">출발지&nbsp;</span>
                                            <span class="seat-journey-option__code">PUS</span>
                                        </span>
                                        <span class="seat-journey-option__location">
                                            <span class="_hidden">&nbsp;도착지&nbsp;</span>
                                            <span class="seat-journey-option__code">DTW</span>
                                        </span>
                                    </span>
                                    <span class="seat-journey-option__infos">
                                        <span class="seat-journey-option__info">
                                            <span class="remark -secondary -bold">&nbsp;KE091</span>
                                        </span>
                                    </span>
                                    <span class="seat-journey-option__value">
                                        <span class="remark -positive">&nbsp;2명 신청</span>
                                    </span>
                                </button>
                            </li>

                            <li class="bundle -lined">
                                <button type="button" class="seat-journey-option">
                                    <span class="seat-journey-option__number" aria-hidden="true">3.</span>
                                    <span class="_hidden">세번째 항공편&nbsp;</span>
                                    <span class="seat-journey-option__locations">
                                        <span class="seat-journey-option__location">
                                            <span class="_hidden">출발지&nbsp;</span>
                                            <span class="seat-journey-option__code">DTW</span>
                                        </span>
                                        <span class="seat-journey-option__location">
                                            <span class="_hidden">&nbsp;도착지&nbsp;</span>
                                            <span class="seat-journey-option__code">DTW</span>
                                        </span>
                                    </span>
                                    <span class="seat-journey-option__infos">
                                        <span class="seat-journey-option__info">
                                            <span class="remark -secondary -bold">&nbsp;KE092</span>
                                        </span>
                                    </span>
                                    <span class="seat-journey-option__value">
                                        <span class="remark -positive">&nbsp;0명 신청</span>
                                    </span>
                                </button>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="seat-mask" style="position:fixed;right:0;top:0;bottom:0;left:0;"></div>
        </div>
    </div>
</template>
<script>
export default ({
    name:'SeatmapItinerary'
})
</script>

<style lang="less" scoped>

</style>