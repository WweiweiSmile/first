<template>
  <div class="order">
    <div class="tags">
      <span>首页</span>
      <span class="last">订单管理</span>
    </div>
    <div class="main cl">
      <div class="menu fl">
        <div class="menuItem">
          <div class="name myOrder">我的订单</div>
          <span class="call down"></span>
        </div>
        <div class="myOrderContent">
          <ul>
            <li>全部订单</li>
            <li>待付款</li>
            <li>待收货</li>
            <li>待评价</li>
            <li>退货退款</li>
          </ul>
        </div>
        <div class="menuItem">
          <div class="name myCoupon">我的优惠卷</div>
          <span class="call right"></span>
        </div>
        <div class="menuItem">
          <div class="name myAddr">收货地址</div>
          <span class="call right"></span>
        </div>
        <div class="menuItem">
          <div class="name myAccount">账号管理</div>
          <span class="call right"></span>
        </div>
      </div>
      <div class="tables fr">
        <table class="table">
          <tr class="head">
            <th style="width:400px">商品</th>
            <th>单价(元)</th>
            <th>数量</th>
            <th>售后</th>
            <th>实付款(元)</th>
            <th>交易状态</th>
            <th>操作</th>
          </tr>
        </table>
        <div class="details" v-for="(item,index) in tableData" :key="index">
          <div class="orderId">
            <span>订单编号:1234567890</span>
            <span>成交时间:2016-01-04 18:00</span>
            <span>联系客服</span>
            <span></span>
          </div>
          <div class="detail">
            <ul>
              <li class="product">
                <div>
                  <img class="fl" :src="img_url" alt />
                  <div class="productDetail fr">
                    <div class="name">{{item.name}}</div>
                    <div class="color">颜色:{{item.color}}</div>
                  </div>
                </div>
              </li>
              <li class="price"></li>
              <li class="num"></li>
              <li class="sale"></li>
              <li class="buyPrice"></li>
              <li class="status"></li>
              <li class="opration"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
/* 订单管理 */
.order {
  width: 1000px;
  margin: 0px auto;
}
/* 标签页 */
.tags {
  margin: 15px 0px;
}
.order .tags span::after {
  content: " > ";
}
.order .tags .last::after {
  content: "";
}
/* 菜单栏 menu */
.menu {
  width: 200px;
}
.menuItem {
  position: relative;
  width: 200px;
  height: 40px;
  margin-top: 20px;
  background: #0aa2ed;
}
.menuItem:first-child {
  margin-top: 0px;
}
.menuItem .name {
  height: 40px;
  padding-left: 40px;
  line-height: 40px;
  color: #ffffff;
}
.menuItem .myOrder {
  background: url("../assets/images/myOrder/myOrder.png") 5% center no-repeat;
}
.menuItem .myCoupon {
  background: url("../assets/images/myOrder/pcenter_icon1.png") 5% center
    no-repeat;
}
.menuItem .myAddr {
  background: url("../assets/images/myOrder/pcenter_icon2.png") 5% center
    no-repeat;
}
.menuItem .myAccount {
  background: url("../assets/images/myOrder/pcenter_icon3.png") 5% center
    no-repeat;
}
.menuItem .call {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: cover;
  cursor: pointer;
}
.menuItem .down {
  background: url("../assets/images/myOrder/myOrder2.png") no-repeat;
}
.menuItem .right {
  background: url("../assets/images/myOrder/myOrder1.png") no-repeat;
}
.myOrderContent {
  width: 200px;
  margin: 0px;
  padding: 0px;
  background: #ffffff;
}
.myOrderContent ul {
  margin: 0px;
  padding: 15px 0px 15px 40px;
}
.myOrderContent ul li {
  list-style: none;
  margin-top: 15px;
}
.myOrderContent ul li:first-child {
  margin-top: 0px;
}
/* 表格主体 */
.table {
  width: 780px;
  text-align: center;
  color: #000;
  border-spacing: 0px;
}
.head {
  height: 40px;
  margin-bottom: 10px;
  border: none;
  background: #ececec;
  box-shadow: 5px 5px 10px #dcdcdc;
  font-size: 14px;
}
.details {
  margin-top: 12px;
}
.details .orderId {
  position: relative;
  height: 26px;
  background: #e8e8e8;
  line-height: 26px;
  font-size: 14px;
  color: #8e8e8e;
}
.details .orderId span {
  margin-left: 15px;
}
.details .orderId span:first-child {
  margin-left: 0px;
}
.details .orderId span:last-child {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 0px;
  background: url("../assets/images/myOrder/kefuf.gif");
}
.detail ul {
  height: 120px;
  margin: 0px;
  padding: 0px;
  background: #ffffff;
}
.detail ul li {
  display: inline-block;
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.detail .product img {
  display: inline-block;
  width: 70px;
  height: 70px;
}
</style>
<script>
export default {
  data() {
    return {
      img_url: "https://img01.vgtime.com/photo/web/150422121556476.jpg",
      tableData: [
        {
          name: "联想(Lenovo)YOGA5 Pro 标配版电脑",
          color: "深空灰",
          img: "/img/product_simg1.1d0a934c.png",
          price: 4888.0,
          num: 1,
          sum() {
            return this.price * this.num;
          }
        },
        {
          name: "联想(Lenovo)YOGA5 Pro 标配版电脑",
          color: "深空灰",
          img: "/img/product_simg1.1d0a934c.png",
          price: 4888.0,
          num: 1,
          sum() {
            return this.price * this.num;
          }
        },
        {
          name: "联想(Lenovo)YOGA5 Pro 标配版电脑",
          color: "深空灰",
          img: "/img/product_simg1.1d0a934c.png",
          price: 4888.0,
          num: 1,
          sum() {
            return this.price * this.num;
          }
        }
      ]
    };
  }
};
</script>