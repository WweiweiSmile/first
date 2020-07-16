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
      <div class="one" @click="productDetail()">
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
    <div class="guild"></div>
    <div class="study">
      <div class="title">
        <h2>
          学习用品
          <span>爱学习 享品质工作</span>
        </h2>
      </div>
      <div class="main cl">
        <div class="left fl">
          <div class="details">
            <h1>快意无边</h1>
            <h5>联想(Lenovo) 小新Air13 Pro版</h5>
            <h4>限时特惠 ￥6688.00</h4>
            <el-button class="seeDetailsButton">查看详情</el-button>
          </div>
        </div>
        <div class="right fr">
          <div class="up">
            <div class="details">
              <span>联想(Lenovo) 小新Air13</span>
              <span>不超15mm才敢叫轻薄</span>
              <span class="price">￥6688.00</span>
              <el-button class="seeDetailsButton">查看详情</el-button>
            </div>
          </div>
          <div class="down">
            <div class="details">
              <span>雅致布面年历本 张扬个</span>
              <span>性，点亮生活新时尚</span>
              <span class="price">￥68.00</span>
              <el-button class="seeDetailsButton">查看详情</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="food">
      <div class="title">
        <h2>
          美食餐饮
          <span>爱美食 享品质生活</span>
        </h2>
      </div>
      <div class="main">
        <div class="menu fl">
          <div v-for="(item,index) in menu" :key="index">
            <div class="menuTit">
              <span class="tit">{{item.title}}</span>
              <span class="call" @click="callContent(index)">{{item.status}}</span>
            </div>
            <div class="menuCon" v-show="item.isShow">{{item.content}}</div>
          </div>
        </div>
        <div class="foods fr">
          <div class="foodsDetail fl">
            <div class="details">
              <span class="tit">
                红烧肉盖饭套餐
                <span>(吉野家)</span>
              </span>
              <span class="price">￥20.20</span>
              <el-button>立即订餐</el-button>
            </div>
          </div>
          <div class="foodsDetail fl">
            <div class="details">
              <span class="tit">
                全素套餐
                <span>(魏家凉皮)</span>
              </span>
              <span class="price">￥16.20</span>
              <el-button>立即订餐</el-button>
            </div>
          </div>
          <div class="foodsDetail fl">
            <div class="details">
              <span class="tit">
                营养海鲜汤
                <span>(山西面食家)</span>
              </span>
              <span class="price">￥25.20</span>
              <el-button>立即订餐</el-button>
            </div>
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
  margin: 10px auto 0px;
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
/* guild  */
.guild {
  width: 1000px;
  height: 400px;
  background: url("../assets/images/index/index_guild.png") CENTER CENTER
    no-repeat;
  margin: 0px 0px 10px 0px;
}
/* study  学习用品 */
.study .title span {
  color: #ffffff;
  background: #000;
  font-size: 14px;
  font-weight: 600;
}
.main .left {
  width: 640px;
  height: 400px;
  background: url("../assets/images/index/index_hot_study_img1.png") no-repeat
    #e8e8e8;
  background-position: 85% 50%;
  text-align: right;
}
.main .left .details {
  position: relative;
  width: 200px;
  top: 60px;
  left: 60px;
}
.main .left .details h1 {
  font-style: italic;
  margin: 0;
  padding: 0;
  font-size: 50px;
}
.main .left .details h5 {
  margin: 0;
  padding: 0;
}
.main .left .details h4 {
  color: #18a8f1;
  padding: 0px;
  margin: 5px 0px;
}
.seeDetailsButton {
  width: 150px;
  background: #18a8f1;
  color: #ffffff;
}

.main .right {
  width: 340px;
  height: 400px;
}
.main .right .up {
  position: relative;
  width: 340px;
  height: 197px;
  background: url("../assets/images/index/index_hot_study_img2.png") no-repeat
    #e8e8e8;
  background-position: 95% 50%;
}
.main .right .up .details {
  position: relative;
  top: 20px;
  left: 20px;
}
.main .right .up span {
  display: block;
  font-weight: 400;
  font-size: 14px;
}
.main .right .up .price {
  margin: 10px 0px 5px 0px;
  color: #18a8f1;
  font-weight: 600;
}

