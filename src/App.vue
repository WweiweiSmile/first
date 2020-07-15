<template>
  <div id="app">
    <headers />
    <navbar />
    <order />
    <!-- <shopCar /> -->
    <!-- <indexMain /> -->
    <mainFooter />
    <footers />
  </div>
</template>

<script>
import headers from "./components/headers.vue";
import navbar from "./components/navbar.vue";
import indexMain from "./components/indexMain.vue";
import footers from "./components/footers.vue";
import mainFooter from "./components/mainFooter.vue";
import shopCar from "./components/shopCar.vue";
import order from "./components/order.vue";
export default {
  name: "App",
  components: {
    headers,
    navbar,
    indexMain,
    footers,
    mainFooter,
    shopCar,
    order
  }
};
</script>

<style>
body {
  background-color: #f5f5f5;
}
</style>
