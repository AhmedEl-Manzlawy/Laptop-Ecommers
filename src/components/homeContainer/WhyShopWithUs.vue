<template>
  <div class="shop-withus py-12">
    <div class="title">
      <h2 class="text-center text-white">
        <span style="color: lightblue">Why Shop</span> With Us ..?
      </h2>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6"  md="3" class="mb-4 mb-lg-0" v-for="card in data" :key="card.title">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="text-center d-flex justify-center align-center px-5 bg-transparent text-white"
              style="height: 300px"
              elevation="0"
              v-bind="props"
              :style="`
              cursor : pointer;
              scale : ${isHovering ? 1.02 : 1} ;
              transition: 0.5s all ease-in-out ;
              `"
            >
              <div class="parent">
                <v-card-text>
                  <span v-html="card.svg"></span>

                  <v-card-title class="font-weight-bold" style="font-size: 16px">
                    {{ card.title.toUpperCase() }}
                  </v-card-title>

                  <v-card-subtitle style="white-space: pre-wrap !important; font-size: 12px"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.sss</v-card-subtitle
                  >
                </v-card-text>
                <v-card-actions class="d-flex justify-center align-center">
                  <v-btn color="white" text="Learn More" variant="text"></v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref([
  {
    svg: `<svg height="92px" width="92px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#919191;" d="M226.332,479.318c-8.286,0-15.507-6.116-16.664-14.556l-11.249-82.088 c-1.262-9.214,5.183-17.707,14.398-18.969c9.223-1.256,17.707,5.183,18.969,14.398l11.249,82.088 c1.262,9.214-5.183,17.707-14.398,18.97C227.864,479.267,227.093,479.318,226.332,479.318z"></path> <path style="fill:#57565C;" d="M285.668,479.318c-0.761,0-1.531-0.052-2.307-0.158c-9.215-1.263-15.66-9.756-14.398-18.97 l11.249-82.088c1.263-9.214,9.753-15.655,18.969-14.398c9.215,1.263,15.66,9.756,14.398,18.969l-11.249,82.088 C301.174,473.201,293.955,479.318,285.668,479.318z"></path> <path style="fill:#F7DC4D;" d="M265.8,512H246.2c-19.507,0-35.322-15.814-35.322-35.322v-24.373h90.243v24.373 C301.122,496.186,285.308,512,265.8,512z"></path> <path style="fill:#EDA637;" d="M256,452.305v59.694h9.8c19.507,0,35.322-15.814,35.322-35.321v-24.373H256z"></path> <path style="fill:#A16125;" d="M301.122,469.145h-90.243c-9.3,0-16.84-7.54-16.84-16.84s7.54-16.84,16.84-16.84h90.243 c9.3,0,16.84,7.54,16.84,16.84S310.422,469.145,301.122,469.145z"></path> <path style="fill:#DE3205;" d="M434.567,178.567C434.567,79.948,354.62,0,256,0S77.433,79.948,77.433,178.567 c0,68.014,38.029,127.137,93.982,157.287c15.745,8.484,25.609,24.978,25.609,42.863v0.017c0,7.61,6.17,13.781,13.781,13.781h90.392 c7.61,0,13.781-6.17,13.781-13.781v-0.017c0-17.905,9.847-34.37,25.609-42.863C396.538,305.706,434.567,246.582,434.567,178.567z"></path> <path style="fill:#9D2217;" d="M256,0L256,0v392.516h45.196c7.612,0,13.781-6.17,13.781-13.781v-0.017 c0-17.905,9.847-34.37,25.609-42.863c55.952-30.15,93.982-89.275,93.982-157.288C434.567,79.948,354.62,0,256,0z"></path> <path style="fill:#7F1B12;" d="M82.648,221.567h346.705c2.687-10.866,4.354-22.131,4.949-33.68H77.699 C78.293,199.436,79.961,210.701,82.648,221.567z"></path> <path style="fill:#F7DC4D;" d="M434.567,188.864H77.433c-9.3,0-16.84-7.54-16.84-16.84s7.54-16.84,16.84-16.84h357.134 c9.3,0,16.84,7.54,16.84,16.84S443.867,188.864,434.567,188.864z"></path> <path style="fill:#EDA637;" d="M434.567,155.185H256v33.68h178.567c9.3,0,16.84-7.54,16.84-16.84S443.867,155.185,434.567,155.185z"></path> <path style="fill:#5E3C16;" d="M301.122,435.465H256v33.68h45.122c9.3,0,16.84-7.54,16.84-16.84S310.422,435.465,301.122,435.465z"></path> </g></svg>`,
    title: "Free Shipping on First Order",
  },
  {
    svg: `<svg width="91px" height="91px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#a52222" stroke="#a52222"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_1"></g> <g id="Layer_2"> <g> <g> <path d=" M12,10h-1.5C9.7,10,9,10.7,9,11.5v0c0,0.8,0.7,1.5,1.5,1.5h0c0.8,0,1.5,0.7,1.5,1.5v0c0,0.8-0.7,1.5-1.5,1.5H9" fill="none" stroke="#ffee00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></path> <path d=" M15,16v-4.5c0-0.8,0.7-1.5,1.5-1.5h0c0.8,0,1.5,0.7,1.5,1.5V16" fill="none" stroke="#ffee00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></path> <line fill="none" stroke="#ffee00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="15" x2="18" y1="13" y2="13"></line> <polyline fill="none" points=" 21,10 21,16 24,16 " stroke="#ffee00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></polyline> <polyline fill="none" points=" 29,10 27,10 27,16 29,16 " stroke="#ffee00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></polyline> <line fill="none" stroke="#ffee00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="29" x2="27" y1="13" y2="13"></line> </g> <polyline fill="none" points=" 25,20 8,30 13,20 2,20 10,2 26,2 23,7 " stroke="#ffee00" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></polyline> </g> </g> </g></svg>`,
    title: "Weekly flash sale",
  },
  {
    svg: `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" width="91px" height="91px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect y="42.667" style="fill:#FFAD41;" width="512" height="118.154"></rect> <rect x="256" y="42.667" style="fill:#FF9811;" width="256" height="118.154"></rect> <rect y="154.256" style="fill:#BEDDF5;" width="512" height="341.333"></rect> <rect x="256" y="154.256" style="fill:#93C7EF;" width="256" height="341.333"></rect> <g> <rect x="91.897" y="16.41" style="fill:#FF5023;" width="39.385" height="91.897"></rect> <rect x="236.308" y="16.41" style="fill:#FF5023;" width="39.385" height="91.897"></rect> <rect x="380.718" y="16.41" style="fill:#FF5023;" width="39.385" height="91.897"></rect> </g> <g> <circle style="fill:#FFFFFF;" cx="131.282" cy="259.282" r="19.692"></circle> <circle style="fill:#FFFFFF;" cx="214.423" cy="259.282" r="19.692"></circle> <circle style="fill:#FFFFFF;" cx="297.577" cy="259.282" r="19.692"></circle> <circle style="fill:#FFFFFF;" cx="380.718" cy="259.282" r="19.692"></circle> <circle style="fill:#FFFFFF;" cx="131.282" cy="324.923" r="19.692"></circle> <circle style="fill:#FFFFFF;" cx="214.423" cy="324.923" r="19.692"></circle> <circle style="fill:#FFFFFF;" cx="297.577" cy="324.923" r="19.692"></circle> <circle style="fill:#FFFFFF;" cx="380.718" cy="324.923" r="19.692"></circle> <circle style="fill:#FFFFFF;" cx="131.282" cy="390.564" r="19.692"></circle> <circle style="fill:#FFFFFF;" cx="214.423" cy="390.564" r="19.692"></circle> <circle style="fill:#FFFFFF;" cx="297.577" cy="390.564" r="19.692"></circle> <circle style="fill:#FFFFFF;" cx="380.718" cy="390.564" r="19.692"></circle> </g> </g></svg>`,
    title: "Annual Payment Discount",
  },
  {
    svg: `<svg height="91px" width="91px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#4A75C3;" d="M256,0C114.616,0,0.001,114.615,0.001,255.999c0,50.147,14.421,96.924,39.339,136.413 l472.599-141.118C509.429,112.083,395.812,0,256,0z"></path> <path style="fill:#4F5AA8;" d="M511.999,255.999c0-1.573-0.031-3.138-0.06-4.705L320.93,60.286l-129.862,180.45l88.123,88.123 L129.468,478.582C166.791,499.844,209.975,511.999,256,512C397.385,511.999,511.999,397.385,511.999,255.999z"></path> <path style="fill:#6FAEE8;" d="M437.129,205.913c-11.951-11.951-31.337-11.951-43.287,0l-125.03,125.031l30.618,55.956l137.7-137.7 C449.079,237.249,449.079,217.863,437.129,205.913z"></path> <path style="fill:#BCDEF7;" d="M472.932,241.717c-11.951-11.951-31.335-11.951-43.287,0L328.564,342.798l-134.692-13.842 L63.8,367.955l-24.451,24.451c22.466,35.607,53.458,65.29,90.121,86.176l23.414-23.414l163.217-30.874 c12.013-2.365,28.925-11.384,37.582-20.041l119.25-119.25C484.884,273.052,484.884,253.667,472.932,241.717z"></path> <path style="fill:#FFD652;" d="M347.825,125.217c0,50.716-41.11,91.826-91.826,91.826l-64.278-91.826l64.278-91.826 C306.715,33.391,347.825,74.501,347.825,125.217z"></path> <path style="fill:#FBE287;" d="M164.173,125.217c0,50.716,41.11,91.826,91.826,91.826V33.391 C205.284,33.391,164.173,74.501,164.173,125.217z"></path> <path style="fill:#F7EDBC;" d="M255.999,194.108l-43.479-69.565l43.479-69.565c38.359,0,69.565,31.206,69.565,69.565 S294.358,194.108,255.999,194.108z"></path> <path style="fill:#FFFFFF;" d="M186.434,124.543c0,38.359,31.206,69.565,69.565,69.565V54.978 C217.641,54.978,186.434,86.184,186.434,124.543z"></path> <path style="fill:#FDBA4C;" d="M347.826,175.804c0,50.716-41.11,91.826-91.826,91.826l-64.278-91.826L256,83.978 C306.716,83.978,347.826,125.088,347.826,175.804z"></path> <path style="fill:#FFD652;" d="M164.174,175.804c0,50.716,41.11,91.826,91.826,91.826V83.978 C205.285,83.978,164.174,125.088,164.174,175.804z"></path> <path style="fill:#FBE287;" d="M256,244.694l-43.479-69.565L256,105.564c38.359,0,69.565,31.206,69.565,69.565 S294.359,244.694,256,244.694z"></path> <path style="fill:#F7EDBC;" d="M186.435,175.129c0,38.359,31.206,69.565,69.565,69.565v-139.13 C217.642,105.564,186.435,136.77,186.435,175.129z"></path> <path style="fill:#FFFFFF;" d="M307.333,289.987l-131.918-0.096c-18.918,0-38.385,4.833-52.862,19.309L63.8,367.955 c31.296,31.297,82.038,31.297,113.333,0l16.739-16.739c-0.003-0.011,113.461-0.012,113.461-0.012 c16.9,0,30.609-13.707,30.609-30.609C337.942,303.694,324.234,289.987,307.333,289.987z"></path> <path style="fill:#BCDEF7;" d="M307.731,301.117H282.29l6.36,19.478l-6.36,19.478h25.452c10.51,0,19.07-8.737,19.07-19.478 S318.252,301.117,307.731,301.117z"></path> <path style="fill:#DDEFFB;" d="M282.29,301.117l0.011,38.956c10.73,0,19.467-8.737,19.467-19.478S293.031,301.117,282.29,301.117z"></path> </g></svg>`,
    title: "cashback Reward Program",
  },
]);
</script>

<style lang="scss" scoped>
.shop-withus {
  background-image: url("../../img/cov.webp");
  background-size: cover;
}
</style>
