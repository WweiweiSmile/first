<template>
  <div>
    <div class="login_big">
      <div class="bigbox">
        <div class="login_biaoti">
          <div class="user_one">
            <p>新用户注册</p>
          </div>
          <div class="user_two">
            <router-link to="/register">直接登陆</router-link>
            <!-- <a href="#">直接登陆</a> -->
          </div>
        </div>
        <div class="bigbox_two">
          <el-form
            id="login_box"
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm login_box"
          >
            <el-form-item label="用户名" prop="pass">
              <el-input type="text" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="登陆密码" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="checkPass">
              <el-input
                type="text"
                v-model="ruleForm.checkPass"
                autocomplete="off"
                placeholder="请输入邮箱地址"
              ></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="age">
              <el-input v-model.number="ruleForm.age" placeholder="请输入你的手机号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="bt_add" type="primary" @click="submitForm('ruleForm')">提交注册信息</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
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
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
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
<style scoped>
.el-form-item__label {
  color: aliceblue !important;
}
a {
  text-decoration: none;
  color: aliceblue;
}
.bigbox {
  float: right;
  margin-right: 100px;
  margin-top: 100px;
  width: 500px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.2);
}
.user_one {
  font-size: 18px;
  width: 330px;
  float: left;
}
.user_two {
  padding-top: 25px;
  height: 50px;
}
.login_box {
  width: 400px;
  height: 500px;
  float: right;
  margin-right: 250px;
}
.bigbox_two {
  float: right;
  width: 400px;
  margin-right: -160px;
}
.login_biaoti {
  color: aliceblue;
  margin-left: 20px;
  text-align: left;
}
.login_big {
  background: url("../assets/images/regist.png") no-repeat;
  height: 650px;
  width: 100%;
  background-size: 100% 100%;
}
.bt_add {
  width: 100%;
}
</style>