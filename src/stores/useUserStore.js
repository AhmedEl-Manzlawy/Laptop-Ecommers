import axios from "axios";
import { defineStore } from "pinia";
import { useCartStore } from "./useCart";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [],
    user: null,
    error: null,
  }),
  getters:{
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async getAllUsers(){
      await axios.get("https://dummyjson.com/users")
        .then((res) => {
          this.users = res.data.users;
          console.log(this.users);
        })
        .catch((err) => console.error("Error fetching users:",err));

    },
    async loginUsers(email, password){
      if(this.users.length === 0){
        await this.getAllUsers();
      }
      const foundUser = this.users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        this.user = foundUser;
        this.error = null;
        this.saveUserInLocalStorage();
        const cartStore = useCartStore();
        cartStore.loadCartItem();

        return true;
      } else {
        this.error = "Invalid email or password.";
        return false;
      }
    },
    logoutUser(){
      this.user = null;
      localStorage.removeItem("user");
      const cartStore = useCartStore();
      cartStore.cartItems = [];
    },
    saveUserInLocalStorage(){
      localStorage.setItem("user", JSON.stringify(this.user));
    },

    loadUserFromLocalStorage(){
      const userData = localStorage.getItem("user");

      if (userData) {
        this.user = JSON.parse(userData);
      }
    },
    initializeAuth() {
      this.loadUserFromLocalStorage();
    }
  },
});
