<template>
    <div id="seat-31e" class="seat-info -center" aria-hidden="false">
        <div class="seat-info__aligner">
            <h3 class="seat-info__heading">
                <!-- [수정: 200730] h3안의 div를 모두 span으로 변경 -->
                <span class="seat-info__seat">
                    <span class="economy -baby"></span>
                </span>
                <span class="seat-info__info">
                    <span class="seat-info__selected">일반석 31E</span>
                    <span class="seat-info__price">12,000</span>
                </span>
            </h3>

            <ul class="seat-info__list">
                <li class="seat-info__item">일반석</li>
                <li class="seat-info__item">아기바구니 신청 가능 좌석</li>
                <li class="seat-info__item">가운데 좌석</li>
                <li class="seat-info__item">항공기 날개 위에 있음</li>
                <li class="seat-info__item">비상 탈출구 근처 좌석</li>
            </ul>

            <div v-if="!!info" class="seat-info__baby">
                <!-- <button type="button" class="seat-info__expander" aria-controls="seat-30e-baby" aria-expanded="true">아기바구니 신청</button> -->
                <wish-toggle :expanded="expanded" :info="info" @toggle="onToggle"></wish-toggle> 
                <div :id="info.pannelId" class="seat-info__expand" :aria-hidden="!expanded">
                    <!-- [수정: 200730] h3를 h4로 변경 -->
                    <h4 class="_hidden">아기 신장 및 무게</h4>

                    <div class="requires" aria-hidden="true">
                        <span class="required">필수입력</span> 은 필수 입력 사항입니다.
                    </div>

                    <div class="seat-info__forms">
                        <div class="seat-info__form">
                            <div class="forms">
                                <label for="baby-height" class="label">
                                    신장(cm)<span class="required">&nbsp;필수입력</span>
                                </label>
                                <div class="forms">
                                    <input type="tel" id="baby-height" />
                                </div>
                            </div>
                        </div>

                        <div class="seat-info__form">
                            <div class="forms">
                                <label for="baby-weight" class="label">
                                    무게(kg)<span class="required">&nbsp;필수입력</span>
                                </label>
                                <div class="forms">
                                    <input type="tel" id="baby-weight" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul class="seat-info__list">
                        <li class="seat-info__item">신장 75cm(2.46ft)이하, 체중 11kg(24.25lb)이하 유아만 신청 가능합니다.</li>
                        <li class="seat-info__item">아기바구니 사이즈 : 가로 75cm(29.53inch)&nbsp;<span aria-hidden="true">X</span>&nbsp;세로 34cm(13.38inch)&nbsp;<span aria-hidden="true">X</span>&nbsp;높이 22.4cm(8.82inch)</li>
                    </ul>
                </div>
            </div>

            <p class="seat-info__message">
                <span class="remark -secondary -bold">김대한님</span>의 좌석을 30E로 선택하시겠습니까?
            </p>

            <div class="seat-info__buttons">
                <button type="button" class="seat-info__button">좌석 선택</button>
            </div>

            <button type="button" class="seat-info__close" @click="closePopover">닫기</button>
        </div>
    </div>
</template>
<script>

export default({
    name:'SeatmapSeatDetail',
    prop:{
        seat:Object,
        traveler:Object
    },
    data(){
        if(_hasBassinet(this.seat) && _hasInfant(this.traveler)){
            return {
                seat:this.seat
            }
        } else {
            return {
                seat:this.seat,
                info:{
                    pannelId:`seat-${this.seat.seatNumber}-baby`,
                    title:'아기바구니 신청'
                }
            }
        }
    },
    methods: {
        closePopover(){
            // this.showPopover = true
            this.$emit('hidePopover', this)
        }
    }
})
</script>

<style scoped>
    .seat-info__aligner{
        z-index: 100;
    }
</style>
