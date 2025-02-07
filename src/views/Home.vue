<script>
import TheHeader from '../components/TheHeader.vue'
import TheMain from '../components/TheMain.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
    name: 'Home',
    components: { TheHeader, TheMain, TheFooter },
    props: {
        show_btn_theme: { type: Boolean, required: true },
        show_logoNavBar: { type: Boolean, required: true },
        show_iconScroll: { type: Boolean, required: true },
    },
    methods: {
        pass_eventToggle_theme() {
            this.$emit("pass_eventToggle_theme")
        }
    }
}
</script>

<template>
    <TheHeader 
        @pass_eventToggle_theme="pass_eventToggle_theme" 
        :show_btn_theme="show_btn_theme" 
        :show_logoNavBar="show_logoNavBar" 
        :show_iconScroll="show_iconScroll"
    />
    <TheMain />
    <TheFooter />
</template> 