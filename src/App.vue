
<template>
  <app-layout>
    <router-view></router-view>
    <QuickView />
    <v-snackbar
      v-model="snackbar"
      location="bottom left"
      :timeout="5000"
      :color="snackbarColor"
      class="elevation-10"
    >
      {{ textTittle }} <span  v-if="! isObjects">has been Added Sussecfully</span>


    </v-snackbar>

  </app-layout>
</template>


<script setup>
import { RouterView } from "vue-router";
import AppLayout from "./components/global/AppLayout.vue";
import QuickView from "./components/global/QuickView.vue";
import { inject, onMounted, ref } from "vue";
const Emitter = inject('Emitter')
const snackbar=ref(false);
const textTittle = ref('')
const snackbarColor =ref('')
const isObjects = ref(true)


onMounted(()=>{
Emitter.on('openSnackbar',(data)=>{
  if(typeof data === 'object'){
  textTittle.value = data.text;
  snackbarColor.value = data.color|| 'danger'
  isObjects.value = true

  }else{
  textTittle.value = data;
  snackbarColor.value = 'success'
  isObjects.value = false
  }
  snackbar.value = true
})
})
</script>

<style lang="scss">
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
