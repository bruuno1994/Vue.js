const { createApp } = Vue;

createApp({
    data() {
        return {
            url: '/Aula_05/ps5.jpg',
            imagem: {
                width: '200px',
            },
            classeCSS: {
                color: 'red',
            },
            mostrar: false,
            img1: '/Aula_05/lampada-apagada.jpg',
            img2: '/Aula_05/lampada-acesa.jpg'
        }
    },
    methods: {
        botaoErrado: () => {
             alert("Você clicou no botão errado, tente novamente!")
        },
        toggleMostrar: function () {
            this.mostrar = !this.mostrar
        }
    }
}
).mount("#app")
