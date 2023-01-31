// Este é um código de treino, que eu fui instruido a fazer pelo meu Curso da Udemy, e nesse código eu utilizei o eval() e eu jamais o usaria em qualquer
// tipo de trabalho profissional, eu o utilizei também devido ao fato de eu estár desenvolvendo minhas habilidades como Dev

function criaCalculadora() {  
    return {
        display: document.querySelector('.display'), // seleciona o display da calculadora
        btnClear: document.querySelector('btn-clear'),//Seleciona o botão clear 

        inicia() {
            this.cliqueBotoes();// é o responsavel por iniciar a calculadora
        },

        equalCalcu() {
            let conta = this.display.value;  // Pega os valores do display

            try {
                conta = eval(conta);  //!!!!!!!!!!!! JAMAIS UTILIZAR EVAL, EM SITUAÇÕES PROFISSIONAIS EVAL É UM GRAVISSÍMO ERRO DE SEGURANÇA!!!!!!!!!!//
                // o eval() le uma string como código java script, por isso ao inserir a conta no display literalmente (10*10) o resultado será 100
                if(!conta){
                    alert('Conta Invalida!')   // se o valor for diferente de conta(Tipo Num) retornara Conta invalida!
                    return;
                }
                this.display.value = String(conta); // se o valor for uma String Retornara Conta invalida
            }   catch(e) {
                alert('Conta Invalida!');
                return;
            }
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1); // pega o valor do display (this.display.value(Valor inserido)) e usa o slice(0, -1) que ->
        }, // ----> apaga o ultimo index do display

        clearDisplay() {
            this.display.value = ""  // define o valor do display como Null por que possui uma string vazia ""
        },


        cliqueBotoes() {
            document.addEventListener('click', e => { // defino um evento para sempre que eu clicar este evento de click retorne o elemento que eu cliquei.
                const el = e.target; // const el = e(Evento).target("Alvo", o elemento da página que foi clicado, que recebeu o e(evento) click)
                if (el.classList.contains('btn-num')) { // if(se) el(elemento do target) classList.contains(conter a classe) ('btn-num') classe definida no html retorna ->
                    this.btnParaDisplay(el.innerText); // -> this(esse, se). 
                }       // linha 43 this se refere ao btnParaDisplay(el = elemento clicado no  e(evento).target(alvo do evento).innerText(inserir o elemento do target-->))
                // --> no display
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();   // Se o usuario clicar em um elemento que contenha a classe btn-clear ele executara o comando clearDisplay(Linha 34)
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteOne();       //se o usuario clicar no elemento que contenha (btn-del) ele executara o comando deleteOne( Linha 30)
                }

                if(el.classList.contains('btn-eq')){
                    this.equalCalcu(); // executa o comando equalCalcu (linha 13)
                }

            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor;  // Comando que pega o valor do elemnto de clase (btn-num)  e concatena esse mesmo valor no display!
        }

    };
}

const calculadora = criaCalculadora() // É a nossa principal função ela é chamada de factory function por receber todas as outras dentro do seu proprio escopo
calculadora.inicia()  // Inicia Tudo que está no código

//criar metodo para iniciar a calculadora
//metodos vão para baixo
//atributos que são variaveis vão ficar para cima 
