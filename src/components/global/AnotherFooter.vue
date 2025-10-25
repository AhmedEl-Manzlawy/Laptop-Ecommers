<template>
  <v-footer class="bg-blue text-white" :app="true" absolute>
    <v-container class="py-8">
      <v-row>
        <v-col cols="12" md="3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Company name</h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit.
          </p>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
          <v-list density="compact" class="bg-transparent">
            <li v-for="cat in store.categories" :key="cat.title">
              <RouterLink :to="{ name: 'all-product' }" class="text-decoration-none text-white">{{
                cat.title
              }}</RouterLink>
            </li>
          </v-list>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
          <v-list density="compact" class="bg-transparent">
            <li v-for="(info,index) in store.info" :key="index">
                  <RouterLink :to="{name:'all-product'}" class="text-decoration-none text-white">{{info}}</RouterLink>
                </li>
          </v-list>
        </v-col>
        <v-col cols="12" md="4">
          <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p><v-icon start>mdi-home</v-icon> New York, NY 10012, US</p>
          <p><v-icon start>mdi-email</v-icon> info@gmail.com</p>
          <p><v-icon start>mdi-phone</v-icon> + 01 234 567 88</p>
          <p><v-icon start>mdi-printer</v-icon> + 01 234 567 89</p>
        </v-col>
      </v-row>

      <v-divider class="my-6"></v-divider>
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="8" class="text-center text-md-left">
          <p class="mb-0">
            {{ new Date().getFullYear() }} Copyright:
            <span>Ahmed ELmanzlawy</span>
          </p>
        </v-col>

        <v-col cols="12" md="4" class="text-center text-md-right">
          <v-btn
            v-for="(icon, i) in socialIcons"
            :key="i"
            icon
            variant="outlined"
            size="small"
            class="mx-1 text-white"
          >
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { useProductStore } from '@/stores/useProductStore';

const store = useProductStore()
const socialIcons = ["mdi-facebook", "mdi-twitter", "mdi-google", "mdi-instagram"];
</script>

<style scoped>
.text-decoration-underline {
  text-decoration: underline;
}
</style>
