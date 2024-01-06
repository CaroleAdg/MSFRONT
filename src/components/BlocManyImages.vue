<template>
  <div class="blocmanyimages">
    <h2 class="title">Nos formules</h2>
    <div class="wrapper">
    <BlocImage v-for="composant in composants" :key="composant.identifiant"/>
  </div>
  </div>
  
</template>

<script>
import BlocImage from './BlocImage.vue'
export default {
  name: "BlocManyImages",
  components: {
    BlocImage
  },
  data() {
    return {
      composants: [
        {
          identifiant: 1},
        {
          identifiant: 2},
          {
          identifiant: 3},
      ]
    }
  }
}
</script>

<style>
.wrapper{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>