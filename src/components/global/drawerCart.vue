<template>
  <v-navigation-drawer v-model="drawer" location="right">


  </v-navigation-drawer>
</template>

<script>
  export default {
    inject :['Emitter'],
    data :()=>({
      drawer : false
    })
    ,
    mounted(){
      this.Emitter.on('openCart',()=>{
        this.drawer = !this.drawer
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
