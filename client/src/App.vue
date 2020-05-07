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
    ...mapActions(['signInFromSessionStorage', 'startFetchingReceivedFriendRequests', 'stopFetchingReceivedFriendRequests', 'fetchFriends'])
  },
  mounted(){
    this.signInFromSessionStorage()
      this.fetchFriends()
    this.startFetchingReceivedFriendRequests()
  },
  beforeDestroy(){
    this.stopFetchingReceivedFriendRequests()
}
}
</script>

<style lang="scss">

</style>