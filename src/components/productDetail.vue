<template>
  <div class="bigdiv">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">学习用品</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">笔记本电脑</el-breadcrumb-item>
        <el-breadcrumb-item>联想Lenovo-YOGA 700</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="details">
      <div class="details-left">
        <div class="details-left-big">
          <img src="../assets/images/product_detail/product_detail_img2big.png" alt="error!" />
        </div>
        <div class="details-left-min">
          <img src="../assets/images/product_detail/product_detail_1.png" alt="error!" />
          <img src="../assets/images/product_detail/product_detail_img2.jpg" alt="error!" />
          <img src="../assets/images/product_detail/product_detail_img3.jpg" alt="error!" />
          <img src="../assets/images/product_detail/product_detail_img4.jpg" alt="error!" />
          <img src="../assets/images/product_detail/product_detail_img5.jpg" alt="error!" />
        </div>
      </div>
      <div class="detail-right">
        <h2>Lenovo-YOGA 700</h2>
        <h5>(i7-7500U 8G 256GSSD 2G独显 全高清IPS 360°翻转 正版office)</h5>
        <div class="details-right-price">
          学员售价：
          <span>￥5999.00</span>
          <p>服务承诺： *退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货</p>
        </div>客服：联系客服
        <img src="../assets/images/product_detail/kefuf.gif" alt="error!" />
        <br />
        <div class="fcolor">颜色：</div>
        <div class="yanse">
          <a href="#">
            <div>黑色</div>
          </a>
          <a href="#">
            <div>灰色</div>
          </a>
          <a href="#">
            <div>金色</div>
          </a>
          <a href="#">
            <div>白色</div>
          </a>
        </div>
        <br />
        <div class="fguige">规格:</div>
        <div class="guige">
          <a href="#">
            <div>15寸 15 1T</div>
          </a>
          <a href="#">
            <div>18寸 18 2T</div>
          </a>
          <a href="#">
            <div>19寸 19 3T</div>
          </a>
        </div>
        <br />
        <div class="fnum">数量：</div>
        <div class="num">
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
        <div class="anniu">
          <el-button class="bat1" type="primary" plain>立即购买</el-button>
          <el-button class="bat2" type="primary">
            <img src="../assets/images/product_detail/product_detail_img7.png" alt="error!" />加入购物车
          </el-button>
          <el-button class="bat3" type="primary">
            <img src="../assets/images/product_detail/product_detail_img6.png" alt="error!" />
            <br />收藏
          </el-button>
        </div>
      </div>
    </div>
    <div class="more">
      <div class="more-head">
        <span>为你推荐</span>
        <span>大家都在看</span>
      </div>
      <div class="display-more">
        <div>
          <img src="../assets/images/product_detail/product_detail_1.png" alt="error!" />
          <br />戴尔 DELL 燃7000 超霸
        </div>
        <div>
          <img src="../assets/images/product_detail/product_detail_2.png" alt="error!" />
          <br />戴尔 DELL 魔方15MF Pro灵
        </div>
        <div>
          <img src="../assets/images/product_detail/product_detail_3.png" alt="error!" />
          <br />联想 Lenovo YOGA900 多彩版
        </div>
        <div>
          <img src="../assets/images/product_detail/product_detail_4.png" alt="error!" />
          <br />ThinkPad New S2 13.3寸
        </div>
      </div>
    </div>
    <div class="introduction">
      <div class="introduction-left">
        <div class="tiao">
          <div>商品详情</div>
          <div>商品评价</div>
        </div>
        <div class="cansu">
          <div class="cansu-title">
            <span>规格参数</span>
            <img src="../assets/images/product_detail/product_detail_icon_g_1.png" alt="error!" />
          </div>
          <div class="cansu-body">
            <div>商品名称：联想YOGA 710</div>
            <div>系统：Windows10</div>
            <div>内存容量：8G</div>
            <div>分辨率：全高清屏（1920*1080）</div>
            <div>显卡型号：GT940M</div>
            <div>处理器：Intel i7低功耗版</div>
            <div>显存容量：2G</div>
            <div>分类：轻薄本</div>
            <div>硬盘容量：256G固态</div>
          </div>
          <div class="cansu-title">
            <span>商品介绍</span>
            <img src="../assets/images/product_detail/product_detail_icon_4.png" alt="error!" />
          </div>
          <div class="cansu-bigimg">
            <img src="../assets/images/product_detail/product_detail_img8.png" alt="error!" />
          </div>
          <div class="cansu-title">
            <span>售后保障</span>
            <img src="../assets/images/product_detail/product_detail_icon_d_1.png" alt="error!" />
          </div>
          <div class="cansu-title-bottom">
            <div>
              <img src="../assets/images/product_detail/product_detail_img16.png" alt="error!" />
              <span>正品保障</span>
            </div>
            <p>阿甲学子商城向您保证所售商品为正品行货，阿甲自营商品开具机打发票或电子发票。</p>
          </div>
          <div class="cansu-title-bottom">
            <div>
              <img src="../assets/images/product_detail/product_detail_img16.png" alt="error!" />
              <span>全国联保</span>
            </div>
            <p>
              凭质保证书及阿甲商城发票，可享受全国联保服务，与您亲临商场选购的商品享受相同的质量保障。阿甲商城还为您提供具有竞争力的商品价格和运费
              政策，请您放心购买！住：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商场图片
              、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！
            </p>
          </div>
          <div class="cansu-title">
            <span>包装清单</span>
            <img src="../assets/images/product_detail/product_detail_icon_bao_1.png" alt="error!" />
          </div>
          <div class="qindan">
            笔记本 x1 适配器 x1 电源线 x1 说明书（电子版） x1 备注：笔记本电脑的背面只会标注此电脑的系列，例如：XPS 13-9360 ， 如果您
            需要核实此电脑的具体配置型号是否与阿甲页面相符，可电话咨询阿甲厂商：800-858-2969
          </div>
        </div>
      </div>
      <div class="introduction-right">
        <div class="bat-img">
          <a href="#">
            <img src="../assets/images/product_detail/product_detail_img9.png" alt="error!" />
          </a>
        </div>
        <div class="bat-s">
          <a href="#">
            <div>
              <img src="../assets/images/product_detail/product_detail_icon_1.png" alt="error!" />规格参数
            </div>
          </a>
          <a href="#">
            <div>
              <img src="../assets/images/product_detail/product_detail_icon_4.png" alt="error!" />商品介绍
            </div>
          </a>
          <a href="#">
            <div>
              <img src="../assets/images/product_detail/product_detail_icon_3.png" alt="error!" />售后保障
            </div>
          </a>
          <a href="#">
            <div>
              <img src="../assets/images/product_detail/product_detail_icon_2.png" alt="error!" />包装清单
            </div>
          </a>
          <a href="#">
            <div>
              <img src="../assets/images/product_detail/product_detail_icon_up_1.png" alt="error!" />回到顶部
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vDetails",
  data() {
    return {
      num: 1,
      activeName: "first"
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.bigdiv {
  width: 1000px;
  height: 5500px;
  margin: 0 auto;
  background-color: #f5f5f5;
}
.details {
  height: 500px;
}
.details-left,
.details-right {
  background-color: #f5f5f5;
  float: left;
  width: 500px;
}
.details-left {
  padding-top: 40px;
}
.details-left-min img {
  margin: 0 5px;
}
.details-right-price {
  float: left;
  width: 496px;
  margin: 10px 0;
  padding: 20px 0;
  font-size: 14px;
  background: #e8e8e8;
  box-shadow: -2px -2px 10px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.5);
}
.details-right-price p {
  margin: 10px 0;
}
.details-right-price span {
  color: #169eee;
  font-size: 30px;
}
.fcolor {
  float: left;
  margin: 10px 0;
  line-height: 50px;
}
.yanse {
  height: 50px;
}
.yanse div {
  background: #f2eadf;
  float: left;
  height: 50px;
  width: 50px;
  text-align: center;
  color: black;
  line-height: 50px;
  margin: 10px 10px;
}
.fguige {
  float: left;
  line-height: 50px;
}
.guige {
  height: 50px;
}
.guige div {
  background: white;
  float: left;
  height: 50px;
  width: 100px;
  text-align: center;
  color: black;
  line-height: 50px;
  border: solid 1px black;
  margin: 0 10px;
}
.fnum {
  float: left;
  line-height: 50px;
}
.num {
  float: left;
  line-height: 50px;
  width: 400px;
}
.anniu {
  margin-top: 60px;
}
.bat1,
.bat2,
.bat3 {
  float: left;
  margin-top: 10px;
  margin-right: 30px;
  height: 50px;
}
.more .more-head span:nth-child(1) {
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
}
.more .more-head span:nth-child(2) {
  color: white;
  font-size: 13px;
  padding: 0 4px;
  background: black;
}
.more .display-more {
  margin-top: 20px;
  height: 200px;
  border: solid 1px #dddddd;
}
.more .display-more div {
  float: left;
  margin: 0 26px;
  font-size: 14px;
  text-align: center;
}
.introduction {
  height: 500px;
}
.introduction-left {
  float: left;
  width: 750px;
}
.introduction-right {
  float: left;
  width: 250px;
}
.introduction-right .bat-img {
  margin-bottom: 50px;
}
.introduction-right .bat-s a {
  text-decoration: none;
}
.introduction-right .bat-s a div {
  width: 160px;
  height: 60px;
  margin: 10px 4px;
  background: #e8e8e8;
  box-shadow: -2px -2px 4px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.5);
  font-size: 18px;
  color: #8b8b8b;
  text-align: center;
  line-height: 60px;
}
.introduction-right .bat-s div img {
  margin-right: 16px;
}
.tiao {
  height: 50px;
  line-height: 50px;
  background: #e2e2e3;
}
.tiao div {
  float: left;
  margin: 0 10px;
  padding: 0 10px;
  height: 47px;
}
.tiao div:nth-child(1) {
  color: black;
  font-weight: bold;
  border-bottom: solid 3px #0ba0ee;
}
.tiao div:nth-child(2) {
  color: #878787;
  font-weight: bold;
}
.cansu .cansu-title {
  margin-top: 30px;
  height: 60px;
  line-height: 60px;
  border-bottom: solid 1px #eeeeee;
}
.cansu .cansu-title span,
img {
  vertical-align: middle;
}
.cansu .cansu-title span {
  color: #858585;
  font-size: 20px;
}
.cansu .cansu-title img {
  margin-left: 8px;
}
.cansu-title-bottom {
  margin-top: 30px;
}
.cansu-title-bottom span,
img {
  vertical-align: middle;
}
.cansu-title-bottom span {
  margin-left: 10px;
  color: #10a2e9;
  font-size: 20px;
  font-weight: bold;
}
.cansu-title-bottom p {
  margin-top: 10px;
  color: #818181;
}
.cansu-body div {
  float: left;
  margin: 10px 0;
  width: 250px;
  font-size: 14px;
}
.cansu-bigimg {
  margin-top: 80px;
}
.qindan {
  margin: 30px 0;
  font-size: 14px;
  color: #818181;
}
</style>
