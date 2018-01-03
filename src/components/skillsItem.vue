<template lang="pug"> 
    tr
        td {{skill.name}}
        td 
            input(
                type="text"
                :value="skill.percents"
            ).percents
        td %
        td 
            button(
                @click="removeSkill"
                type="button"
                ) Удалить         
</template>
    
<script>
export default {
    props: {
        skill: Object
    },
    methods: {
        removeSkill() {
            this.$emit('removeSkill', this.skill.id);
        }
    }
}
</script>

<style lang="scss" scoped>
    tr {
        width: 50%;
    }
    
    td {
        padding-bottom: 15px;
        max-width: 100px;
    }

    .percents {
        width: 45px;        
        text-align: center;        
        border-radius: 5px;
        padding: 10px;       
    }
</style>