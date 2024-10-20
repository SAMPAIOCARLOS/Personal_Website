<script>
import NavBar from './NavBar.vue'

    export default {
        name: 'TheHeader',
        components: { NavBar },
        methods: {
            pass_event() {
                this.$emit("toggle_theme")
            }
        },
        props: {
            btn_value: {type: Boolean, required: true}
        }
    }
</script>


<template>

    <NavBar @pass_event="pass_event" :btn_value="btn_value"/>

    <!-- <header id="header">

    </header> -->
</template>


<style scoped>
header {
    padding-top: 10vh;
    width: 100%;
    min-height: 100vh;
    border: 2px solid blue;
    background-image: url('/src/assets/images/pexels-lee-campbell-18167-115655.jpg');
    background-position: center;
    background-size: cover;
    
}

#header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.626); /* cor preta com 50% de opacidade */
    z-index: 1; /* coloca o overlay atrás do conteúdo */
}

#header > * {
    position: relative;
    z-index: 2; 
}
</style>