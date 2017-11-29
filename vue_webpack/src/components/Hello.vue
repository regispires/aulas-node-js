<template>
  <div class="hello">
    <h1 v-bind:title="titulo" >{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Bem vindo a sua primeira app com Vue.js',
      titulo: 'UFC Quixadá'
    }
  }
}
</script>