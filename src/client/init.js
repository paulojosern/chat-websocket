import Vue from 'vue/dist/vue.esm'
import chat from './chat.vue'

const app = new Vue({
    el: "#app",
    components: {
        chat
    },
    template: "<chat />"
})