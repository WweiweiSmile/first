<template>
  <div class="shopCar">
    <div class="title cl">
      <div class="name fl">购物车</div>
      <div class="computed fr">
        <div class="chekProduct fl">
          已选
          <span class="chekNum">{{0}}</span>
          件商品
        </div>
        <div class="sumPrice fl">
          合计(不含运费):
          <span class="sum">{{0.00}}元</span>
        </div>
      </div>
    </div>

    <table class="table">
      <tr class="head">
        <th style="width:55px">
          <input type="checkbox" />全选
        </th>
        <th style="width:400px">商品</th>
        <th>单价(元)</th>
        <th>数量</th>
        <th>金额</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in tableData" :key="index" class="productRow">
        <td>
          <input type="checkbox" name id />
        </td>
        <td class="product">
          <div>
            <img :src="item.img" />
            <div class="details">
              <div class="name">{{item.name}}</div>
              <div class="color">颜色:{{item.color}}</div>
            </div>
          </div>
        </td>
        <td class="price">
          <div>
            <div class="discount">阿甲专享价</div>
            <div>￥{{item.price}}</div>
          </div>
        </td>
        <td class="num">
          <div>
            <span>-</span>
            <span>{{item.num}}</span>
            <span>+</span>
          </div>
        </td>
        <td class="sum">
          <div>￥ {{item.sum()}}</div>
        </td>
        <td>
          <div>删除</div>
        </td>
      </tr>
    </table>
    <div class="tfoot">
      <div class="opations fl">
        <input type="checkbox" name id />
        <span>全选</span>
        <span>删除</span>
        <span>清空失效商品</span>
      </div>
      <div class="bill cl">
        <div class="computed fr">
          <div class="chekProduct fl">
            已选
            <span class="chekNum">{{0}}</span>
            件商品
          </div>
          <div class="sumPrice fl">
            合计(不含运费):
            <span class="sum">{{0.00}}元</span>
          </div>
          <div class="bills fl">去结算</div>
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
.shopCar {
  width: 1000px;
  margin: 0px auto;
}
/* 购物车的标题 caption */
.shopCar .title {
  width: 1000px;
}
.shopCar .title .name {
  font-size: 20px;
}
.shopCar .title .chekProduct {
  margin-right: 10px;
}
.shopCar .title .chekProduct .chekNum {
  font-weight: 600;
  color: #33a1e0;
}
.shopCar .title .sumPrice .sum {
  font-weight: 600;
  color: #33a1e0;
}
/* 购物车的主体 */
.table {
  width: 1000px;
  text-align: center;
  color: #a0a0a0;
  border-spacing: 0px 15px;
}
.head {
  height: 40px;
  margin-bottom: 10px;
  border: none;
  background: #eaeaea;
  font-size: 14px;
}
.table .productRow {
  background: #ffffff;
}
.table .product {
  margin-top: 20px;
}
.table .product img {
  width: 84px;
  height: 84px;
  float: left;
  display: block;
}
.table .product .details {
  display: block;
  float: left;
  width: 300px;
  margin-left: 10px;
  text-align: left;
  font-size: 14px;
}
.table .product .details .color {
  margin-top: 10px;
}

.table .price .discount {
  color: #4aade4;
  font-size: 14px;
  font-weight: 800;
}

.table .num span {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: #e8e8e8;
  border: 1px solid #cdcdcd;
  border-right: none;
  cursor: pointer;
}
.table .num span:nth-child(2) {
  background-color: #ffffff;
}
.table .num span:nth-child(3) {
  border-right: 1px solid #cdcdcd;
}

.table .product,
.table .price,
.table .num,
.table .sum {
  border-right: 1px solid #ececec;
}
/* 表格尾部 tfoot */
.tfoot {
  width: 1000px;
  margin-top: 30px;
}
.tfoot .opations span {
  margin-left: 20px;
  cursor: pointer;
}
.tfoot .opations span:nth-child(4) {
  color: #f6f6f6;
  background: #cccaca;
}
.tfoot .bill span {
  line-height: 40px;
}
.tfoot .bill .chekProduct {
  margin-right: 20px;
}
.tfoot .bill .chekProduct .chekNum {
  font-weight: 600;
  color: #33a1e0;
}
.tfoot .bill .chekProduct,
.tfoot .bill .sumPrice {
  color: #848283;
}
.tfoot .bill .sumPrice .sum {
  font-size: 20px;
  font-weight: 600;
  color: #33a1e0;
}
.tfoot .bill .bills {
  margin-left: 40px;
  width: 160px;
  height: 40px;
  background: #1ba9f1;
  color: #ffffff;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name:
            "联想(Lenovo)YOGA5 Pro 标配版电脑(i5-7200U,8G 521G SSD FHD IPS)银",
          color: "深空灰",
          img: "/img/product_simg1.1d0a934c.png",
          price: 4888.0,
          num: 1,
          sum() {
            return this.price * this.num;
          }
        },
        {
          name:
            "联想(Lenovo)YOGA5 Pro 标配版电脑(i5-7200U,8G 521G SSD FHD IPS)银",
          color: "深空灰",
          img: "/img/product_simg1.1d0a934c.png",
          price: 4888.0,
          num: 1,
          sum() {
            return this.price * this.num;
          }
        },
        {
          name:
            "联想(Lenovo)YOGA5 Pro 标配版电脑(i5-7200U,8G 521G SSD FHD IPS)银",
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