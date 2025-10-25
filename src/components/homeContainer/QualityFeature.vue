<template>
  <div class="quality-feature bg-grey-lighten-3 py-10">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="3" lg=""  class="mx-1 px-3"  :style="isLargeScreen ? 'max-width: 19%' : ''"  v-for="card in cards" :key="card.title">
          <v-hover v-slot="{ isHovering, props }">
           <v-card
              class="text-center d-flex justify-center align-center px-5"

              :elevation="`${isHovering ? '1' : '0'}`"
              v-bind="props"
              :style="`
              height: 300px;
              cursor : pointer;
              scale : ${isHovering ? 1.02 : 1} ;
              background-color: ${
                isHovering ? 'lightblue' : 'white'
              };
              color: ${isHovering ? 'white' : 'initial'};
              transition: 0.5s all ease-in-out ;
              `"
            >
              <div class="parent">
                <v-card-text>
                  <span v-html="card.svg"></span>

                  <v-card-title class="font-weight-bold" style="font-size: 16px">
                    {{ card.title.toUpperCase() }}
                  </v-card-title>

                  <v-card-subtitle
                    style="
                      white-space: normal !important;
                      font-size: 12px;
                    "
                    >{{ card.subtitle }}</v-card-subtitle
                  >
                </v-card-text>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { feature } from "@/data/qualityFeature";
import { computed, ref } from "vue";
import { useDisplay } from "vuetify/lib/composables/display";
const { lgAndUp } = useDisplay();

const isLargeScreen = computed(() => lgAndUp.value);

const cards = ref(feature);
</script>