.main .right .down {
  position: relative;
  width: 340px;
  height: 197px;
  margin-top: 6px;
  background: url("../assets/images/index/index_hot_study_img3.png") no-repeat
    #e8e8e8;
  background-position: 95% 50%;
}
.main .right .down .details {
  position: relative;
  top: 20px;
  left: 20px;
}
.main .right .down span {
  display: block;
  font-weight: 400;
  font-size: 14px;
}
.main .right .down .price {
  margin: 10px 0px 5px 0px;
  color: #18a8f1;
  font-weight: 600;
}

/* 美食 food */
.food .title span {
  color: #ffffff;
  background: #000;
  font-size: 14px;
  font-weight: 600;
}
.main {
  width: 1000px;
  height: 400px;
}
.main .menu {
  width: 310px;
  height: 400px;
  background: #ffffff;
}
.main .menu .menuTit {
  position: relative;
  width: 310px;
  height: 60px;
  margin-bottom: 10px;
  line-height: 60px;
  background: #e89aa8;
}
.main .menu .menuTit:last-child {
  margin-bottom: 0px;
}
.main .menu .menuTit .tit {
  padding-left: 25px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
}
.main .menu .menuTit .call {
  position: absolute;
  right: 20px;
  font-size: 26px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
}
.main .menu .menuCon {
  width: 310px;
  height: 200px;
  color: #b6b6b6;
}
.main .foods {
  width: 620px;
  height: 400px;
}
.main .foodsDetail {
  width: 200px;
  height: 400px;
  margin-right: 10px;
}
.main .foodsDetail:nth-child(1) {
  background: url("../assets/images/index/index_hot_food_img1.png") no-repeat
    #e8e8e8;
  background-position: center 20%;
}
.main .foodsDetail:nth-child(2) {
  background: url("../assets/images/index/index_hot_food_img2.png") no-repeat
    #e8e8e8;
  background-position: center 20%;
}
.main .foodsDetail:nth-child(3) {
  background: url("../assets/images/index/index_hot_food_img3.png") no-repeat
    #e8e8e8;
  background-position: center 20%;
}

.main .foodsDetail:last-child {
  margin-right: 0px;
}
.main .foodsDetail .details {
  position: relative;
  top: 60%;
  width: 200px;
}
.main .foodsDetail .details .tit {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  color: #a9a9a9;
}
.main .foodsDetail .details .tit span {
  font-size: 14px;
  margin-left: 5px;
}
.main .foodsDetail .details .price {
  display: block;
  width: 50px;
  margin: 0px auto 10px;
  color: #a9a9a9;
}
.main .foodsDetail .details button {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  background: #e48e9d;
  color: #ffffff;
}
</style>
<script>
export default {
  data() {
    return {
      menu: [
        {
          title: "红烧肉盖饭(吉野家)",
          content:
            "红烧肉是热菜菜谱之一。以五花肉为制作主料，香甜松软。最好选用肥瘦相间的三层肉(五花肉) 来做。红烧肉的烹饪技巧以砂锅为主，肥瘦相间，香甜松软，入口即化。红烧肉在我国各地流传甚广，是一道著名的大众菜肴，当然也是大家最喜欢的菜。",
          status: "-",
          isShow: true
        },
        {
          title: "春卷套餐(魏家凉皮)",
          content:
            "红烧肉是热菜菜谱之一。以五花肉为制作主料，香甜松软。最好选用肥瘦相间的三层肉(五花肉) 来做。红烧肉的烹饪技巧以砂锅为主，肥瘦相间，香甜松软，入口即化。红烧肉在我国各地流传甚广，是一道著名的大众菜肴，当然也是大家最喜欢的菜。",
          status: "+",
          isShow: false
        },
        {
          title: "营养海鲜汤(山西面食家)",
          content:
            "红烧肉是热菜菜谱之一。以五花肉为制作主料，香甜松软。最好选用肥瘦相间的三层肉(五花肉) 来做。红烧肉的烹饪技巧以砂锅为主，肥瘦相间，香甜松软，入口即化。红烧肉在我国各地流传甚广，是一道著名的大众菜肴，当然也是大家最喜欢的菜。",
          status: "+",
          isShow: false
        }
      ],
      callContent(index) {
        this.menu[index].isShow = !this.menu[index].isShow;
        this.menu[index].status = this.menu[index].status == "-" ? "+" : "-";
        if (this.menu[index].isShow === true) {
          for (let i = 0; i < this.menu.length; i++) {
            if (i != index && this.menu[i].isShow == true) {
              this.menu[i].isShow = false;
              this.menu[i].status = "+";
            }
          }
        }
      },
      productDetail() {
        this.$router.push("/productDetail");
      }
    };
  }
};
</script>