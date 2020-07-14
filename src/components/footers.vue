<template>
  <div class="footersMain">
    <div class="cl footers">
      <div class="logo fl">
        <img src="../assets/images/footer/logo.png" alt />
        <br />
        <img src="../assets/images/footer/footerFont.png" alt />
      </div>
      <div class="details fl">
        <div class="one fl">
          <h3>买家帮助</h3>
          <h4>新手指南</h4>
          <h4>服务保障</h4>
          <h4>常见问题</h4>
        </div>
        <div class="two fl">
          <h3>商家帮助</h3>
          <h4>商家入驻</h4>
          <h4>商家后台</h4>
        </div>
        <div class="three fl">
          <h3>关于我们</h3>
          <h4>关于阿甲</h4>
          <h4>联系我们</h4>
          <div class="icons">
            <span class="wechat"></span>
            <span class="sinablog"></span>
          </div>
        </div>
      </div>
      <div class="tail fr">
        <div class="client fl">
          <div class="title">阿甲商城客户端</div>
          <div>
            <img src="../assets/images/footer/ios.png" alt />
            <br />
            <img src="../assets/images/footer/android.png" alt />
          </div>
        </div>
        <div class="QRcode fr">
          <img src="../assets/images/footer/erweima.png" alt />
        </div>
      </div>
    </div>
    <div class="record">2001-2016阿甲集团有限公司(INTERNATIONAL.INC)版权所有 京ICP证8000853号 56</div>
  </div>
</template>
<style scoped>
.footersMain {
  width: 100%;
  padding: 20px 0px 25px 0px;
  background: #ffffff;
}
.footers {
  width: 1000px;
  margin: 0 auto;
}
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
/* logo */

/* 详情介绍 */
.details {
  margin-left: 70px;
}
.details h3 {
  color: #636363;
  margin: 0;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 600;
}
.details h4 {
  color: #aaaaaa;
  text-align: center;
  margin: 0px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
}
.two,
.three {
  margin-left: 50px;
}
.icons {
  width: 50px;
  height: 20px;
  margin: 0 auto;
}
.wechat,
.sinablog {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.wechat {
  background: url("../assets/images/footer/wechat.png") center center no-repeat;
}
.sinablog {
  margin-left: 10px;
  background: url("../assets/images/footer/sinablog.png") center center
    no-repeat;
}
/* 客户端下载 */
.client .title {
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
}
/* 备案信息 */
.record {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
}
</style>