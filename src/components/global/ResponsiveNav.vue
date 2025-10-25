
<template>
  <div class="responsive-nav">
    <v-app-bar color="blue" fixed>
      <v-container>
        <v-row class="align-center no-gutters">
          <v-col cols="4" class="d-flex align-center">
            <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>

            <v-icon
              v-if="!showSearch"
              class="ml-2"
              style="color: black; cursor: pointer"
              @click="toggleSearch"
            >
              mdi-magnify
            </v-icon>

            <v-text-field
              v-else
              v-model="searchQuery"
              placeholder="Search..."
              variant="solo"
              hide-details
              density="compact"
              clearable
              @blur="toggleSearch"
              style="max-width: 150px; margin-left: 10px"
            ></v-text-field>
          </v-col>

          <v-col cols="4" class="text-center">
            <h1
              class="app"
              style="cursor: pointer; font-weight: bold; color: white"
              @click="$router.push({ path: '/' })"
            >
              <i>Lap<span style="color: #e9b028; text-decoration: underline">Top+</span></i>
            </h1>
          </v-col>

          <v-col cols="4" class="d-flex justify-end align-center">
            <div
              class="parent text-white align-center d-flex justify-space-evenly py-1"
              style="gap: 10px"
            >
              <div
                class="wishlist d-flex flex-column align-center icons"
                style="color: #000; font-size: 14px; cursor: pointer"
              >
                <v-icon>mdi-account-outline</v-icon>
                <span>Login</span>
              </div>

              <div
                class="wishlist d-flex flex-column align-center icons"
                style="color: black; font-size: 14px; cursor: pointer"
                @click="openCart"
              >
                <v-badge
                  :content="cartItems.length"
                  color="#e9b028"
                  location="right top"
                  offset-x="-1"
                  style="z-index: 1;"
                >
                  <v-icon style="z-index: 20;">mdi-cart-outline</v-icon>
                </v-badge>
                <span>Cart</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/useCart'
import { useProductStore } from '@/stores/useProductStore'
import { mapState } from 'pinia'

export default {
  inject: ['Emitter'],
  data() {
    return {
      drawer: false,
      showSearch: false,
      searchQuery: '',
    }
  },
  methods: {
    openCart() {
      this.Emitter.emit('openCart')
    },
    openMenu() {
      this.Emitter.emit('openMenu')
    },
    toggleSearch() {
      this.showSearch = !this.showSearch
    },
  },
  computed: {
    ...mapState(useProductStore, ['categories']),
    ...mapState(useCartStore, ['cartItems']),
  },
}
</script>

<style lang="scss">
.responsive-nav {
  .v-app-bar {
    display: flex;
    align-items: center;
  }

  @media (max-width: 600px) {
    .app {
      font-size: 18px;
    }

    .parent {
      gap: 5px;

      .icons {
        font-size: 10px;
        gap: 4px;
      }
    }

    .v-text-field input {
      font-size: 12px !important;
    }
  }
}
</style>
