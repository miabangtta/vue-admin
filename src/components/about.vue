<template lang="pug"> 
.div
    .page-title Страница &laquo;Обо мне&raquo;
    .about
        skills-list(
            v-for="(skillType, index) in skillsTypes"
            :key="index"
            :skillType="skillType"
            :skills="skills"
        )
    .saveButton 
        button(
            type="button"
        ) Сохранить
</template>
    
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            skillsTypes: ['Frontend', 'Backend', 'Workflow']
        };
    },
    computed: {
        ...mapGetters(['skills'])
    },
    methods: {
        ...mapActions(['fetchSkills'])
    },
    created() {
        this.fetchSkills();
    },
    components: {
        skillsList: require('./skillsList')
    }
}
</script>

<style src="styles/about.scss" lang="scss" scoped>

</style>