<template>
  <div id="customerList" class="pageCommonStyle">
    <vc-search
      ref="child"
      :headTitArr="headTitArr"
      :pageNum="pageNum"
      :pageSize="pageSize"
      :requestUrl="requestUrl"
      @changeLoading="changeLoad"
      @sendData="showChildData"
    />
    <div class="operateBtn" style="display: inline-block;">
      <el-button type="primary" @click="exportFile">导出</el-button>
    </div>
    <el-divider></el-divider>
    <el-table
      v-loading="loading"
      style="width: 100%"
      element-loading-text="拼命加载中..."
      :data="tableData"
      border
    >
      <el-table-column
        v-for="(item,index) in headTitArrNew"
        :key="index"
        show-overflow-tooltip
        sortable
        :min-width="GLOBAL.minCellWidth"
        :width="item.fieldKey==='landlineNum'?'160px':''"
        :prop="item.fieldKey"
        :label="item.fieldName"
      >
        <template v-if="item.fieldKey == 'state'" scope="scopeStatus">
          <span v-if="scopeStatus.row.state == 0">未付款</span>
          <span v-else-if="scopeStatus.row.state == 1">未挂拍</span>
          <span v-else-if="scopeStatus.row.state == 2">取消挂拍</span>
          <span v-else-if="scopeStatus.row.state == 3">已完成</span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        width="100"
      >
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="查看" placement="top">
            <el-button
              size="mini"
              type="success"
              icon="el-icon-view"
              circle
              @click="readAuctionItem(scope.row,scope.$index)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="pageNum"
      :page-sizes="[15, 20, 30]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import VcSearch from '../../components/basic/CommonSearch'
import { downloadFile } from '@oit/utils'

export default {
  components: {
    VcSearch,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      total: 0,
      pageNum: 0,
      pageSize: 15,
      requestUrl: '',
      editIndex: null,
      dynamicParam: [],
      loading: true,
      tableData: [],
      headTitArr: [],
      searchParams: {},
    }
  },
  created() {
    this.requestUrl = this.Api.getAllAuction
    if (sessionStorage.headTitString && sessionStorage.headTitString.indexOf('@') != -1) {
      this.headTitArr = JSON.parse(sessionStorage.headTitString.split('@')[0])
    }
    this.dynamicParam = [
      {
        key: 'pageNum',
        value: '1',
        isTrue: true,
        msg: '请确认pageNum',
      },
      {
        key: 'pageSize',
        value: '15',
        isTrue: true,
        msg: '请确认pageSize',
      },
    ]
  },
  computed: {
    headTitArrNew() {
      return this.headTitArr.filter(item => !item.noTableShow)
    },
  },
  mounted() {
    this.pageNum = 1
    this.dynamicParam.forEach(el => {
      if (el.key === 'pageNum') {
        el.value = this.pageNum
      }
    })
  },
  activated() {
    if (sessionStorage.headTitString && sessionStorage.headTitString.indexOf('@') != -1) {
      this.headTitArr = JSON.parse(sessionStorage.headTitString.split('@')[0])
    }
    const _this = this
    _this.$refs.child.resetSearch(_this.dynamicParam, _this.pageNum)
  },
  watch: {},
  methods: {
    exportFile: function () {
      this.$axios
        .post(this.Api.getExportAuctionOrder, this.GLOBAL.paramJson({
          ...this.searchParams,
        }), {
          responseType: 'arraybuffer',
        })
        .then(res => {
          const date = new Date().toLocaleDateString().replace(/\//g, '-')
          downloadFile(res.data, `竞拍订单${date}.xls`)
        })
    },
    readAuctionItem(item, index) {
      this.editIndex = index
      this.$router.push({
        path: '/order/editauctioninfo',
        query: {
          item,
        },
      })
    },
    changeLoad(val) {
      this.loading = val
    },
    showChildData(tableData, total, tableEmptyText, pageNum, params) {
      this.searchParams = params
      if (tableData) {
        this.tableData = tableData
      }
      if (total) {
        this.total = total
      }
      if (tableEmptyText) {
        this.tableEmptyText = tableEmptyText
      }
      if (pageNum) {
        this.pageNum = pageNum
      }
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.dynamicParam.forEach(el => {
        if (el.key === 'pageSize') {
          el.value = this.pageSize
        }
      })
      this.$refs.child.parentMsgs(this.dynamicParam)
    },
    handleCurrentChange(val) {
      this.pageNum = val
      this.dynamicParam.forEach(el => {
        if (el.key === 'pageNum') {
          el.value = this.pageNum
        }
      })
      this.$refs.child.parentMsgs(this.dynamicParam)
    },
    indexMethod(index) {
      return (index + 1) + ((this.pageNum - 1) * this.pageSize)
    },
  },
}
</script>
