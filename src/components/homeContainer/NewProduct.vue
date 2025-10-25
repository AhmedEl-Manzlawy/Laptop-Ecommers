<template>
  <div class="py-9">
    <div class="new-products d-flex justify-center align-center px-6">
      <h2 class="text-center flex-grow-1">New Products</h2>
      <RouterLink to="/products/laptops">Show All >></RouterLink>
    </div>
    <v-container fluid class="py-6">
      <v-row>
        <v-col v-if="!store.laptopsProduct.length" cols="7">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                class="mx-auto border"
                max-width="300"
                type="card-avatar, actions"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="8" lg="9" class="order-1 order-md-0" v-else>
          <Swiper
            slides-per-view="3"
             :space-between="10"
            :autoplay="{ delay: 2000, pauseOnMouseEnter: true, disableOnInteraction: false }"
            :loop="true"
            :modules="modules"
            :breakpoints="breakpoints"
          >
            <swiper-slide v-for="product in store.laptopsProduct" :key="product.id">
              <v-card class="pb-0 mb-1" max-width="374" elevation="0">
                <v-badge
                  location="top right"
                  :content="`${product.discountPercentage} %`"
                  color="red"
                  offset-x="-20"
                  offset-y="50"
                ></v-badge>
                <v-hover v-slot="{ isHovering, props }">
                  <div style="height: 200px; position: relative">
                    <v-img
                      v-bind="props"
                      :style="`height : 100% ; transition: 0.5s all ease-in-out ; scale : ${
                        isHovering ? 1.1 : 1
                      }; cursor:pointer`"
                      :src="shownItem[product.title] ? shownItem[product.title] : product.thumbnail"
                    ></v-img>
                    <v-btn
                      class="bg-white qickView-btn"
                      width="60"
                      height="25"
                      varient="outlined"
                      style="
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        transition: 0.2 all ease-in-out;
                        border-radius: 30px;
                        font-size: 12px;
                        opacity: 0;
                      "
                      @click="openQuickView(product)"
                      >Quick View</v-btn
                    >
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
                    {{ Math.ceil(product.price - product.price * 0.28) }}
                    <span style="color: rgb(179 179 173 / 34%); text-decoration: line-through">{{
                      product.price
                    }}</span>
                  </div>

                  <div>{{ product.description.split("").splice(0, 50).join("") }} ....</div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>
                <v-btn-toggle
                  v-model="shownItem[product.title]"
                  style="width: 100%"
                  class="align-center justify-space-evenly"
                  mandatory
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
                    @click="$router.push({ name: 'products-details', params: { id: product.id } })"
                    class="px-2 py-1 choose-btn"
                  >
                    See Details
                  </v-btn>
                  <v-btn elevation="0" class="px-2 py-1 cart-btn" @click="addTocart(product)">
                    Add To Cart
                  </v-btn>
                </div>
              </v-card>
            </swiper-slide>
          </Swiper></v-col
        >
        <v-col cols="12"  md="4" lg="3" class="img-offer">
          <img src="../../img/offers.jpg" width="100%" height="100%" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/useCart";
import { useProductStore } from "@/stores/useProductStore";
import { inject, onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Autoplay } from "swiper";
const Emitter = inject("Emitter");
const cartStore = useCartStore();
const loading = ref(false);
const quantity = ref(1);
const modules = [ Autoplay];
function openQuickView(product) {
  Emitter.emit("openQuickView", product);
}
const store = useProductStore();
const shownItem = ref({});
const breakpoints = ref({
  0: {
    slidesPerView: 1,
  },
  580: {
    slidesPerView: 2,
  },
  767: {
    slidesPerView: 3,
  },
  990: {
    slidesPerView: 4,
  },
});
function addTocart(item) {
  item.quantity = quantity.value;
  setTimeout(() => {
    loading.value = true;
    cartStore.addItem(item);
    Emitter.emit("openCart");
    Emitter.emit("openSnackbar", item.title);
  }, 1000);
}
onMounted(async () => {
  await store.getAllProducts();
});
</script>

<style scoped>
.qickView-btn:hover {
  opacity: 1 !important;
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

@media (max-width:767px) {
  .img-offer{
    height:300px;
  }
}
</style>
