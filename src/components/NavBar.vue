<script>
import ButtonsTheme from './ButtonsTheme.vue'
import ListFull from './ListFull.vue'
import ListNav from './ListNav.vue'


    export default {
        name: 'NavBar',
        components: { ListNav, ListFull, ButtonsTheme },
        data() {
            return {
                data_path_NavBar: [
                    {id: 1, text_content: 'Inicio', path: '#header'},
                    {id: 2, text_content: 'Habilidades', path: '#'},
                    {id: 3, text_content: 'Projetos', path: '#'},
                    {id: 4, text_content: 'Contato', path: '#'}
                ],
                show_listFull: false,
                show_listNav: true,
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            }
        },
        props: {
            btn_value: { type: Boolean, required: true }
        },
        methods: {
            toggle_btn() {
                const hamburguer = this.$refs.hamburguer
                hamburguer.classList.toggle("active")

                if(hamburguer.classList.contains("active")) {
                    this.show_listFull = true
                } else {
                    this.show_listFull = false
                }
            },
            pass_event() {
                this.$emit("pass_event")
            },
            Open_listFull(container_listFull) {
                container_listFull.classList.add('active')
            },
            handleResize() {
                this.windowWidth = window.innerWidth;
                this.windowHeight = window.innerHeight;

                if(this.windowWidth < 1000) {
                    this.show_listNav = false
                } else {
                    this.show_listNav = true
                }
            }
        },
        mounted() {
            window.addEventListener('resize', this.handleResize);
                if(this.windowWidth < 1000) {
                    this.show_listNav = false
                } else {
                    this.show_listNav = true
                }
        }
    }
</script>


<template>
    <nav>
        <div id="container_center_navbar">
            <h1>CARLOS SAMPAIO | <span class="color_blue">DEV</span></h1>
            <div id="container_group_NavBar">
                
                <ListNav v-if="show_listNav" @toggle_theme="pass_event" :data_path_NavBar="data_path_NavBar" :btn_value="btn_value"/>

                <ButtonsTheme v-if="show_listNav" @toggle_theme="pass_event" :btn_value="btn_value"/>

                <div class="hamburguer" @click="toggle_btn" ref="hamburguer">
                    <span class="line-span"></span>
                    <span class="line-span"></span>
                    <span class="line-span"></span>
                </div>
                           
            </div>
        </div>

        <ListFull :data_path_NavBar="data_path_NavBar" :btn_value="btn_value" v-if="show_listFull" @ListFull_open="Open_listFull" @pass_event="pass_event"/>
    </nav>
</template>


<style scoped>
nav {
    border: 1px solid red;
    width: 100%;
    height: 10vh;
    position: fixed;
    background-color: var(--background--white);
    display: flex;
    justify-content: center;
    z-index: 100;
}
#container_center_navbar {
    width: 80%;
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h1 {
    color: var(--color--text);
    font-size: 1.5vw;
}
#container_group_NavBar {
    border: 2px solid blue;
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}





/*Config menu hamburguer*/

.hamburguer {
    display: none;
    flex-direction: column;
    gap: 5px;
    z-index: 1000;
}
/* .hamburguer.active {
    position: fixed;
    top: 3%;
    left: 90%;

    descomentar caso precise mover o botão de lugar apos add de class
} */

.line-span {
    width: 30px;
    height: 3px;
    border-radius: 10px;
    background-color: #ffffff;
    transition: 0.5s;
}











.hamburguer.active .line-span:nth-child(2) {
    opacity: 0;
    transition: 0.3s;
}
.hamburguer.active .line-span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    transition: 0.5s;
}
.hamburguer.active .line-span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
    transition: 0.5s;
}


.line-span:nth-child(1) {
    background-color: var(--color--text);
}
.line-span:nth-child(2) {
    background-color: var(--color--text);
}
.line-span:nth-child(3) {
    background-color: var(--color--text);
}

@media(max-width: 1500px) {
    h1 {
        font-size: 2.2vw;
    }
}

@media(max-width: 1000px) {
    .hamburguer {
        display: flex;
    }

    #container_group_NavBar {
        justify-content: flex-end;
        width: 50px;
    }
    h1 {
        font-size: 3.2vw;
    }

}

@media(max-width: 500px) {
    h1 {
        font-size: 4vw;
    }
}
</style>