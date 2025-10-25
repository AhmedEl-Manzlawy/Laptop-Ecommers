<template>
  <v-navigation-drawer
    app
    location="right"
    v-model="drawer"
    temporary
    :width="windowWidth <= 767 ? (windowWidth / 2)+100 : 500"
    style="z-index: 9999"
    class="cart-card"
  >
    <v-card elevation="0" class="">
      <v-card-text
        class="d-flex justify-space-between text-center mt-6 mt-md-0"
        style="font-size: 17px; font-weight: bold"
        >Shopping Cart <v-icon @click="drawer = false">mdi-close</v-icon></v-card-text
      >
      <v-card-text
        v-if="cartItems.length"
        class="py-0 d-flex justify-space-between text-center"
        style="color: #6f6f6f"
      >
        {{ cartItems.length }} Items
        <h3>
          <span style="color: #ffbd0ff5 ;font-size:12px;">Total Price : $ </span> {{ calcTotalFreeShippingPrice }}
        </h3></v-card-text
      >
      <v-card-text class="" style="color: #6f6f6f" v-if="!cartItems.length"
        >Free Shipping For All Orders Over $2000.00</v-card-text
      >
      <v-card-text class="py-0 text-center" style="color: #6f6f6f" v-if="!cartItems.length"
        >Your cart is empty</v-card-text
      >
      <div class="parent px-0 mt-6 position-relative mx-6" v-if="cartItems.length">
        <svg
          width="27px"
          height="27px"
          viewBox="0 0 1024 1024"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          :fill="
            parseInt((calcTotalFreeShippingPrice / 2000) * 100) < 50
              ? 'red'
              : parseInt((calcTotalFreeShippingPrice / 2000) * 100) < 80
              ? 'orange'
              : 'green'
          "
          stroke="parseInt((calcTotalFreeShippingPrice / 2000) * 100) <50 ? 'red':parseInt((calcTotalFreeShippingPrice / 2000) * 100)<80?'orange':'green'"
          :style="`
            position: absolute;
            bottom: 50%;
            z-index: 1;
            left: calc(${
              parseInt((calcTotalFreeShippingPrice / 2000) * 100) <= 100
                ? parseInt((calcTotalFreeShippingPrice / 2000) * 100)
                : 100
            }% - 27px);
            transition: 0.15s all ease-in-out;
          `"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M458.9 434.6c0 157-89.1 221.3-199 221.3s-199-64.3-199-221.3 199-410.2 199-410.2 199 253.2 199 410.2z"
              fill="#efe70b"
            ></path>
            <path
              d="M259.9 665.9c-60.6 0-111.7-18.9-147.7-54.7C71.6 570.9 51 511.5 51 434.6c0-66.9 33.9-157.5 100.9-269.1C201.3 83 251.5 18.9 252 18.3c1.9-2.4 4.8-3.8 7.9-3.8s6 1.4 7.9 3.8c0.5 0.6 50.7 64.7 100.2 147.3 67 111.6 100.9 202.2 100.9 269.1 0 76.9-20.6 136.3-61.2 176.6-36.2 35.7-87.2 54.6-147.8 54.6z m0-625c-15.9 21.2-53.7 72.8-91 135.1C124.2 250.5 71 355.9 71 434.6c0 71.4 18.6 126 55.3 162.4 32.2 32 78.5 48.9 133.6 48.9S361.3 629 393.5 597c36.7-36.4 55.3-91 55.3-162.4 0-78.8-53.3-184.2-98.1-258.8-37.2-62.2-74.9-113.8-90.8-134.9z"
              fill=""
            ></path>
            <path
              d="M259.9 771.1c-5.5 0-10-4.5-10-10V173.3c0-5.5 4.5-10 10-10s10 4.5 10 10v587.8c0 5.6-4.5 10-10 10z"
              fill=""
            ></path>
            <path
              d="M259.9 401.3c-2.7 0-5.5-1.1-7.4-3.3L150 283.9c-3.7-4.1-3.4-10.4 0.8-14.1 4.1-3.7 10.4-3.4 14.1 0.8l102.5 114.1c3.7 4.1 3.4 10.4-0.8 14.1-1.9 1.6-4.3 2.5-6.7 2.5zM231.4 518.5c-2.8 0-5.6-1.2-7.6-3.5L145 422.5c-3.6-4.2-3.1-10.5 1.1-14.1 4.2-3.6 10.5-3.1 14.1 1.1L239 502c3.6 4.2 3.1 10.5-1.1 14.1-1.9 1.6-4.2 2.4-6.5 2.4zM259.9 287.2c-2.6 0-5.1-1-7.1-2.9-3.9-3.9-3.9-10.2 0-14.1l69.4-69.4c3.9-3.9 10.2-3.9 14.1 0s3.9 10.2 0 14.1L267 284.3c-2 1.9-4.6 2.9-7.1 2.9zM266.6 491.7c-2.7 0-5.5-1.1-7.4-3.3-3.7-4.1-3.3-10.4 0.8-14.1l101.2-90.8c4.1-3.7 10.4-3.3 14.1 0.8 3.7 4.1 3.3 10.4-0.8 14.1l-101.2 90.8c-1.9 1.7-4.3 2.5-6.7 2.5z"
              fill=""
            ></path>
            <path
              d="M798.1 588.8h-67c-8.6-18.7-77.5-157.9-278.4-157.8-149.3 0-437.2 156.9-424.3 194.2 6.6 19.2 19.4 30.3 23.7 80.7 3.1 35.8 10.4 80.1 10.4 80.1 0 55.9 45.3 101.3 101.3 101.3H998v-133c0-110.5-89.5-165.5-199.9-165.5z"
              fill="#ecfd08"
            ></path>
            <path
              d="M998 897.2H163.7c-61.1 0-110.8-49.5-111.3-110.4-1-6.2-7.5-46.9-10.4-80.1-3-35.1-10.1-49.8-16.4-62.7-2.5-5.1-4.8-10-6.8-15.6-2.3-6.8-0.5-14.5 5.6-23 19.8-27.8 91-73.2 177.3-113 98.4-45.4 189.8-71.5 250.8-71.5h0.2c189.9 0 265.8 121 284.5 157.8h60.7c59.2 0 110.2 15 147.4 43.4 40.9 31.2 62.5 76.8 62.5 132.1v133c0.2 5.5-4.2 10-9.8 10zM38 622.4c1.6 4.4 3.5 8.4 5.7 13 6.7 13.7 15 30.9 18.3 69.7 3 35 10.2 78.9 10.3 79.3 0.1 0.5 0.1 1.1 0.1 1.6 0 50.3 40.9 91.3 91.3 91.3H988v-123c0-48.8-18.9-89-54.6-116.2-33.7-25.7-80.5-39.3-135.3-39.3h-67c-3.9 0-7.4-2.3-9.1-5.8-11.7-25.4-79.8-152-269.2-152h-0.2c-62.1 0-159.9 29.5-261.7 78.7-42.6 20.6-81.8 43-110.5 62.9-38.2 26.7-42 38.1-42.4 39.8z m0 0.2z"
              fill=""
            ></path>
            <path
              d="M452.7 430.9c-63.5 0-143 31.8-221.6 71.8l61 160.6h370.2l68.9-74.6c-8.7-18.6-77.5-157.9-278.5-157.8z"
              fill="#80F9E7"
            ></path>
            <path
              d="M662.3 673.4H292.1c-4.2 0-7.9-2.6-9.3-6.5l-61-160.6c-1.8-4.8 0.3-10.1 4.8-12.5 97.6-49.7 169.5-72.9 226.2-72.9h0.2c201.6 0 274.7 136.3 287.3 163.7 1.7 3.7 1 8-1.7 11l-68.9 74.6c-2 2-4.6 3.2-7.4 3.2z m-363.3-20h358.9l61.3-66.4c-17.9-34.9-88.8-146.1-266.3-146.1h-0.2c-51.2 0-119.6 21.8-209.1 66.7L299 653.4z m153.7-222.5z"
              fill=""
            ></path>
            <path d="M477.2 430.9v232.5" fill="#80F9E7"></path>
            <path
              d="M477.2 673.4c-5.5 0-10-4.5-10-10V430.9c0-5.5 4.5-10 10-10s10 4.5 10 10v232.5c0 5.5-4.5 10-10 10z"
              fill=""
            ></path>
            <path
              d="M274.8 887.2m-103.3 0a103.3 103.3 0 1 0 206.6 0 103.3 103.3 0 1 0-206.6 0Z"
              fill="#B6B7B7"
            ></path>
            <path
              d="M274.8 1000.5c-62.5 0-113.3-50.8-113.3-113.3s50.8-113.3 113.3-113.3 113.3 50.8 113.3 113.3-50.8 113.3-113.3 113.3z m0-206.6c-51.5 0-93.3 41.9-93.3 93.3 0 51.5 41.9 93.3 93.3 93.3 51.5 0 93.3-41.9 93.3-93.3s-41.8-93.3-93.3-93.3z"
              fill=""
            ></path>
            <path
              d="M765.6 887.2m-103.3 0a103.3 103.3 0 1 0 206.6 0 103.3 103.3 0 1 0-206.6 0Z"
              fill="#B6B7B7"
            ></path>
            <path
              d="M765.6 1000.5c-62.5 0-113.3-50.8-113.3-113.3s50.8-113.3 113.3-113.3 113.3 50.8 113.3 113.3-50.8 113.3-113.3 113.3z m0-206.6c-51.5 0-93.3 41.9-93.3 93.3 0 51.5 41.9 93.3 93.3 93.3s93.3-41.9 93.3-93.3-41.9-93.3-93.3-93.3z"
              fill=""
            ></path>
            <path
              d="M443.5 1009.1H59.6c-5.5 0-10-4.5-10-10s4.5-10 10-10h383.9c5.5 0 10 4.5 10 10s-4.5 10-10 10zM990.2 1009.1H606.3c-5.5 0-10-4.5-10-10s4.5-10 10-10h383.9c5.5 0 10 4.5 10 10s-4.5 10-10 10z"
              fill=""
            ></path>
          </g>
        </svg>
        <v-progress-linear
          height="5"
          :model-value="
            parseInt((calcTotalFreeShippingPrice / 2000) * 100) <= 100
              ? parseInt((calcTotalFreeShippingPrice / 2000) * 100)
              : 100
          "
          :color="
            parseInt((calcTotalFreeShippingPrice / 2000) * 100) < 50
              ? 'red'
              : parseInt((calcTotalFreeShippingPrice / 2000) * 100) < 80
              ? 'orange'
              : 'green'
          "
          striped
          class="ma-0"
        >
        </v-progress-linear>
      </div>
      <v-card-text
        style="color: #6f6f6f"
        v-if="cartItems.length && calcTotalFreeShippingPrice < 2000.0"
        >Only ${{ 2000 - calcTotalFreeShippingPrice }} Away From Free Shipping
      </v-card-text>
      <v-card-text
        style="color: green"
        v-if="cartItems.length && calcTotalFreeShippingPrice > 2000.0"
        >Your order completely free</v-card-text
      >
      <v-card-actions
        class="d-flex align-center text-center justify-center"
        v-if="!cartItems.length"
      >
        <v-btn
          elevation="0"
          style="text-transform: none; border-radius: 20px; background-color: #ffbd0ff5"
          class="w-75"
          density="compact"
          height="40"
          width="80"
          @click="drawer = false"
          >Continue Shopping</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-card
      elevation="0"
      max-height="300"
      style="overflow-y: auto; padding-top: 0"
      class="items-card"
    >
      <v-container class="pa-0">
        <v-row
          v-for="cartItem in cartItems"
          :key="cartItem.id"
          class="mx-4 my-2 align-center"
          elevation="0"
        >
          <v-col cols="12" md="4" class="pa-0 ma-0 px-1 text-center position-relative">
            <img :src="cartItem.thumbnail" alt="" class="w-100 h-100 " />
            <v-card-text
              style="
                position: absolute;
                top: -5px;
                right: -5px;
                background-color: red;
                color: white;
                padding: 4px 4px;
                border-radius: 6px;
                font-size: 11px;
              "
              >{{ cartItem.price }}</v-card-text
            >
          </v-col>
          <v-col cols="12" md="8">
            <v-card-title
            class="card-title"
              style="color: #6f6f6f; white-space: pre-wrap; line-height: 1.2"
              >{{ cartItem.title }}</v-card-title
            >
            <v-card-subtitle class="subtitle">({{ cartItem.brand }})</v-card-subtitle>
            <v-card-subtitle class="subtitle">Only have {{ cartItem.stock }}In Stock</v-card-subtitle>
            <v-card-text
              v-if="cartItem.price * cartItem.quantity > 2000.0"
              style="color: #6f6f6f; font-size: 12px; line-height: 1.2; font-weight: bold"
              class="py-2"
            >
              <span class="text-red">
                ${{ (cartItem.price * cartItem.quantity * cartItem.discountPercentage).toFixed(2) }}
              </span>
            </v-card-text>
            <v-card-text
              v-else
              style="color: #6f6f6f; font-size: 12px; line-height: 1.2; font-weight: bold"
              class="py-2"
              ><span class="text-red">
                $ {{ (cartItem.price * cartItem.quantity).toFixed(2) }}</span
              ></v-card-text
            >

            <div class="btn-container d-flex justify-space-between align-center ">
              <div
                class="counter mx-md-4 mx-0"
                style="border-radius: 30px; border: 1px solid black; width: fit-content"
              >
                <v-icon
                  size="16"
                  @click="
                    cartItem.quantity > 1
                      ? cartItem.quantity--
                      : (() => {
                          deleteItem(cartItem.id);
                          Emitter.emit('openSnackbar', {
                            text: `${cartItem.title} has been deleted`,
                            color: 'red',
                          });
                        })();
                    cartItem.stock++;
                  "
                  >mdi-minus</v-icon
                >
                <input
                  type="number"
                  class="text-center py-1 px-0"
                  min="1"
                  :value="cartItem.quantity"
                  style="border: none; outline: none; width: 50px; font-size: 14px"
                />
                <v-icon
                  size="16"
                  @click="
                    cartItem.quantity++;
                    cartItem.stock--;
                  "
                  >mdi-plus</v-icon
                >
              </div>
              <v-icon
                style="background-color: #ffbd0ff5"
                @click="
                  deleteItem(cartItem.id);
                  Emitter.emit('openSnackbar', {
                    text: `${cartItem.title} has been deleted`,
                    color: 'red',
                  });
                "
                >mdi-close</v-icon
              >
            </div>
          </v-col>

          <v-divider inset></v-divider>
        </v-row>
      </v-container>
    </v-card>
    <v-card elevation="0" v-if="cartItems.length">
      <v-card-actions class="d-flex flex-column align-center ga-3 mt-8">
        <v-btn
          elevation="0"
          style="text-transform: none; border-radius: 20px; background-color: #ffbd0ff5"
          class="w-75"
          density="compact"
          height="40"
          width="80"
          variant="elevated"
          @click="$router.push({ path: '/products/product-cart' })"
          >View Cart</v-btn
        >
        <v-btn
          elevation="0"
          variant="outlined"
          style="text-transform: none; border-radius: 20px"
          class="w-75"
          density="compact"
          height="40"
          width="80"
          @click="toCheckOut"
          >Check Out</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import { useCartStore } from "@/stores/useCart";
import { mapActions, mapState } from "pinia";
import { icons } from "@/data/cartSVG";

export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
    icons,
  }),
  props: {
    windowWidth: {
      type: Number,
    },
  },
  methods: {
    ...mapActions(useCartStore, ["loadCartItem", "deleteItem", "saveCartItem"]),
    toCheckOut() {
      this.saveCartItem();
      this.$router.push({ path: "/checkout" });
    },
  },
  computed: {
    ...mapState(useCartStore, ["cartItems"]),
    calcTotalFreeShippingPrice() {
      let total = 0;
      this.cartItems.forEach((product) => {
        total += Math.ceil(
          product.price * product.quantity * (1 - product.discountPercentage / 100)
        );
      });
      return total;
    },
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    }),
      this.loadCartItem();
  },
};
</script>

<style lang="scss">
.v-navigation-drawer__content,
.items-card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #ffbd0ff5;
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(177, 177, 177);
  }
}

@media (max-width: 767px) {
  .cart-card {
    .v-card-text {
      font-size:11px !important;
    }
    .card-title{
      font-size:14px !important;
    }
    .subtitle{
      font-size:11px !important;
    }
    .counter{
      width:85px !important
    }
    button{
      height: 30px !important;
      width: 140px !important;
      font-size:12px  !important;
    }
  }
}
</style>
