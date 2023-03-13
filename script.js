const { createApp } = Vue;

createApp({
    data() {
        return {
            url: '/Aula_05/ps5.jpg',
            imagem: {
                width: '500px',
            },
            classeCSS: {
                color: 'red',
            },
            mostrar: false
        }
    },
    methods: {
        botaoErrado: () => {
             alert("Você clicou no botão errado, tente novamente!")
        },
        toggleMostrar: function () {
            if(this.mostrar == false) {
                this.mostrar = true
            } else if(this.mostrar == true) {
                this.mostrar = false
            }
        }
    }
}
).mount("#app")
