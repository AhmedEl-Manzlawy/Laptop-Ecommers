<template>
  <div class="details py-0">
    <v-dialog v-model="dialog" max-width="800"  ><v-icon
        style="
          background-color: black;
          color: white;
          position: absolute;
          top: -10px;
          right: -10px;
          padding: 15px;
          z-index: 20;
        "
        @click="dialog = false"
        >mdi-close</v-icon
      >
     <v-card class="bg-white items-card">

      <v-container fluid class="bg-white">
        <v-row>
          <v-col cols="12" sm="6" class="d-flex flex-column justify-center align-center">
            <img
              style="width: 90%"
              :src="tab ? tab : productDetails.thumbnail"
              alt=""
              height="300"
              v-if="!loading"
            />
            <v-skeleton-loader v-if="loading" type="avatar"> </v-skeleton-loader>
            <v-tabs center-active height="70" class="mt-10" v-model="tab">
              <v-tab v-for="(img, i) in productDetails.images" :key="i" :value="img">
                <img :src="img" alt="" width="30" height="30" />
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="12" sm="6">
            <v-skeleton-loader v-if="loading" type="article , article , article">
            </v-skeleton-loader>
            <v-card elevation="0" class="pa-0 pl-6" v-if="!loading">
              <v-card-title
                style="font-size: 15px; white-space: pre-wrap; font-weight: 700"
                class="px-0"
                >({{ productDetails.title }}) sample - {{ productDetails.category }} For Sale
              </v-card-title>
              <div class="d-flex align-center text-center">
                <v-rating
                  v-model="productDetails.rating"
                  color="amber"
                  density="compact"
                  size="x-small"
                  half-increments
                  readonly
                ></v-rating>

                <div class="text-grey ms-4" style="font-size: 12px">
                  Stok : {{ productDetails.stock }}
                </div>
              </div>

              <v-card-text style="font-size: 13px; color: grey" class="px-0">{{
                productDetails.description
              }}</v-card-text>
              <v-card-text style="font-size: 13px; color: grey" class="px-0 py-2"
                >Brand : {{ productDetails.brand }}</v-card-text
              >
              <v-card-text style="font-size: 13px; color: grey" class="px-0 py-2"
                >Avaliavlity : {{ productDetails.availabilityStatus }}</v-card-text
              >
              <v-card-text class="pa-0 text-subtitle-1">
                <span class="text-black font-weight-bold">Price : </span>$
                {{ Math.ceil(productDetails.price - productDetails.price * 0.2) }}
              </v-card-text>

              <!-- <v-divider class="mx-4 mx-5 my-3"></v-divider> -->
              <v-card-text class="pl-0 pt-0">Quantity : </v-card-text>
              <div
                class="counter"
                style="border-radius: 30px; border: 1px solid black; width: fit-content"
              >
                <v-icon size="22" @click="quantity > 1 ? quantity-- : false">mdi-minus</v-icon>
                <input
                  type="number"
                  class="text-center py-2"
                  min="1"
                  :value="quantity"
                  style="border: none; outline: none; width: 60px"
                />
                <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
              </div>

              <v-card-text
                >SubTotal ${{
                  Math.ceil(productDetails.price - productDetails.price * 0.2) * quantity
                }}</v-card-text
              >

              <v-card-actions class="mt-0 py-0 w-100">
                <v-btn
                  class="text-white w-75"
                  height="45"
                  variant="outlined"
                  density="compact"
                  style="
                    text-transform: none;
                    border-radius: 30px;
                    background-color: rgb(34, 34, 34);
                  "
                  @click="addTocart(productDetails)"
                  :loading="btnLoading"
                  >Add To Cart</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
     </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/useCart";
import { mapActions } from "pinia";
import { useDisplay } from "vuetify/lib/composables/display";

export default {
  inject: ["Emitter"],
  methods: {
    ...mapActions(useCartStore, ["addItem"]),
    addTocart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.Emitter.emit("openSnackbar", item.title);
        this.dialog = false;
      }, 1000);
    },
  },
  setup() {
    const { lgAndUp } = useDisplay();
    return { lgAndUp };
  },
  computed: {
    isLargeScreen() {
      return this.lgAndUp;
    },
  },
  data: () => ({
    tab: "",
    quantity: 1,
    loading: false,
    dialog: false,
    productDetails: "",
    btnLoading: false,
  }),
  mounted() {
    this.Emitter.on("openQuickView", (id) => {
      this.loading = true;
      this.dialog = true;
      this.productDetails = id;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
};
</script>

<style>
@media (max-width: 767px) {
  .img-responsive {
    height: 220px;
    width: 100%;
  }
  .dialog-scroll .v-card {
      max-height: 85vh;
    }
    .v-navigation-drawer__content,
.items-card {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: blue;
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(177, 177, 177);
  }
}

}
</style>
