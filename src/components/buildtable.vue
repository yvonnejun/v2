<template>
  <div class="buildtable-wrap">
    <!-- 实战项目表单 -->
    <h2 class="buildtable-title">业务信息</h2>
    <table cellspacing="0">
      <colgroup>
        <col width="15%">
        <col width="19%">
        <col width="13%">
        <col width="22%">
        <col width="13%">
        <col width="18%">
      </colgroup>
      <tbody>
        <tr>
          <td>申请人(单位)名称</td>
          <td colspan="5"><input type="text" class="buildtable-input"></td>
        </tr>
        <tr>
          <td>拟开办企业名称</td>
          <td colspan="5"><input type="text" class="buildtable-input"></td>
        </tr>
        <tr>
          <td>拟开办企业地址</td>
          <td colspan="5"><input type="text" class="buildtable-input"></td>
        </tr>
        <tr>
          <td rowspan="3">拟经营范围</td>
          <td colspan="5" align="left">
            <input type="checkbox" value="prescribeddrug" class="buildtable-checkbox"><span class="letterstext">处方药</span>
            <input type="checkbox" value="overcounterdrug" class="buildtable-checkbox">非处方药
            <input type="checkbox" value="classbovercounterdrug" class="buildtable-checkbox">乙类处方药
          </td>
        </tr>
        <tr>
          <td colspan="5" align="left">
            <input type="checkbox" value="cherbalmedicene" class="buildtable-checkbox">中饮药片
            <input type="checkbox" value="cpatentdrug" class="buildtable-checkbox"><span class="letterstext">中成药</span>
            <input type="checkbox" value="chemicalagent" class="buildtable-checkbox">化学药制剂
            <input type="checkbox" value="antibiotics" class="buildtable-checkbox">抗生素制剂
          </td>
        </tr>
        <tr>
          <td colspan="5" align="left">
            <input type="checkbox" value="biochemicaldrugs" class="buildtable-checkbox">生化药品
            <input type="checkbox" value="biologicals" class="buildtable-checkbox">生物制品
            <input type="checkbox" value="psychotropicdrug" class="buildtable-checkbox">精神药品(限第二类)
          </td>
        </tr>
        <tr>
          <td>经营方式</td>
          <td colspan="2">
            <input type="radio" name="retail">零售
            <input type="radio" name="retail">零售连锁
          </td>
          <td>经济性质</td>
          <td colspan="2"><input type="text" class="buildtable-input"></td>
        </tr>
        <tr>
          <td>法定代表人</td>
          <td><input type="text" class="buildtable-input"></td>
          <td>学历及专业</td>
          <td><input type="text" class="buildtable-input"></td>
          <td>执业药师</td>
          <td>
            <input type="radio" name="apothecary1">是
            <input type="radio" name="apothecary1">否
          </td>
        </tr>
        <tr>
          <td>企业负责人</td>
          <td><input type="text" class="buildtable-input"></td>
          <td>学历及专业</td>
          <td><input type="text" class="buildtable-input"></td>
          <td>执业药师</td>
          <td>
            <input type="radio" name="apothecary2">是
            <input type="radio" name="apothecary2">否
          </td>
        </tr>
        <tr>
          <td>质量负责人</td>
          <td><input type="text" class="buildtable-input"></td>
          <td>学历及专业</td>
          <td><input type="text" class="buildtable-input"></td>
          <td>执业药师</td>
          <td>
            <input type="radio" name="apothecary3">是
            <input type="radio" name="apothecary3">否
          </td>
        </tr>
        <tr>
          <td>联系人</td>
          <td><input type="text" class="buildtable-input"></td>
          <td>联系电话</td>
          <td colspan="3"><input type="text" class="buildtable-input"></td>
        </tr>
        <tr>
          <td>申请开办主要理由</td>
          <td colspan="5"><textarea name="" id="" cols="30" rows="10" class="buildtable-textarea"></textarea></td>
        </tr>
        <tr>
          <td>药学技术人员数量及学历情况</td>
          <td colspan="5"><textarea name="" id="" cols="30" rows="10" class="buildtable-textarea"></textarea></td>
        </tr>
      </tbody>
    </table>
    
   
  </div>
</template>

<script>
export default { //vue格式的组件内部直接作用与当前的模板template,是不需要绑定el："#id"来指定绑定元素作用域的,真正的el只绑定再App这个根组件上面
  name: 'buildtable',
  data () {
    return {
      data: {
        msg: '欢迎来到buildtable组件'
      },
      event: {

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.buildtable-wrap {
  width: 739px;
  min-height: 609px;
  margin: 0 auto;
}
.buildtable-title {
  color: #0000ff;
  border-left: 4px solid #0000ff;
  padding-left: 6px;
  text-align: left;
  font-weight: bold;
  font-size: 14px;
  height: 14px;
  line-height: 14px;
  margin-bottom: 12px;
}
.buildtable-wrap table tr td {
  border: 1px solid #797979;
  padding: 5px;
  font-size: 14px;
}
.buildtable-input {
  width: 100%;
  height: 25px;
  line-height: 25px;
  box-shadow: 0 -1px #797979;
  border-top: 1px solid #bebebe;
  border-left: 1px solid #bebebe;
  text-indent: 0.6em;
}
.buildtable-textarea {
  width: 100%;
  height: 95px;
  box-shadow: 0 -1px #797979;
  border-top: 1px solid #bebebe;
  border-left: 1px solid #bebebe;
  resize: none;
  text-indent: 0.6em;
}
.buildtable-checkbox {
  margin-left: 70px;
  position: relative;
  top: 2px;
}
.letterstext {
  letter-spacing: 5px;
}
</style>
