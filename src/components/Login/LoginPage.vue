<template>
  <div class="bg-blue" style="height: 100vh">
    <v-container fluid class="d-flex flex-column justify-center align-center fill-height">
      <v-row>
        <v-col cols="12" class="pa-0 pt-3">
          <h1 style="cursor: pointer" @click="$router.push({ path: '/' })">
            <i>Lap<span style="color: #e9b028; text-decoration: underline">Top+</span></i>
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-sheet width="340" class="pa-6 rounded-lg elevation-4 mb-10 sheet">
          <h2 class="text-center mb-6">Sign-In</h2>

          <v-form fast-fail @submit.prevent="handleLogin">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="email"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label=" Password"
              type="password"
              outlined
              dense
            ></v-text-field>

            <v-btn  class="mt-4" type="submit" block color="primary">Login</v-btn>
            <v-alert v-if="error" type="error" class="mt-3" density="compact">
              {{ error }}
            </v-alert>
          </v-form>
        </v-sheet>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../stores/useUserStore";

const email = ref("");
const password = ref("");
const router = useRouter();
const store = useUserStore();
const loading = ref(false);
const error = ref("");
const emailRules = [
  (value) => !!value || "Email Required",
  (value) => /.+@.+\..+/.test(value) || " invalid Email ",
];

const passwordRules = [
  (value) => !!value || "password Required",
  (value) => value.length >= 6 || "password should br greater than 6 digits",
];

async function handleLogin() {
  loading.value = true;
  error.value = "";

  const success = await store.loginUsers(email.value, password.value);
  if (success) {
    router.push({ path: "/home" });
  } else {
    error.value = store.error;
  }
  loading.value = false;
}
</script>

<style>
@media (max-width: 767px) {
  .sheet {
    width: 300px !important;
  }
}
</style>
