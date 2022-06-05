import { reactive } from 'vue'

export const store = reactive({
    senhaCerta: "jw.org/pt/",
    autenticado: false,
    nomeJogador: "",
    acertos: 0,
    //--------------------------------------------
    perguntas: ['Qual destes Jeová criou primeiro ?', 'Qual era a altura de Golias aproximadamente?', 'Com quantos anos Samuel foi morar no templo?', 'qual destas pragas não fez parte das 10 pragas do egito?', 'Qual foram os dois espiões que confiaram em Jeová e acalmaram o povo?','Quais são os nomes dos 3 hebreus ?', 'Quantas esposas tinha Salomão?', 'Quem foi o ladrão que roubou despojos de guerra em Israel?', 'Quais as '],
    respostas: ['Terra', 'Universo', 'Criaturas Espirituais', 'Humanos', '2,30m', '2,50m', '2,90m', '3m', '4 ou 5', '5 ou 6', '6 ou 7', '7 ou 8', 'borrachudos', 'seca', 'morte de animais', 'Rãs','Calebe e Josué', 'Calebe e Gadi', 'Calebe e Safate', 'Calebe e Efraim','Mizael Hananias e Simear','Simear Azarias e Mizael ', 'Hananias Mizael  e Azarias', 'Hananias Azarias e Simear', '200', '500', '700', '800', 'qqq', 'Acã', 'qqq', 'qqq'],
    gabarito: ['Criaturas Espirituais', '2,90m', '4 ou 5', 'seca', 'Calebe e Josué'],
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