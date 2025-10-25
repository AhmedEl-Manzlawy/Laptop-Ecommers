<template>
  <div>
    <v-layout style="position: relative">
    <NavbarApp v-show="$route.name != 'checkout' &&$route.name != 'login-page' && windowWidth > 990"/>
    <ResponsiveNav v-show="$route.name != 'checkout' &&$route.name != 'login-page' && windowWidth <= 990" />
    <CartCard :windowWidth="windowWidth"/>
    <MenuDrawer :windowWidth="windowWidth"/>
    <FixedNav v-if="$route.name != 'checkout' &&$route.name != 'login-page' && windowWidth > 990"/>
      <v-main :style="`padding-top: ${$route.name == 'checkout' || $route.name == 'login-page' ? '0' : windowWidth >= 990 ? '150px' : '65px'}`">

        <slot></slot>
      </v-main>
      <!-- <FooterApp /> -->
      <AnotherFooter v-show="$route.name != 'checkout' &&$route.name != 'login-page' "/>
    </v-layout>
  </div>
</template>
<script>
import FixedNav from "../homeContainer/FixedNav.vue";
import AnotherFooter from "./AnotherFooter.vue";
import CartCard from "./CartCard.vue";
import MenuDrawer from "./MenuDrawer.vue";

// import FooterApp from "./FooterApp.vue";
import NavbarApp from "./NavbarApp.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
export default {
  data: () => ({
    drawer: true,
    windowWidth: window.innerWidth,
  }),
  components: { CartCard, AnotherFooter, NavbarApp, FixedNav,ResponsiveNav,MenuDrawer },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      console.log("window width", this.windowWidth);
    };
  },

};
</script>
