<template>
    <div class="seat-combo">
        <h2 id="combo" class="_hidden">탑승객 선택</h2>
        <!--
            [설명]
            - 모바일에서 .seat-combo가 닫혀있을 때 .seat-combo__expand의 aria-expanded 기본값은 'false' 이고
                seat-combo__list 영역의 aria-hidden 기본값은 'true' 입니다.
            - 닫힌 상태에서 브라우저를 리사이즈해서 PC상태로 바뀔 때
                seat-combo__list 영역의 aria-hidden 값을 'false' 로 바꿔주세요.
            - PC일 경우 .seat-combo__button를 통째로 삭제해주시고 모바일로 돌아가면 다시 삽입해주세요.
-->
        <!--
            [설명]
            모바일의 경우 아코디언이기 때문에 role="navigation" 대신 role="region"으로 변경해주시고
            PC의 경우 role을 navigation으로 다시 변경하고 aria-labelledby와
            <h2 id="combo" class="_hidden">탑승객 선택</h2>의 id를 삭제해 주세요.

            <div class="seat-combo__list" role="navigation" aria-label="선택좌석리스트">

            다시 모바일이 될 경우 반대의 처리도 부탁드립니다.
        -->

        <div id="seat_list" class="seat-combo__list" role="navigation" aria-labelledby="combo"  style="display: block;">
            <ol class="seat-combo__lists">
                <li v-for="_tra in travelerList"
                :key="_tra.id">{{_tra.id}}</li>
                <li class="seat-combo__items -status-progress" :class="{'-active':true}">
                    <div class="seat-combo__item">
                        <button type="button" class="seat-combo__btn" aria-label="탑승객 1, 김대한, 33A, 구매완료">
                            <span class="seat-combo__key">1. 김대한</span>
                        </button>
                        <span class="seat-combo__value">
                            <span class="seat-combo__remark -positive -bold">33A</span>
                            구매완료
                            <button type="button" class="seat-combo__del">김대한 좌석 선택 취소</button>
                        </span>
                        <div class="seat-combo__full-area"></div>
                    </div>
                </li>
                <li class="seat-combo__items  -status-progress">
                    <div class="seat-combo__item">
                        <button type="button" class="seat-combo__btn" aria-label="탑승객 2, 김대한, 33A, 무료">
                            <span class="seat-combo__key">
                                2. 김대한
                            </span>
                        </button>
                        <span class="seat-combo__status">
                            <span class="remark -positive">Request in progress</span>
                            <button type="button" class="opener popover__trigger" aria-controls="seat-combo1" aria-expanded="false">신청중 안내문구</button>
                            <span id="seat-combo1" class="popover -seat-combo -down -right" aria-hidden="true">
                                <span class="popover__edge" aria-hidden="true"></span>

                                <span class="popover__p">운항 항공사로 좌석 배정 신청 중입니다.</span>

                                <button type="button" class="popover__close">닫기</button>
                            </span>
                        </span>

                        <div class="seat-combo__full-area"></div>
                    </div>
                </li>
                <li class="seat-combo__items -with-infant">
                    <div class="seat-combo__item ">
                        <button type="button" class="seat-combo__btn" aria-label="탑승객 2, 김대한, 33A, 무료">
                            <span class="seat-combo__key">
                                3. 김대한
                                <span class="seat-combo__baby">(with 김소아)</span>
                            </span>
                        </button>
                        <span class="seat-combo__status">
                            <span class="remark -positive">Request in progress</span>
                            <button type="button" class="opener popover__trigger" aria-controls="seat-combo1" aria-expanded="false">신청중 안내문구</button>
                            <span id="seat-combo1" class="popover -seat-combo -down -right" aria-hidden="true">
                                <span class="popover__edge" aria-hidden="true"></span>

                                <span class="popover__p">운항 항공사로 좌석 배정 신청 중입니다.</span>

                                <button type="button" class="popover__close">닫기</button>
                            </span>
                        </span>

                        <div class="seat-combo__full-area"></div>
                    </div>
                </li>
            </ol>
        </div><!---->
    </div>
</template>
<script>

export default ({
    name:'SeatmapTravelers',
    prop:{
        travelers:Object
    },
    // data(){
    //     return {
    //         travelerList:this.travelers.getList()
    //     }
    // },
    computed:{
        travelerList:this.travelers.getList()
    }
})
</script>