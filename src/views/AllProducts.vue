<template>
  <div style="padding-top: 25px">
    <v-container >
      <v-row>
        <v-col v-if="!store.allProduct.length" cols="12">
          <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                class="mx-auto border"
                max-width="300"
                type="card-avatar, actions"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-else cols="12" lg="3" md="4" sm="6"  v-for="product in store.allProduct" :key="product.id">
          <v-card class="mx-auto my-5 pb-2" max-width="374" elevation="0">

            <v-badge
              location="top right"
              :content="`${product.discountPercentage.toFixed(1)} %`"
              color="red"
              offset-x="-20"
              offset-y="50"
            ></v-badge>
            <v-hover v-slot="{ isHovering, props }">
              <div style="height: 250px ; position: relative;" >
                <v-img
                  v-bind="props"
                  :style="`height : 100% ; transition: 0.5s all ease-in-out ; scale : ${
                    isHovering ? 1.1 : 1
                  }; cursor:pointer`"
                  :src="shownItem[product.title] ? shownItem[product.title] : product.thumbnail"
                ></v-img>
                <v-btn
                    class="bg-white qickView-btn"
                    width="90"
                    height="25"
                    varient="outlined"
                     style="position: absolute;
                     top:50%;
                     left:50%;
                     transform: translate(-50% , -50%);
                     transition: 0.2 all ease-in-out;
                     border-radius: 30px;
                     font-size: 12px;
                     opacity: 0;
                     "
                      @click="openQuickView(product)"
                     >Quick View</v-btn>
              </div>
            </v-hover>

            <v-card-item>
              <v-card-title>{{ product.title }}</v-card-title>
              <v-card-subtitle>{{ product.brand }}</v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
                style="display: flex; justify-content: space-between; align-items: center"
              >
                <v-rating
                  v-model="product.rating"
                  color="amber"
                  density="compact"
                  size="x-small"
                  half-increments
                  readonly
                ></v-rating>

                <div class="text-grey ms-4">{{ product.rating }}</div>
              </v-row>

              <div class="my-4 text-subtitle-1 text-red-accent-3">
                <span class="text-black font-weight-bold">Price : </span>$
                {{ Math.ceil(product.price - product.price * 0.2) }}
                <span style="color: rgb(179 179 173 / 34%); text-decoration: line-through">{{
                  product.price
                }}</span>
              </div>

              <div>{{ product.description.split("").splice(0, 110).join("") }} ....</div>
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>
            <v-btn-toggle
              v-model="shownItem[product.title]"
              style="width: 100%"
              class="align-center justify-space-evenly" mandatory
            >
              <v-btn
                v-for="(pic, i) in product.images"
                :key="i"
                :value="pic"
                size="x-small"
                style="margin-left: 5px; border-radius: 50%; border: 1px solid lightgray"
              >
                <img :src="pic" alt="pic" width="40" height="40" />
              </v-btn>
            </v-btn-toggle>
            <div class="my-5 d-flex align-center justify-space-evenly">
                  <v-btn
                    elevation="0"
                    class="px-6 py-1 choose-btn"
                    @click="$router.push({ name: 'products-details', params: { id: product.id } })"
                  >
                    See Details
                  </v-btn>
                  <v-btn
                    elevation="0"
                    class=" py-1 cart-btn"
                    @click="addTocart(product)"
                  >
                    Add To Cart
                  </v-btn>
                </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>

import { useCartStore } from "@/stores/useCart";
import { useProductStore } from '@/stores/useProductStore';
import { inject } from 'vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
const cartStore = useCartStore()
const loading = ref(false);
const quantity = ref(1)
const shownItem = ref({});
const store = useProductStore()
const Emitter = inject('Emitter');
function addTocart(item){
item.quantity = quantity.value
setTimeout(() => {
  loading.value = true;
  cartStore.addItem(item);
  Emitter.emit('openCart');
  Emitter.emit('openSnackbar',item.title)
}, 1000);
}
function openQuickView(id) {
  Emitter.emit("openQuickView", id);
}
onMounted(async() => {
  await store.getAllProducts();
});
</script>

<style scoped>
 .qickView-btn:hover{
    opacity: 0.8 !important;
  }
  .choose-btn {
  font-size: 12px;
  border: 1px solid lightgrey;
  text-transform: none;
  border-radius: 30px;
  transition: 0.3s ease;
}

.choose-btn:hover {
  background-color: rgb(51, 147, 250);
  color: white;
}

.cart-btn {
  font-size: 12px;
  border: 1px solid lightgrey;
  text-transform: none;
  border-radius: 30px;
  transition: 0.3s ease;
}

.cart-btn:hover {
  background-color: rgb(255, 200, 34);
  color: white;
}

  </style>
