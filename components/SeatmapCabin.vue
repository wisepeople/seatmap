<template>
    <div class="plane -rear -buffer">
        <table>
            <thead>
                <tr>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                    <td class="-aisle">통로</td>
                    <td>D</td>
                    <td>E</td>
                    <td>F</td>
                    <td class="-aisle">통로</td>
                    <td>G</td>
                    <td>H</td>
                    <td>J</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in rows"
                :key="row.key"
                :class="{'-frontwing':false, '-rearwing':false, '-wing':false, '-windowless':false, '-escape':false}"
                >
                <seatmap-cell
                    v-for="cell in row"
                    :key="cell.key"
                ></seatmap-cell>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="less" scoped>

</style>