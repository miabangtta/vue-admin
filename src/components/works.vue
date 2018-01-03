<template lang="pug">  
.div
    .page-title Страница &laquo;Мои работы&raquo;
    form.form
        .form-title Добавить работу
        .field
            input(
                placeholder="Название проекта"
            )
        .field
            input(
                placeholder="Технологии"
            )
        .field
            .add-icon            
            .add-pic Загрузить картинку
        .saveButton 
            button(
                type="button"
            ) Добавить
</template>

<script>
export default {}
</script>

<style src="styles/form.scss" lang='scss' scoped>

</style>