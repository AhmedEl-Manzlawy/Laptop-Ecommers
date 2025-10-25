<template>
  <div class="categories">
    <div class="my-9 d-flex align-center justify-center">
      <h2>Categories</h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col
          cols="6" md="3" sm="4" lg="2"
          class="d-flex flex-column justify-center align-center"
          v-for="(cate, index) in categories"
          :key="index"
        >

            <v-hover v-slot="{ isHovering, props }">
               <div class="circle-wrapper">
              <v-img
              :src="cate.image"
              v-bind="props"
              :style="`transition : 0.5s all ease-in-out ; scale : ${isHovering ? 1.1 : 1}; cursor:pointer`"
              cover
              class="circle-img"
              ></v-img>
          </div>
            </v-hover>
          <p class="categ-title">{{ cate.title }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { categoriesArray } from "@/data/categoriesApi";
const categories = ref(categoriesArray);
</script>
<style lang="scss">
.categories {
  .circle-wrapper {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .circle-img {
      width: 80%;
      height: 80%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .categ-title {
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
    color: #333;
  }
}
</style>
