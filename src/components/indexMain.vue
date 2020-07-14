<template>
  <div class="indexMain">
    <div class="carousel">
      <div class="block">
        <el-carousel height="400px">
          <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="banner">
      <div class="one">
        <div class="sBanner"></div>
        <div></div>
      </div>
      <div class="two">
        <div class="sBanner"></div>
        <div></div>
      </div>
      <div class="three">
        <div class="sBanner"></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<style  scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
.cl::after {
  display: block;
  width: 0px;
  height: 0px;
  content: " ";
  clear: both;
}

.indexMain {
  width: 1000px;
  margin: 0 auto;
}
/* carousel  轮播图 */
.carousel {
  position: relative;
  width: 1000px;
  height: 400px;
}
el-carousel-item {
  width: 1000px;
  height: 400px;
}
.el-carousel__item:nth-child(3) {
  background: url("../assets/images/index/index_banner1.png") center center
    no-repeat;
  background-size: cover;
}
.el-carousel__item:nth-child(4) {
  background: url("../assets/images/index/index_banner2.png") center center
    no-repeat;
  background-size: cover;
}
.el-carousel__item:nth-child(5) {
  background: url("../assets/images/index/index_banner3.png") center center
    no-repeat;
  background-size: cover;
}
.el-carousel__item:nth-child(6) {
  background: url("../assets/images/index/index_banner4.png") center center
    no-repeat;
  background-size: cover;
}
/* banner  */
.banner {
  width: 1000px;
  height: 270px;
  margin: 10px auto;
}
.banner > div {
  display: inline-block;
  width: 328px;
  height: 270px;
  margin-right: 8px;
}
.banner > div:last-child {
  margin-right: 0px;
}
.one {
  background: #0aa2ed;
}
.two {
  background: #c3fbd6;
}
.three {
  background: #e89aa8;
}
</style>