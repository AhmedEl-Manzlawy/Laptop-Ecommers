<template>
  <div class="checkout">
    <v-container fluid class="ma-0 pa-0">
      <v-row style="min-height: 100vh; overflow: hidden;">
        <v-col cols="12" md="7" class="right-side order-1 order-md-0" style="height: 100vh; overflow-y: auto;">
          <v-card class="pl-16 pr-4 pt-16 pb-8" elevation="0">
            <v-card-text class="py-0">
              <span style="font-size: 20px; font-weight: bolder"
                ><i
                  >Lap<span style="color: #e9b028; text-decoration: underline">Top+</span></i
                ></span
              ><i style="font-weight: bold"> &&</i>
              <span style="font-weight: bold; text-decoration: underline">Tecnology Services</span>
            </v-card-text>
            <v-breadcrumbs :items="['Cart ', 'Check-Out']" style="font-size: 13px; color: #878787">
              <template v-slot:divider>
                <v-icon color="#648484">mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
            <v-card-text class="text-center text-grey-lighten-1">Express Checkout</v-card-text>
            <v-card-actions
              class="btn-container d-flex justify-space-between align-center ga-6 mb-5"
            >
              <v-btn
                density="compact"
                color="blue"
                variant="flat"
                style="font-size: 18px"
                class="flex-grow-1"
                height="45"
                >Shop
                <svg
                  version="1.1"
                  id="Icons"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 32 32"
                  xml:space="preserve"
                  width="25px"
                  height="25px"
                  fill="white"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      class="st0"
                      d="M9.7,4.3L5.5,23C5.2,24,6,25,7,25h5l1.6-6.4c0.2-0.9,1.1-1.6,2.1-1.6h3.2c3.6,0,6.7-2.5,7.5-6l0,0 c0.9-4.1-2.2-8-6.4-8h-8.6C10.5,3,9.9,3.5,9.7,4.3z"
                    ></path>
                    <path
                      class="st0"
                      d="M11.6,25L11,27.2c-0.2,0.9,0.5,1.7,1.4,1.7H17l1.4-5.5c0.2-0.8,1-1.4,1.9-1.4h2.9c3.3,0,6.1-2.2,6.8-5.2l0,0 c0.6-2.8-1-5.4-3.5-6.4"
                    ></path>
                  </g>
                </svg>
              </v-btn>
              <v-btn
                elevation="0"
                density="compact"
                variant="flat"
                color="black"
                style="font-size: 18px"
                class="flex-grow-1"
                height="45"
              >
                <svg
                  width="25px"
                  height="25px"
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>Google-color</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Color-" transform="translate(-401.000000, -860.000000)">
                        <g id="Google" transform="translate(401.000000, 860.000000)">
                          <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                          ></path>
                          <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                          ></path>
                          <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                Pay</v-btn
              >
            </v-card-actions>
            <v-card-title class="px-0" style="font-weight: bold; font-size: 16px; color: #5f5d5d">
              Shipping Address
            </v-card-title>
            <v-select label="Country /Region" :items="['Egypt', 'Oman', 'KSA', 'Libya']"></v-select>
            <div class="text-conatiner d-flex justify-space-between align-center">
              <v-text-field
                label="First name(optional)"
                class="pr-3"
                style="width: 40%"
              ></v-text-field>

              <v-text-field label="Last name" class="pl-3" style="width: 40%"></v-text-field>
            </div>
            <v-text-field label="Address"></v-text-field>
            <v-text-field label="Apartent , suite , etc,(optional)"></v-text-field>

            <div class="shipping-info d-flex justify-space-between align-center">
              <v-text-field label="City" class="pr-2" style="width: 30%"></v-text-field>
              <v-select
                label="Country /Region"
                :items="['Egypt', 'Oman', 'KSA', 'Libya']"
                class="pr-1 pl-1"
                style="width: 30%"
              ></v-select>
              <v-text-field label="Postal code" class="pl-2" style="width: 30%"></v-text-field>
            </div>
            <v-card-actions class="justify-end mt-6">
              <v-btn
                style="background-color: #2196f3; color: white; height: 55px"
                class="px-6"
                @click="dialog = true"
                >Submit shipping</v-btn
              >
            </v-card-actions>

            <v-divider lenght="100%" color="black"></v-divider>
            <v-divider lenght="100%" color="black"></v-divider>
            <v-card-text class="px-0 text-grey-darken-1 py-6" style="font-size: 11px"
              >All Rights reserved To @labtop information company</v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="12" md="5" class="ma-0 pa-0 left-side">
          <v-card
            elevation="0"
            color="#EEEEEE"
            width="100%"
            height="100%"
            style="overflow-y: auto; padding-top: 0"
            class="pl-4 pr-16 pt-16 pb-8"
          >
            <v-card-title class="py-0 my-0">Your card</v-card-title>
            <v-card elevation="0" color="transparent" class="items-card my-6"  max-height="340" style="overflow-y: auto; padding-top: 0">

              <v-card
                v-for="item in cartItems"
                :key="item.id"
                elevation="0"
                color="transparent"
                class="d-flex align-center justify-space-between py-2 mb-2 mx-10"
              >
                <v-badge :content="item.quantity" color="grey-darken-2">
                  <img
                    :src="item.thumbnail"
                    alt=""
                    height="50"
                    width="50"
                    style="border: 1px solid grey; border-radius: 10px"
                  />
                </v-badge>
                <div class="items flex-grow-1">
                  <v-card-title
                    class="py-0"
                    style="font-size: 14px; font-weight: bold; white-space: pre-wrap"
                    >({{ item.title }}) sample - {{ item.category }} For Sale
                  </v-card-title>
                  <v-card-subtitle style="font-size: 12px; color: #9b9898">{{
                    item.brand
                  }}</v-card-subtitle>
                </div>
                <v-card-text
                  class="py-0 flex-grow-0"
                  style="color: #696969; font-weight: bold; font-size: 12px"
                >
                  ${{ Math.ceil(item.price * item.quantity * (1 - item.discountPercentage / 100)) }}
                </v-card-text>
              </v-card>

            </v-card>

              <v-card elevation="0" color="transparent">
                <v-divider lenght="100$"></v-divider>
                <v-divider lenght="100$"></v-divider>
                <v-divider lenght="100$"></v-divider>
                <v-card-text
                  v-if="cartItems.length"
                  class="py-0 mx-10 mt-2 d-flex align-center justify-space-between"
                >
                  <span style="font-weight: bold; font-size: 14px; color: #5f5d5d">SubTotal</span>
                  <span style="color: #626262; font-weight: bold; font-size: 11px"
                    >${{ calcTotalFreeShippingPrice }}</span
                  >
                </v-card-text>
                <v-card-text
                  v-if="cartItems.length"
                  class="py-0 mx-10 mt-2 d-flex align-center justify-space-between"
                >
                  <span style="font-weight: bold; font-size: 12px; color: #5f5d5dad">Shipping</span>
                  <span style="color: #5f5d5dad; font-weight: bold; font-size: 10px">$20</span>
                </v-card-text>
                <v-card-text
                  v-if="cartItems.length"
                  class="py-0 mx-10 mt-2 d-flex align-center justify-space-between"
                >
                  <span style="font-weight: bold; font-size: 18px; color: black">Total</span>
                  <span style="color: black; font-weight: bold; font-size: 14px"
                    >${{ calcTotalFreeShippingPrice + 20 }}</span
                  >
                </v-card-text>
              </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <OrderSuccess :popup="dialog" v-if="dialog" @close_popup="dialog = false" />
  </div>
</template>

<script>
import OrderSuccess from "@/components/orderSuccess/OrderSuccess.vue";
import { useCartStore } from "@/stores/useCart";
import { mapState } from "pinia";

export default {
  components: {
    OrderSuccess,
  },
  data: () => ({
    dialog: false,
  }),
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
};
</script>

<style lang="scss" scoped>
.v-navigation-drawer__content,
.items-card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: lightskyblue;
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(177, 177, 177);
  }
}
.right-side {
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: #2196f3;
  }
  &::-webkit-scrollbar-track {
    width: 10px;
    background-color: rgb(177, 177, 177);
  }
}
</style>
