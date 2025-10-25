<template>
  <v-app-bar class="fixed-nav d-none d-md-block">
      <v-container fluid class="bg-blue d-flex align-center justify-center">
        <v-row>
          <v-col cols="2" class="d-flex align-center justify-center">
            <div class="title cursor-pointer" @click="$router.push({path :'/'})">
              <h1>
                <i>Lap<span style="color: #e9b028; text-decoration: underline">Top+</span></i>
              </h1>
            </div>
          </v-col>
          <v-col cols="8" class="d-flex align-center justify-center">
            <div class="content">
              <ul class="links d-flex ga-13" style="list-style: none">
                <li v-for="cat in categories" :key="cat.title">
                  <RouterLink
                    :to="{ name: 'products-category', params:{category :cat.route} }"
                    class="text-decoration-none text-white"
                    >{{ cat.title }}</RouterLink
                  >
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="2" class="d-flex justify-end align-center ga-5 text-black">
            <v-icon>mdi-magnify</v-icon>
            <div
              class="wishlist d-flex flex-column align-center"
              :style="`color: black; cursor: pointer ; pointer-events:${
              $route.name == 'products-cart'? 'none':'unset'}`"
              @click="openCart"
            >
              <v-badge location="right top" :content="cartItems.length" color="#e9b028" offset-x="-10"></v-badge>
              <v-icon>mdi-cart-outline</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
</template>

<script>
import { useCartStore } from "@/stores/useCart";
import { useProductStore } from "@/stores/useProductStore";
import { mapState } from "pinia";

export default {
  inject: ["Emitter"],
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    }
  },
  computed: {
    ...mapState(useProductStore, ["categories"]),...mapState(useCartStore , ['cartItems'])
  },
};
</script>

<style lang="scss" scoped></style>
