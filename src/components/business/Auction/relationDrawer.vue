<template>
  <div class="auctionRelation">
    <el-drawer
      title="积分/宝玉信息"
      :append-to-body="true"
      :modal-append-to-body="true"
      :before-close="handleClose"
      :visible="RelationDrawer"
      :direction="direction">
      <el-form style="width:80%;margin: 0 auto" :model="RelationRuleForm" :rules="RelationRules" ref="RelationruleForm">
        <el-form-item label="积分限制" prop="integralLimit">
          <el-input
            v-model.number="RelationRuleForm.integralLimit"
            oninput="value=value.replace(/[^\d]/g,'')"
            clearable
            placeholder="请输入积分">
          </el-input>
        </el-form-item>
        <el-form-item label="宝玉限制"  prop="byLimit">
          <el-input
            v-model.number="RelationRuleForm.byLimit"
            oninput="value=value.replace(/[^\d]/g,'')"
            clearable
            placeholder="请输入宝玉">
          </el-input>
        </el-form-item>
      </el-form>
      <div style="width: 80%;margin:0 auto;">
        <el-button style="width:100%" type="primary" @click="submit">提交</el-button>
      </div>
    </el-drawer>
  </div>
</template>

<script>

export default {
  name: 'RelationDrawer',
  data() {
    return {
      isAdd: false,
      RelationDrawer:false,
      direction: 'rtl',
      RelationRuleForm:{
        byLimit: '',
        integralLimit: '',
        conferenceCode: '',
        roomCode: '',
      },
      RelationRules:{
        byLimit: [{required: true,message: '请输入宝玉',trigger: 'blur'},{type:'number',message: '请输入数字',trigger: 'blur'}],
        integralLimit: [{required: true,message: '请输入积分',trigger: 'blur'},{type:'number',message: '请输入数字',trigger: 'blur'}],
      },
    }
  },
  created() {
  },
  mounted() {
    const _this = this
  },
  methods: {
    handleClose() {
      this.RelationDrawer = false
    },
    handleOpen(data) {
      this.RelationRuleForm = data
      this.RelationDrawer = true
    },
    submit() {
      const _this = this
      _this.$refs.RelationruleForm.validate((valid) => {
        if (valid) {
          let con = this.RelationRuleForm
          const jsonParam = _this.GLOBAL.paramJson(con)
          this.$axios.post(this.Api.addOrUpdateAuctionRelation, jsonParam).then((res) => {
            if (res.data.head.status === 0) {
              _this.$message({
                message: res.data.head.msg,
                type: 'success',
              })
              _this.$emit('relationChange',con)
              _this.handleClose()
            } else {
              _this.$message({
                message: res.data.head.msg,
                type: 'error',
              })
            }
          }).catch(err => {
            console.log(err)
          })
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
  ::v-deep .el-range-separator{
    width: 8%;
  }
  .global-messageZindex{
    z-index:3000 !important;
  }
</style>
