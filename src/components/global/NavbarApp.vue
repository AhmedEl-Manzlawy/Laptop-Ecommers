<template>
  <div class="nav-bar">
    <v-app-bar color="blue" class="py-2" height="fit-content" absolute>
      <v-container fluid>
        <v-row class="d-flex justify-center align-center">
          <v-col cols="3">
            <h1 style="cursor: pointer" @click="$router.push({ path: '/' })">
              <i>Lap<span style="color: #e9b028; text-decoration: underline">Top+</span></i>
            </h1>
          </v-col>
          <v-col cols="5">
            <div class="position-relative" style="width: 85%">
              <input
                type="search"
                name="navSearch"
                id="navSearch"
                placeholder="Search The Store"
                style="border-radius: 30px; outline: none; width: 100%"
                class="bg-white py-2 px-5"
              />
              <v-icon
                class="position-absolute"
                style="top: 50%; right: 10px; transform: translateY(-50%); color: black"
                >mdi-magnify</v-icon
              >
            </div>
          </v-col>
          <v-col cols="4">
            <div class="parent text-white d-flex justify-space-evenly">
              <div class="available">
                <span>Available 24/7 at</span> <br />
                <strong>{020}123-3456</strong>
              </div>
              <div class="wishlist d-flex flex-column align-center" style="color: #000">
                <div
                  v-if="!isAuthenticated"
                  @click="$router.push('/login')"
                  style="cursor: pointer"
                >
                  <v-icon size="28">mdi-account-circle-outline</v-icon>
                  <span>Sign In</span>
                </div>

                <div v-else style="position: relative">
                  <v-menu offset-y>
                    <template v-slot:activator="{ props }">
                      <div
                        v-bind="props"
                        class="d-flex flex-column align-center"
                        style="cursor: pointer"
                      >
                        <v-avatar size="32">
                          <img :src="user.image" :alt="user.firstName" />
                        </v-avatar>
                        <span style="font-size: 12px">{{ user.firstName }}</span>
                      </div>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-list-item-title class="d-flex align-center ga-2">
                          <v-icon>mdi-email-outline</v-icon>
                          {{ user.email }}
                        </v-list-item-title>
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item @click="handleLogout" style="cursor: pointer">
                        <v-list-item-title class="d-flex align-center ga-2 text-red">
                          <v-icon color="red">mdi-logout</v-icon>
                          Sign Out
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </div>
              <div
                class="wishlist d-flex flex-column align-center"
                style="color: black; cursor: pointer"
                @click="handleCartClick"
              >
                <v-badge
                  location="right top"
                  :content="cartItems.length"
                  color="#e9b028"
                  offset-x="-10"
                ></v-badge>
                <v-icon>mdi-cart-outline</v-icon> <span>Cart</span>
              </div>
            </div>
          </v-col>
          <v-row class="mt-8">
            <v-col cols="8">
              <ul class="links d-flex ga-10" style="list-style: none">
                <li v-for="cat in categories" :key="cat.title">
                  <RouterLink
                    :to="{ name: 'products-category', params: { category: cat.route } }"
                    class="text-decoration-none text-white"
                    >{{ cat.title }}</RouterLink
                  >
                </li>
              </ul>
            </v-col>
            <v-col cols="4" class="d-flex justify-end ga-8">
              <div class="help d-flex align-center ga-1 text-white">
                <v-icon style="color: #167cb9">mdi-account-question</v-icon> <span>Help</span>
              </div>
              <div class="help d-flex align-center ga-1 text-white">
                <img style="width: 30px" :src="selectedLang[0].links" />
                <span>{{ selectedLang[0].lang }} / {{ selectedLang[0].Currancy }}</span>
                <v-icon id="parent">mdi-chevron-down</v-icon>
                <v-menu activator="parent" class="d-flex justify-center align-center">
                  <v-list v-model:selected="selectedLang" mandatory>
                    <v-list-item v-for="lng in languages" :key="lng" :value="lng">
                      <v-list-item-title class="d-flex align-center ga-3">
                        <img style="width: 30px" :src="lng.links" />{{ lng.lang }}/{{
                          lng.Currancy
                        }}</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>
<script>
import { useCartStore } from "@/stores/useCart";
import { useProductStore } from "@/stores/useProductStore";
import { mapState } from "pinia";
import { useUserStore } from "@/stores/useUserStore";
export default {
  inject: ["Emitter"],
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
    handleCartClick() {
      // لو مش مسجل دخول، يروح على صفحة login
      if (!this.isAuthenticated) {
        this.$router.push("/login");
      } else {
        // لو مسجل دخول، يفتح الكارت
        this.openCart();
      }
    },
    handleLogout() {
      const userStore = useUserStore();
      userStore.logoutUser();
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapState(useProductStore, ["categories"]),
    ...mapState(useCartStore, ["cartItems"]),
    ...mapState(useUserStore, ["user", "isAuthenticated"]),
  },
  data() {
    return {
      selectedLang: [
        {
          links:
            "https://tse1.mm.bing.net/th/id/OIP.clw7Ui4s1CvEJyZqNn63SwHaFu?rs=1&pid=ImgDetMain&o=7&rm=3",
          lang: "EN",
          Currancy: "USD",
        },
      ],
      languages: [
        {
          links:
            "https://tse1.mm.bing.net/th/id/OIP.clw7Ui4s1CvEJyZqNn63SwHaFu?rs=1&pid=ImgDetMain&o=7&rm=3",
          lang: "EN",
          Currancy: "USD",
        },
        {
          links:
            "https://tse4.mm.bing.net/th/id/OIP.Q3VTqRb1VqoFtYYtykhioAAAAA?w=326&h=280&rs=1&pid=ImgDetMain&o=7&rm=3",
          lang: "AR",
          Currancy: "EPOUND",
        },
      ],
    };
  },
};
</script>
