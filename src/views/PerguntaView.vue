<script setup lang="ts">
import { cutArray, desabilitaHabilita, store } from '../store'
import { ref, reactive } from 'vue'

const validaResposta = function (resposta : string) {
    desabilitaHabilita()
    let gabarito = store.gabarito[0]
    if(resposta == gabarito){
        console.log('correto')
        store.acertos ++
        console.log(store.acertos)
    }else{
       console.log('errado')
    }
}

const proxima = () => {
    cutArray()
    desabilitaHabilita()
    store.show = false
    setTimeout(function(){
        store.show = true
    }, 500)
}

</script>

<template>
<Transition name="slide-fade">
    <div v-if="store.show">
        <div class="block p-6 m-5 rounded-lg shadow-lg bg-white">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2 text-center">Pergunta {{ store.numpergunta }}</h5>
            <p class="text-gray-700 text-base mb-4">
            {{ store.perguntas[0] }} 
            </p>
        </div>
        <div class="grid gap-4 grid-cols-2 grid-rows-2 p-5" id="respostas">
            <button type="button" @click="validaResposta(store.respostas[0])" :disabled="store.isDisabled" class="block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{{ store.respostas[0] }}</button>
            <button type="button" @click="validaResposta(store.respostas[1])" :disabled="store.isDisabled" class="block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"> {{ store.respostas[1] }}</button>
            <button type="button" @click="validaResposta(store.respostas[2])" :disabled="store.isDisabled" class="block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"> {{ store.respostas[2] }} </button>
            <button type="button" @click="validaResposta(store.respostas[3])" :disabled="store.isDisabled" class="block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">{{ store.respostas[3] }}</button>
        </div>
        <button type="button" class="float-right block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out" @click="proxima">
            Próxima
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-right" class="w-7 h-7" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path>
            </svg>
        </button>   
    </div>
</Transition>
</template>

<style scoped>
    div#respostas > button{
        height: 200px !important;
    }
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>