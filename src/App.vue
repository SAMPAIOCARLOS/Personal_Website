<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: { HelloWorld },
  data() {
    return {
      texto: 'carlos'
    }
  }
}
</script>

<template>

  <HelloWorld :msg="texto" />
</template>

<style scoped>

</style>
