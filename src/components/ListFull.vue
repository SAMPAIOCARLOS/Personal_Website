<script>
import ButtonsTheme from './ButtonsTheme.vue'
import ListNav from './ListNav.vue'


export default {
    name: 'ListFull',
    components: { ListNav, ButtonsTheme },
    props: {
        data_path_NavBar: { type: Array, required: true },
        btn_value: { type: Boolean, required: true },
    },
    mounted() {
        const list_full = this.$refs.list_full
        this.$emit("ListFull_open", list_full)
    },
    methods: {
        pass_event() {
            this.$emit("pass_event")
        }
    }
}
</script>

<template>
    <div id="list_full" ref="list_full">
        <ListNav :data_path_NavBar="data_path_NavBar"/>


        <ButtonsTheme @toggle_theme="pass_event" :btn_value="btn_value"/>
    </div>
</template>

<style>

#list_full {
    width: 40%;
    height: 100%;
    position: fixed;
    left: 100%;
    top: 0%;
    background-color: var(--background--white);
    z-index: 100;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-top-left-radius: 5vw;
    border-bottom-left-radius: 5vw;

}

#list_full.active {
    left: 60%;
}



@media(min-width: 1000px) {
    #list_full {
        display: none;
    }
    
}

@media(max-width: 800px) {
    #list_full {
        width: 70%;
        border-top-left-radius: 8;
        border-bottom-left-radius: 8;
    }

    #list_full.active {
        left: 30%;
    }
}

@media(max-width: 500px) {
    #list_full {
        width: 100%;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    #list_full.active {
        left: 0%;
    }
    
}
</style>