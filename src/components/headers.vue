<template>
  <div class="headers">
    <div class="logo fl" @click="index()"></div>
    <div class="searchs fl">
      <input type="text" class="text" placeholder="请输入你要搜索的内容" />
      <div class="seek">分类搜索</div>
      <button class="search"></button>
    </div>
    <div class="tail fr">
      <ul>
        <li class="care">&nbsp;1</li>
        <li class="shopOrder" @click="order()">&nbsp;1</li>
        <li class="shopCar" @click="shopCar()">&nbsp;1</li>
        <li class="help" @click="orderMeg()">帮助</li>
        <li class="login" @click="login">登录</li>
      </ul>
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
.headers {
  margin: 0 auto;
  width: 1000px;
  height: 60px;
}
/* logo */
.logo {
  width: 200px;
  height: 60px;
  background: url("../assets/images/header/logo.png") left center no-repeat;
  cursor: pointer;
}

/* 搜索框 */
.searchs {
  position: relative;
  top: 15px;
  left: 0px;
}
.searchs .text {
  width: 447px;
  height: 30px;
  outline: none;
  border: 2px solid #79b9d5;
}
.searchs .seek {
  position: absolute;
  top: 6px;
  right: 10px;
  padding-right: 25px;
  color: #bbbbbb;
  background: url("../assets/images/header/header_normal.png") right center
    no-repeat;
}
.searchs .search {
  position: absolute;
  top: 0px;
  right: -36px;
  width: 37px;
  height: 37px;
  outline: none;
  border: none;
  background: url("../assets/images/header/search.png") center center no-repeat;
  background-size: cover;
}
/* 尾部 */
.tail {
  position: relative;
  top: 10px;
}
.tail ul {
  list-style-type: none;
}
.tail ul li {
  display: inline-block;
  width: 50px;
  height: 16px;
  font-size: 14px;

  text-align: center;
  line-height: 16px;
  border-left: 1px solid #000000;
  cursor: pointer;
  color: transparent;
}
.tail ul li:nth-child(4),
.tail ul li:nth-child(5) {
  color: #a1a1a1;
}
.tail .care {
  border-left: none;
  background: url("../assets/images/header/care.png") center center no-repeat;
}
.tail .shopOrder {
  background: url("../assets/images/header/order.png") center center no-repeat;
}
.tail .shopCar {
  background: url("../assets/images/header/shop_car.png") center center
    no-repeat;
}
</style>
<script>
export default {
  data() {
    return {
      order() {
        this.$router.push("/order");
      },
      shopCar() {
        this.$router.push("/shopCar");
      },
      index() {
        this.$router.push("/index");
      },
      orderMeg() {
        this.$router.push("/orderMeg");
      }
    };
  },
  methods: {
    login() {
      console.log("1");
      this.$router.push("/login");
    }
  }
};
</script>