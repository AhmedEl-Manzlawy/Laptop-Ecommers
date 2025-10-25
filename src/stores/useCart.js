import router from "@/router";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addItem(item) {
      const isLoggedin = !!localStorage.getItem("user");
      if (!isLoggedin) {
        router.push({ path: '/login' });
        return;
      }

      let exist = false;
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id === item.id) {
          this.cartItems[i].quantity += item.quantity;
          exist = true;
          break;
        }
      }

      if (!exist) {
        // kda malosh ay refrance fe ay hettaaaa
        this.cartItems.push(JSON.parse(JSON.stringify(item)));
      }
      this.saveCartItem();
    },
    deleteItem(id) {
      this.cartItems = this.cartItems.filter((i) => i.id !== id);
      this.saveCartItem();
    },
    updateQuantity(id, quantity) {
      const item = this.cartItems.find((i) => i.id === id);
      if (item) {
        item.quantity = quantity;
        this.saveCartItem();
      }
    },
    saveCartItem() {

      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        localStorage.setItem(`cart-value-${user.id}`, JSON.stringify(this.cartItems));
      }
    },
    loadCartItem() {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        const saved = localStorage.getItem(`cart-value-${user.id}`);
        if (saved) {
          this.cartItems = JSON.parse(saved);
        } else {
          this.cartItems = [];
        }
      }
    },
    resetCartItem(){
      this.cartItems =[];
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        localStorage.removeItem(`cart-value-${user.id}`);
      }
    }
  },
});
