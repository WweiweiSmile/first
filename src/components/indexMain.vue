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
        <div class="sBanner fl"></div>
        <div class="details fr details1">
          <div class="details1">
            <h2>联想小新Air3</h2>
            <h5>设计师独享高端配置</h5>
          </div>
        </div>
      </div>
      <div class="two">
        <div class="sBanner fl"></div>
        <div class="details fr details">
          <div class="details2">
            <h2>得力书包Bag</h2>
            <h5>给你满载而归的喜悦</h5>
          </div>
        </div>
      </div>
      <div class="three">
        <div class="sBanner fl"></div>
        <div class="details fr details3">
          <div class="details3">
            <h2>刀鱼焖排骨</h2>
            <h5>吃饱了才有力气学习</h5>
          </div>
        </div>
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
.sBanner {
  width: 50%;
  height: 100%;
}
.one .sBanner {
  background: url("../assets/images/index/index_Sbanner_img1.png") left center
    no-repeat;
  background-position: 100% 50%;
}
.two .sBanner {
  background: url("../assets/images/index/index_Sbanner_img2.png") left center
    no-repeat;
}
.three .sBanner {
  background: url("../assets/images/index/index_Sbanner_img3.png") left center
    no-repeat;
  background-size: contain;
}
.details {
  width: 50%;
  height: 100%;
}
.details1,
.details2,
.details3 {
  position: relative;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
}
.details1 h2,
.details1 h5 {
  color: #fff;
  margin: 0px;
  padding: 0px;
}
.details2 h2,
.details2 h5 {
  color: #1a8058;
  margin: 0px;
  padding: 0px;
}
.details3 h2,
.details3 h5 {
  color: #feece9;
  margin: 0px;
  padding: 0px;
}
</style>