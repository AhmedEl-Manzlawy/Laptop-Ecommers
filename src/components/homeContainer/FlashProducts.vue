<template>
  <div class="flashDeals pt-10">
    <div
      class="text-red ma-2 text-decoration-underline d-flex justify-space-between align-center px-3"
    >
      <h3>Flash Deals</h3>
      <RouterLink to="/all-product">Show All >></RouterLink>
    </div>

    <v-container fluid>
      <v-row>
        <v-col v-if="!store.flashProducts.length" cols="12">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                class="mx-auto border"
                max-width="300"
                type="card-avatar, actions"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-else>
          <Swiper
            slides-per-view="4"
            :navigation="{ prevIcon: '.prev-swiper', nextIcon: '.next-swiper' }"
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :space-between="10"
            :autoplay="{ delay: 2000,  pauseOnMouseEnter: true ,disableOnInteraction:false }"
            :loop=true
            :modules="modules"
            :breakpoints="breakpoints"
          >
            <swiper-slide v-for="product in store.flashProducts" :key="product.id">
              <v-card class="mx-auto my-12 pb-2" max-width="374" elevation="0">
                <v-badge
                  location="top right"
                  :content="`${product.discountPercentage} %`"
                  color="red"
                  offset-x="-20"
                  offset-y="50"
                ></v-badge>
                <v-hover v-slot="{ isHovering, props }">
                  <div class="hover-container" style="height: 250px; position: relative">
                    <v-img
                      v-bind="props"
                      :style="`height : 100% ; transition: 0.5s all ease-in-out ; scale : ${
                        isHovering ? 1.1 : 1
                      }; cursor:pointer ;`"
                      :src="shownItem[product.title] ? shownItem[product.title] : product.thumbnail"
                    ></v-img>
                    <v-btn
                    class="bg-black qickView-btn"
                    width="60"
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
                     color:white
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
                    <span class="font-weight-bold">{{ Math.ceil(product.price - product.price * 0.2) }} </span> &nbsp;
                    <span style="color: grey; text-decoration: line-through"> {{
                      product.price
                    }}</span>
                  </div>

                  <div>{{ product.description.slice(0, 110) }}...</div>

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
                    :loading="btnLoading[product.id]"
                  >
                    Add To Cart
                  </v-btn>
                </div>
              </v-card>
            </swiper-slide>

            <div class="swiper-pagination"></div>
            <div class="prev-swiper"></div>
            <div class="next-swiper"></div>
          </Swiper>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { useCartStore } from "@/stores/useCart";
import { useProductStore } from "@/stores/useProductStore";
import { Autoplay, Navigation, Pagination } from "swiper";
import { inject, onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

const store = useProductStore();
const cartStore = useCartStore()
const shownItem = ref({});
const modules = [Pagination, Navigation, Autoplay];
const Emitter = inject('Emitter');
const quantity = ref(1)
const btnLoading = ref({})
const breakpoints=ref({
  0:{
    slidesPerView:1
  },
  580:{
    slidesPerView:2
  },
  767:{
    slidesPerView:3
  },
  990:{
    slidesPerView:4
  },
})
function openQuickView(id) {
  Emitter.emit("openQuickView", id);
}
function addTocart(item){
item.quantity = quantity.value

  btnLoading.value[item.id]=true
setTimeout(() => {
  cartStore.addItem(item);
  btnLoading.value[item.id]=false
  Emitter.emit('openCart');
  Emitter.emit('openSnackbar',item.title)
}, 1000);
}
onMounted(async () => {
  await store.getProducts();
});
</script>


<style lang="scss">
.flashDeals {
  .swiper-button-prev,
  .swiper-button-next {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid rgb(46, 46, 46);
    margin-left: 10px;
    top: 45%;
    &::after {
      font-size: 15px;
      color: rgba(0, 0, 0, 0.497);
    }
    &:hover {
      background-color: rgb(51, 147, 250);
      &::after {
        color: white;
      }
    }
  }
  .qickView-btn:hover{
    opacity: 0.8 !important;
  }

  .choose-btn {
    font-size: 12px;
    border: 1px solid lightgrey;
    text-transform: none;
    border-radius: 30px;
    transition: 0.3s ease;

    &:hover {
      background-color: rgb(51, 147, 250);
      color: white;
    }
  }
  .cart-btn {
    font-size: 12px;
    border: 1px solid lightgrey;
    text-transform: none;
    border-radius: 30px;
    transition: 0.3s ease;

    &:hover {
      background-color: rgb(255, 200, 34);
      color: white;
    }
  }
}
</style>
