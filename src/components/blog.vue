<template lang="pug">  
.blog
    .page-title Страница &laquo;Блог&raquo;
    form.form
        .form-title Добавить запись
        .field
            input(
                placeholder="Название"
                v-model="title"
            ) 
        .field
            input(
                placeholder="Дата"
                v-model="date"
            )
        .field
            textarea(
                rows="10" placeholder="Содержание"
                v-model="content"
            )
        .saveButton 
            button(
                type="button"
                @click="addNewArticle"
            ) Добавить
</template>

<script>
import {mapMutations} from 'vuex';
import {Validator} from 'simple-vue-validator'; 


export default {
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        title(value) {
            return Validator.value(value).required('Поле не может быть пустым')
        },
        date(value) {
            return Validator.value(value).required('Поле не может быть пустым')
        },
        content(value) {
            return Validator.value(value).required('Поле не может быть пустым')
        }
    },
    props: {
        articles: Object,
        title: String,
        date: String,
        content: String
    },
   data: {
       articles: [ 
           title= '',
           date='',
           content= ''
        ]
   },
   methods: {
       ...mapMutations(['addNewArticle'])       
   }
}
</script>

<style src="styles/form.scss" lang='scss' scoped>

</style>