import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    flashProducts: [],
    products: [],
    allProduct: [],
    laptopsProduct: [],
    mobileProduct: [],
    productCategory: [],
    productDetails: [],
    categories: [
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Mobile-Accessories",
        route: "mobile-accessories",
      },
      {
        title: "Smart Phones",
        route: "smartphones",
      },
      {
        title: "Tablets",
        route: "tablets",
      },
      {
        title: "Sunglasses",
        route: "sunglasses",
      },
      {
        title: "Mens Watches",
        route: "mens-watches",
      },
    ],
    info: ["Your Account", "Become an Affiliate", "Shipping Rates", "Help"],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products/category/mobile-accessories")
        .then((res) => {
          this.flashProducts = res.data.products.slice(0, 15);
        })
        .catch((err) => console.log(err));
    },
    async getAllProducts() {
      await axios
        .get("https://dummyjson.com/products?limit=500")
        .then((res) => {
          this.products = res.data.products;
          this.allProduct = this.products.filter(
            (el) =>
              (el.category === "laptops" ||
                el.category === "smartphones" ||
                el.category === "mobile-accessories") &&
              el.discountPercentage >= 15.0
          );
          this.laptopsProduct = this.products.filter((el) => el.category === "laptops");
          this.mobileProduct = this.products.filter((el) => el.category === "smartphones");
        })
        .catch((err) => console.log(err));
    },
    async getProductByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.productCategory = res.data.products))
        .catch((err) => console.log(err));
    },
    async getProductDetails(id) {
      await axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => (this.productDetails = res.data))
        .catch((err) => console.log(err));
    },
  },
});
