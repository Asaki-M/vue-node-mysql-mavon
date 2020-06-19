<template>
  <div id="app">
	  <router-view></router-view>
  </div>
</template>

<script>
import edit from "./components/edit.vue"

export default {
  name: 'App'
}
</script>

<style scoped="scoped">
@import url("../public/reset.css");
</style>
