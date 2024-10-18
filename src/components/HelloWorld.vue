<script>
  export default {
    name: 'HelloWoeld',
    props: {
      msg: {type: String, required: true}
    }
  }

</script>

<template>
  <h1>{{ msg }}</h1>

  
</template>

<style scoped>

</style>
