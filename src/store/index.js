import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import skills from './modules/skills'
import articles from './modules/blog'


const store = new Vuex.Store({
    modules: {
        skills,
        articles
    }
}) 

export default store