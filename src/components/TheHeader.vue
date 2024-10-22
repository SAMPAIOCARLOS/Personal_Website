<script>
import NavBar from './NavBar.vue'

import Typed from 'typed.js';
    export default {
        name: 'TheHeader',
        components: { NavBar },
        data() {
            return {
                data_img_social_light: [
                    {id: 1, path: 'https://www.linkedin.com/in/carlos-sampaio-a02651265/', name: 'logo-linkedin', alt: 'icone_linkedin', color: '--color--text'},
                    {id: 2, path: 'https://github.com/SAMPAIOCARLOS', name: 'logo-github', alt: '', color: '--color--text'},
                    {id: 3, path: '', name: 'mail-outline', alt: '', color: '--color--text'}
                ],
                data_img_social_dark: [
                    {id: 1, path: 'https://www.linkedin.com/in/carlos-sampaio-a02651265/', name: 'logo-linkedin', alt: 'icone_linkedin', color: '--color--text'},
                    {id: 2, path: 'https://github.com/SAMPAIOCARLOS', name: 'logo-github', alt: '', color: '--color--text'},
                    {id: 3, path: '', name: 'mail-outline', alt: '', color: '--color--text'}
                ],

                array_names: ['Desenvolvedor Front-end','Front-end Developer','Desenvolvedor Front-end','Front-end Developer']
                
            }
        },
        methods: {
            pass_event() {
                this.$emit("toggle_theme")
            },
            teste() {
                alert(this.group_iconsSocial)
            }
        },
        props: {
            btn_value: { type: Boolean, required: true },
            group_iconsSocial: { type: Boolean, required: true }
        },
        mounted() {
            const options = {
                strings: this.array_names,
                typeSpeed: 80, //tempo para os caracteres serem escritos
                backSpeed: 40, //tempo para os caracteres serem apagados
                cursorChar: "|", //O simbolo que aparece no final
                backDelay: 1000, //O tempo antes de apagar o texto
                loop: true // Se o efeito deve repetir indefinidamente
            };

            // Instanciando o Typed.js
            this.typed = new Typed('.typed-element', options);
        }    
    }
</script>


<template>

    <NavBar @pass_event="pass_event" :btn_value="btn_value"/>

    <header id="header">
        <div id="container_content_header">
            <div id="box_text_content">
                <h2>Olá, Visitante! <div id="hand">🖐️</div></h2>
                <h1>Meu nome é Carlos</h1>
                <h2 id="titleh2">Desenvolvedor <span class="color_blue typed-element"></span></h2>
            </div>
            <div id="box_icons_social">
                <span class="span_box_icons_social"></span>

                <div class="container_img_social" v-if="group_iconsSocial">
                    <a :href="item_light.path" target="blank" v-for="item_light in data_img_social_dark" :key="item_light.id">
                        <ion-icon :name="item_light.name" style="color: var(--color--text);" class="ion_icons_social"></ion-icon>
                    </a>
                </div>



                <div class="container_img_social" v-else>
                    <a :href="item_dark.path" target="blank" v-for="item_dark in data_img_social_light" :key="item_dark.id">
                        <ion-icon :name="item_dark.name" style="color: var(--color--text);" class="ion_icons_social"></ion-icon>
                    </a>
                </div>

                <span class="span_box_icons_social"></span>

            </div>

            <div id="icon_bottom">
                <a href="#container_main" style="color: #fff;"> <!--no caminho desse link tem que mudar para um container que esteja centralizado na div de habilidades-->
                    <ion-icon name="chevron-down-outline" style="color: var(--color--text);"></ion-icon>
                </a>
            </div>
        </div>
    </header>
</template>


<style scoped>
header {
    padding-top: 10vh;
    width: 100%;
    min-height: 100vh;
    /* border: 2px solid blue; */
    background-image: url('/src/assets/images/pexels-lee-campbell-18167-115655.jpg');
    background-position: center;
    background-size: cover;
    color: var(--color--text);
    display: flex;
    align-items: center;
}

#header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
     /* cor preta com 50% de opacidade */
    z-index: 1; /* coloca o overlay atrás do conteúdo */

    background: var(--background--container);
}

#header > * {
    position: relative;
    z-index: 2; 
}

#container_content_header {
    width: 80vw;
    margin: auto;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3vw;
}

#box_text_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
}

h1 {
    font-size: 4vw;
}

h2 {
    font-size: 2vw;
    display: flex;
    align-items: center;
    gap: 15px;
}

#titleh2 {
    width: 100%;
}

#box_icons_social {
    width: 40%;
    /* border: 2px solid blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container_img_social {
    /* border: 2px solid red; */
    width: 50%;
    display: flex;
    justify-content: space-between;
    gap: 15px;
}
.container_img_social > a {
   width: 4vw;
   transition: all 0.3s;
}
.ion_icons_social {
    font-size: 3vw;
    cursor: pointer;
    transition: all 0.3s;
}
.ion_icons_social:hover {
    color: #4036FF !important;
    scale: 1.1;
}
.span_box_icons_social {
    width: 100px;
    height: 3px;
    background-color: #fff;
}

#icon_bottom {
    font-size: 3vw;
    margin-top: 20px;
    cursor: pointer;
}
</style>