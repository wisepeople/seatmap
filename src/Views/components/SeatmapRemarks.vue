<template>
    <!--
        [설명]
        .seat-legend에 -active를 넣으시면 활성화 됩니다.
    -->
    <div class="seat-legend" aria-hidden="true">
        <button type="button" class="seat-legend__expander" tabindex="-1">범례 모두 보기</button>
        <div class="seat-legend__expand">
            <ul class="seat-legend__list">
                <li class="seat-legend__item -legroom">엑스트라 레그룸</li>
                <li class="seat-legend__item -prefer">전방 선호좌석</li>
                <li class="seat-legend__item -charge">일반좌석</li>
                <li class="seat-legend__item -economy">일반석</li>
                <li class="seat-legend__item -selected">선택된 좌석</li>
                <li class="seat-legend__item -unselectable">선택 불가</li>
                <!-- [수정: 200710] 아이콘, 문구 변경 -->
                <li class="seat-legend__item -maskless -expand">선택 불가 좌석(산소마스크 미장착)</li>
            </ul>
            <ul class="seat-legend__list">
                <li class="seat-legend__item -toilet">화장실</li>
                <li class="seat-legend__item -galley">갤리</li>
                <li class="seat-legend__item -dutyfree">면세품 전시</li>
                <li class="seat-legend__item -bar">바/라운지</li>
                <li class="seat-legend__item -exit">비상구</li>
                <li class="seat-legend__item -wing">날개</li>
                <li class="seat-legend__item -windowless">창문없음</li>
                <li class="seat-legend__item -stairs">계단</li>
                <li class="seat-legend__item -facility">기내시설물</li>
            </ul>
        </div>
    </div>
</template>

export default ({
    name:'SeatmapRemarks'
})
</script>