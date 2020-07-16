<template>
  <div>
    <div id="bigbox">
      <div class="hello">
        <div>
          <div class="hello_one">登陆学子商城</div>
          <div class="hello_two">新用户注册</div>
        </div>
        <div class="hello_hr">
          <hr class="jj" />
        </div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="0px"
          class="demo-ruleForm"
        >
          <el-form-item label prop="name">
            <el-input type="text" v-model="ruleForm.name" autocomplete="off" placeholder="请输入你的用户名"></el-input>
          </el-form-item>
          <el-form-item label prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              placeholder="请输入你的密码"
            ></el-input>
          </el-form-item>
          <div class="bt_foot">
            <input type="checkbox" />自动登陆
            <a class="bt_foot_two">忘记密码?</a>
          </div>

          <el-form-item>
            <el-button class="login_bt" type="primary" @click="submitForm('ruleForm')">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    var checkName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        name: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        name: [{ validator: checkName, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* [data-v-469af010]{
  width: 100px;
  height: 100px;
  background: darkolivegreen;
} */
#bigbox {
  height: 650px;
  background: url("../assets/images/regist.png") no-repeat;
  background-size: 100% 100%;
}
#design {
  height: 50px;
  background: darkolivegreen;
  text-align: center;
}
.hello {
  margin-top: 100px;
  float: right;
  margin-right: 100px;
  color: rgb(189, 197, 189);
  padding-top: 60px;
  width: 400px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.2);
}
.hello_hr {
  margin-top: -10px;
  width: 200px;
  padding-left: 100px;
}
.jj {
  width: 200px;
}
.hello_one {
  float: left;
  margin-left: 95px;
  width: 100px;
  margin-bottom: 20px;
}
.hello_two {
  font-size: 10px;
  margin-left: 220px;
  width: 100px;
  padding-top: 6px;
}
.login_bt {
  width: 100%;
}
.bt_foot {
  font-size: 6px;
  text-align: left;
  margin-top: -13px;
  margin-bottom: 5px;
}

.bt_foot_two {
  margin-left: 60px;
}
.demo-ruleForm {
  float: right;
  margin-right: 100px;
}
</style>
