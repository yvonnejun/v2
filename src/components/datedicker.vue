<template>
  <div class="datedicker-wrap">
    <!-- elementui示例 -->
    <!--1、日期选择器1：最简单的日历控件-->
    <!--
      type	显示类型	string	year/month/date/week/ datetime/datetimerange/daterange	默认值date
      picker-options	当前时间日期选择器特有的选项参考下表	object	—	{}
    -->
    <div class="block">
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions0">
      </el-date-picker>
    </div>
    

    <!--2、日期选择器2：选择日期范围-->
    <!--
      type	显示类型	string	year/month/date/week/ datetime/datetimerange/daterange	默认值date daterange表示一个范围
      range-separator	选择范围时的分隔符	string	—	'-'
      start-placeholder	范围选择时开始日期的占位内容	string	
      end-placeholder	范围选择时结束日期的占位内容	string
      unlink-panels	在范围选择器里取消两个日期面板之间的联动	boolean	—	false
      在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用unlink-panels属性解除联动。
    -->
     <el-date-picker
        v-model="value6"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    


    <!--3、日期选择器3：多图片照片墙展示-->
    <!--
      使用 
      type="week"：表示周
      type="month" 表示月
      type="year" 表示年
      format="yyyy 第 WW 周" 表示格式化显示
     
    -->
    <div class="block">
      <span class="demonstration">周</span>
      <el-date-picker
        v-model="value3"
        type="week"
        format="yyyy 第 WW 周"
        placeholder="选择周">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">月</span>
      <el-date-picker
        v-model="value4"
        type="month"
        placeholder="选择月">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">年</span>
      <el-date-picker
        v-model="value5"
        align="right"
        type="year"
        placeholder="选择年">
      </el-date-picker>
    </div>
  
   
  </div>
</template>

<script>
export default { 
  name: 'datedicker',
  data () {
    return {
      // 日期控件中选择的日期时间就是存在下面的各个value值里面
      value1: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      pickerOptions0: {
        disableDate(time) { // 这就是日历控件的配置选择，配置条件可自定义
          return time.getTime() < Date.now() - 8.64e7
        }
      }
    }
  },
  methods: {
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.datedicker-wrap {
  width: 100%;
}
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
