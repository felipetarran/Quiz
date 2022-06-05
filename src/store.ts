import { reactive } from 'vue'

export const store = reactive({
    senhaCerta: "adicione uma senha",
    autenticado: false,
    nomeJogador: "",
    acertos: 0,
    //--------------------------------------------
    perguntas: [''],
    respostas: [''],
    gabarito: [''],
    numpergunta: 1,
    isDisabled: false,
    show: true,
})

export function cutArray () {
    store.perguntas.shift()
    store.gabarito.shift()
    store.respostas.splice(0,4)
    store.numpergunta ++
}

export function desabilitaHabilita() {
    store.isDisabled = !store.isDisabled
}
