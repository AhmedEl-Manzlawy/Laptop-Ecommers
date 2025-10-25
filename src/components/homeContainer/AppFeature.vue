<template>
  <div class="features" style="background-color: lightyellow">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4">
          <div
            class="pearent d-flex justify-center align-center w-100 ga-5 flex-column flex-sm-row"
          >
            <v-icon style="font-size: 40px">mdi-truck-fast-outline</v-icon>
            <p>Fast free Shiping & return</p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4">
          <div
            class="pearent second d-flex justify-center align-center w-100 ga-5 flex-column flex-sm-row"
          >
            <v-icon style="font-size: 40px">mdi-truck-fast-outline</v-icon>
            <p>Fast free Shiping & return</p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4">
          <div
            class="pearent d-flex justify-center align-center w-100 ga-5 flex-column flex-sm-row"
          >
            <v-icon style="font-size: 40px">mdi-truck-fast-outline</v-icon>
            <p>Fast free Shiping & return</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
.features {
  .second {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      background-color: rgba(0, 0, 0, 0.349);
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
    }
    &::after {
      content: "";
      position: absolute;
      background-color: rgba(0, 0, 0, 0.349);
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
    }
  }
}
@media (max-width: 600px) {
  .features {
    .second {
      &::before,
      &::after {
        display: none;
      }
    }
  }
}
</style>
