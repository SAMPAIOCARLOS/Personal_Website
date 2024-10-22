<script>
export default {
    name: 'ListNav',
    props: {
        data_path_NavBar: { type: Array, required: true },
        btn_value: { type: Boolean, required: true }
    },
    
}
</script>

<template>
    
    <ul id="list_nav">
        <li v-for="item_path_NavBar in data_path_NavBar" :key="item_path_NavBar">
            <a :href="item_path_NavBar.path">{{ item_path_NavBar.text_content }}</a>
        </li>
    </ul>

    <span id="bar"></span>
     

</template>

<style scoped>
#list_nav {
    display: flex;
    list-style: none;
    width: 70%;
    justify-content: space-between;
    /* border: 2px solid red; */
}
li {
    font-size: 1.3vw;
    margin-top: 3px;
    border-bottom: 3px solid transparent;
    transition: all 0.5s;
    padding: 0 10px;
    cursor: pointer;
}
li:hover {
    border-bottom: 3px solid #4036FF;
}
a {
    color: var(--color--text);
    text-decoration: none;
}

#bar {
    width: 3px;
    height: 8vh;
    background-color: #fff;
}


@media(max-width: 1000px) {
    #bar {
        display: none;
    }

    #list_nav {
        flex-direction: column;
        align-items: center;
        gap: 5vw;
    }

    li {
        font-size: 2vw;
    }
}

@media(max-width: 800px) {
    #list_nav {
        gap: 10vw;
    }
    li {
        font-size: 3vw;
    }
}

@media(max-width: 500px) {
    li {
        font-size: 4vw;
    }
}
</style>