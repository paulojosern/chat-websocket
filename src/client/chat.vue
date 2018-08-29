<template>
    <div>
        mensagens: 
        <ul>
            <li v-for="(msg, i) in mensagens" :key=i>
                {{msg}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    mounted(){
        this.ws = new WebSocket('ws://localhost:8000')
        this.ws.addEventListener('message', (msg) => {
            this.addMessage(msg.data)
        })
    },
    methods: {
        addMessage(msg){
            this.mensagens.push(msg)
        }
    },
    data(){
        return {
            mensagens: ['a', 'b', 'c']
        }
    }
}
</script>

<style>

</style>
