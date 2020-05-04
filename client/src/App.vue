<template>
  <div id="app">
    
    <MyNav></MyNav>
    <router-view/>
  </div>
</template>

<script>
import MyNav from "@/components/Nav.vue";
import { mapActions } from 'vuex'

export default {
  components: {
    MyNav
  },
   methods:{
    ...mapActions(['signInFromSessionStorage'])
  },
  mounted(){
    this.signInFromSessionStorage()
}
}
</script>

<style lang="scss">

</style>