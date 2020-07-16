<template>
  <div class="bigbox">
    <div class="main_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main_nav_one">
      <span>订单：2155452 当前状态：运输</span>
    </div>
    <div class="main_nav_two">
      <ul>
        <li><img class="img_1" src="../image/orderinfo_img1_2.png"></li>
        <li><img class="img_2" src="../image/orderinfo_img6_2.png"></li>
        <li><img class="img_1" src="../image/orderinfo_img2_1.png"></li>
        <li><img class="img_2" src="../image/orderinfo_img6.png"></li>
        <li><img class="img_1" src="../image/orderinfo_img3.png"></li>
        <li><img class="img_2" src="../image/orderinfo_img6.png"></li>
        <li><img class="img_1" src="../image/orderinfo_img4.png"></li>
        <li><img class="img_2" src="../image/orderinfo_img6.png"></li>
        <li><img class="img_1" src="../image/orderinfo_img5.png"></li>
      </ul>
    </div>
    <div class="text_1">
      <h3>详细信息</h3>
      <hr/>
      <p>收货人：某某某 邮编：400000 联系电话：150529285562</p>
      <p>收货地址：重庆市璧山县大兴镇</p>
    </div>
    <div class="text_1">
      <h3>物流信息</h3>
      <hr/>
      <p>发货时间：2020年11月15日</p>
      <p>物流公司：韵达快递 韵达官网</p>
      <p>快递单号：53910651565</p>
      <p>物流信息：2020年2月15日 12：10 你的快递已经到达重庆</p>
      <p>物流信息：2020年2月15日 12：10 你的快递已经到达重庆</p>
      <p>物流信息：2020年2月15日 12：10 你的快递已经到达重庆</p>
      <p>物流信息：2020年2月15日 12：10 你的快递已经到达重庆</p>
    </div>
    <div class="text_1">
      <h3>商品信息</h3>
      <hr/>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.bigbox {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
}
.main_nav {
  width: 1000px;
}
.main_nav_one {
  text-align: left;
  padding-top: 12px;
  height: 40px;
  margin: 20px 0px;
  background-color: rgb(243, 243, 243);
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
}
.main_nav_two{
    margin: 50px 0px;
    height: 50px;
}
.main_nav_two li{
  float: left;
  list-style: none;
}
.img_1{
  margin-left: 20px;
  margin-top: -10px;
}
.img_2{
  padding-top: 25px;
  margin-left: 20px;
}
.text_1{
  text-align: left;
}
</style>