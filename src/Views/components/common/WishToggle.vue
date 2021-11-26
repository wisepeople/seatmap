<template>
    <button type="button" class="seat-info__expander" :class="{'-active':expanded}" aria-controls="{{info.panelId}}" aria-expanded="{{expanded}}" @click="onClickToggle">{{info.title}}</button>
</template>
<script>
export default ({
    name:'WishToggle',
    prop:{
        info:Object,
        expanded:Boolean
    },
    data(){
        return {
            expanded:this.expanded,
        }
    },
    methods:{
        onClickToggle(event){
            event.preventDefault()
            this.$emit('toggle', !this.expanded)
        }
    }
})
</script>
