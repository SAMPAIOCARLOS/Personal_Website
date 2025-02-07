<script>
import NavBar from './components/NavBar.vue'

export default {
    name: 'App',
    components: { NavBar },
    data() {
        return {
            BodyElement: null,
            show_btn_theme: null,
            show_logoNavBar: null,
            show_iconScroll: null,
            theme: localStorage.getItem('theme')
        }
    },
    mounted() {
        this.BodyElement = document.body;
        if (this.theme === 'light') {
            this.BodyElement.classList.add('theme_Light');
            this.show_btn_theme = true;
            this.show_logoNavBar = true;
            this.show_iconScroll = true;
        }
    },
    methods: {
        toggle_theme() {
            this.BodyElement.classList.toggle("theme_Light");
            if(this.BodyElement.classList.contains("theme_Light")) {
                this.show_btn_theme = true;
                this.show_logoNavBar = true;
                this.show_iconScroll = true;
                localStorage.setItem('theme', 'light');
            } else {
                this.show_btn_theme = false;
                this.show_logoNavBar = false;
                this.show_iconScroll = false;
                localStorage.setItem('theme', 'dark');
            }
        }
    }
}
</script>

<template>
    <NavBar 
        @pass_eventToggle_theme="toggle_theme" 
        :show_btn_theme="show_btn_theme" 
        :show_logoNavBar="show_logoNavBar"
    />
    
    <router-view 
        @pass_eventToggle_theme="toggle_theme"
        :show_btn_theme="show_btn_theme"
        :show_logoNavBar="show_logoNavBar"
        :show_iconScroll="show_iconScroll"
    />
</template>

<style scoped>

</style>
