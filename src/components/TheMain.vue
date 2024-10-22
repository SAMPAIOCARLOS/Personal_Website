<script>
import Skills from './Skills.vue'
export default {
    name: 'TheMain',
    components: { Skills }
    
}
</script>

<template>
    <main>

        <Skills />

    </main>
</template>

<style scoped>
main {
    width: 100%;
    min-height: 100vh;
    border: 2px solid blue;
}
</style>