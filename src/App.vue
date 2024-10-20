<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: { TheHeader },
  data() {
    return {
      BodyElement: null,
      btn_value: null,
      theme: localStorage.getItem('theme')
    }
  },
  mounted() {
    this.BodyElement = document.body

    if (this.theme === 'light') {
      this.BodyElement.classList.add('theme_Light')
      this.btn_value = true
    }

  },
  methods: {
    toggle_theme() {

      this.BodyElement.classList.toggle("theme_Light")

      if(this.BodyElement.classList.contains("theme_Light")) {
        console.log("dark")
        this.btn_value = true

        localStorage.setItem('theme', 'light')
      } else {
        console.log("light")
        this.btn_value = false

        localStorage.setItem('theme', 'dark')
      }
    }
  }
}
</script>

<template>
  <TheHeader @toggle_theme="toggle_theme" :btn_value="btn_value"/>
</template>

<style scoped>

</style>
