<template>
  <div class="top-offer w-100 bg-grey-lighten-2 py-6">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="offers" style="overflow: hidden; cursor: pointer">
              <v-img
                v-bind="props"
                src="https://m.media-amazon.com/images/I/711kTKuwo+L._AC_SL1500_.jpg"
                class="w-100"
                :style="`border-radius: 5px; transition:0.5s all ease-in-out; scale:${
                  isHovering ? 1.1 : 1
                }`"
                cover
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="offers" style="overflow: hidden; cursor: pointer">
              <v-img
                v-bind="props"
                src="https://m.media-amazon.com/images/I/81BMzgXj0ML._AC_SL1500_.jpg"
                class="w-100"
                :style="`border-radius: 5px; transition:0.9s all ease-in-out; scale:${
                  isHovering ? 1.1 : 1
                }`"
                cover
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="offers" style="overflow: hidden; cursor: pointer">
              <v-img
                v-bind="props"
                src="https://m.media-amazon.com/images/I/81MGcKRtAfL._AC_SL1500_.jpg"
                class="w-100"
                :style="`border-radius: 5px; transition:0.5s all ease-in-out; scale:${
                  isHovering ? 1.1 : 1
                }`"
                cover
              />
            </div>
          </v-hover>
        </v-col> </v-row
      ><v-row class="my-2">
        <v-col cols="12" sm="6">
          <v-hover v-slot="{ isHovering, props }">
            <div class="offers ml-sm-10 ml-2 mr-sm-2 mr-2 " style="overflow: hidden; cursor: pointer">
              <v-img
                v-bind="props"
                src="https://m.media-amazon.com/images/I/71PpyyeQpdL._AC_SL1500_.jpg"
                class="w-100"
                :style="`border-radius: 5px; transition:0.5s all ease-in-out;height:450px ; scale:${
                  isHovering ? 1.1 : 1
                }`"
                cover
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6">
          <v-hover v-slot="{ isHovering, props }">
            <div class="offers mr-sm-10 mr-2 ml-sm-2 ml-2 " style="overflow: hidden; cursor: pointer">
              <v-img
                v-bind="props"
                src="https://m.media-amazon.com/images/I/81VUsqbMqCL._AC_SL1500_.jpg"
                class="w-100"
                :style="`border-radius: 5px; transition:0.5s all ease-in-out;height:450px ;scale:${
                  isHovering ? 1.1 : 1
                }`"
                cover
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
