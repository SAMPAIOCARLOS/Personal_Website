<script>
export default {
    name: 'ButtonsTheme',
    props: {
        btn_value: { type: Boolean, required: true }
    },
    methods: {
        toggle_theme() {
           this.$emit('toggle_theme')
        }
    }
}
</script>

<template>
    <button class="button" @click="toggle_theme" v-if="btn_value">
        <ion-icon name="sunny-outline"></ion-icon>
        Light mode
    </button>    

    <button class="button" @click="toggle_theme" v-else>
        <ion-icon name="moon-outline"></ion-icon>
        Dark mode
    </button> 
</template>

<style scoped>
button {
    width: 25%;
    font-size: 1.3vw;
    background-color: transparent;
    border: none;
    color: var(--color--text);
    display: flex;
    gap: 10px;
    cursor: pointer;
    /* border: 1px solid red; */
}

@media(max-width: 1000px) {
    button {
        width: 50%;
        font-size: 2vw;
        justify-content: center;
    }
}
@media(max-width: 800px) {
    button {
        width: 70%;
        font-size: 3vw;
    }
}

@media(max-width: 500px) {
    button {
        width: 70%;
        font-size: 4vw;
    }
}
</style>