<template>
  <div class="details py-12">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center">
          <img
            style="width: 80%"
            :src="tab ? tab : productDetails.thumbnail"
            alt=""
            height="400"
            v-if="!loading"
          />
          <v-skeleton-loader v-if="loading" type="image ,image ,image"> </v-skeleton-loader>
          <v-tabs center-active height="70" class="mt-10" v-model="tab">
            <v-tab v-for="(img, i) in productDetails.images" :key="i" :value="img">
              <img :src="img" alt="" width="30" height="30" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="12" md="6">
          <v-skeleton-loader v-if="loading" type="article , article , article"> </v-skeleton-loader>
          <v-card elevation="0" class="pa-0 pl-6" v-if="!loading">
            <v-card-title style="font-size: 15px; font-weight: 700" class="px-0"
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
            <v-card-text style="font-size: 13px; color: grey" class="px-0"
              >Brand : {{ productDetails.brand }}</v-card-text
            >
            <v-card-text style="font-size: 13px; color: grey" class="px-0"
              >Avaliavlity : {{ productDetails.availabilityStatus }}</v-card-text
            >
            <v-card-text class="pa-0 text-subtitle-1">
              <span class="text-black font-weight-bold">Price : From </span>
              $<span style="color: rgb(179 179 173 / 34%); text-decoration: line-through">{{
                productDetails.price
              }}</span>
              To $
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

            <v-card-actions class="mt-7 w-100">
              <v-btn
                class="text-white w-75"
                height="45"
                variant="outlined"
                density="compact"
                style="text-transform: none; border-radius: 30px; background-color: rgb(34, 34, 34)"
                @click="addTocart(productDetails)"
                :loading="btnLoading"
                >Add To Cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col cols="12">
          <h3 class="px-5 my-0">Reviews</h3>
        </v-col>
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="(review, index) in productDetails.reviews"
          :key="index"
          class="px-5"
        >
          <v-card elevation="1">
            <v-card-title>
              {{ review.reviewerName }}
            </v-card-title>
            <v-card-subtitle>
              {{ review.reviewerEmail }}
            </v-card-subtitle>
            <v-card-text>
              {{ review.comment }}
            </v-card-text>
            <v-rating
              v-model="review.rating"
              color="amber"
              density="compact"
              size="x-small"
              half-increments
              readonly
              class="px-4"
            ></v-rating>
            <v-card-text>
              {{ review.date }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/useCart";
import { useProductStore } from "@/stores/useProductStore";
import { mapActions, mapState } from "pinia";

export default {
  inject: ["Emitter"],
  data: () => ({
    tab: "",
    quantity: 1,
    loading: false,
    btnLoading: false,
  }),
  computed: {
    ...mapState(useProductStore, ["productDetails"]),
  },

  methods: {
    ...mapActions(useProductStore, ["getProductDetails"]),
    ...mapActions(useCartStore, ["addItem"]),
    addTocart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("openCart");
        this.dialog = false;
      }, 2000);
    },
  },
  async beforeMount() {
    this.loading = true;
    await this.getProductDetails(this.$route.params.id);
    this.loading = false;
  },
};
</script>

<style scoped></style>
