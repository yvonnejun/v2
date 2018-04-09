<template>
  <div class="elementuploadfile-wrap">
    <!-- elementui示例 -->
    <!--1、文件上传1：图片文本形式展示-->
    <!--
      action	必选参数，上传的后台服务器地址
      multiple	是否支持多选文件
      on-success	文件上传成功时的钩子：function(response, file, fileList)
      on-error	文件上传失败时的钩子：function(err, file, fileList)
      on-progress	文件上传时的钩子：function(event, file, fileList)
      list-type	文件列表的类型
      on-preview	点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据:function(file)
      on-remove	文件列表移除文件时的钩子:function(file, fileList)
      before-remove	删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止上传。:function(file, fileList)
      on-exceed	文件超出个数限制时的钩子
      limit	最大允许上传个数
      slot="tip"：标记这只是一个提示框
      file-list	上传的文件列表(可动态添加，也可初始赋值), 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]：array
    -->
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <!--2、文件上传2：单图片上传-->
    <!--
      action	必选参数，上传的后台服务器地址
      show-file-list	是否显示已上传文件列表
      accept	接受上传的文件类型（thumbnail-mode 模式下此参数无效）
      on-success	文件上传成功时的钩子：function(response, file, fileList)
      before-upload	上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。:function(file)
      file-list	上传的文件列表(可动态添加，也可初始赋值), 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]：array
    -->
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <!--这个demo只支持单个图片上传，上传后，上传图标消失，只显示单个上传图片-->
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>


    <!--3、文件上传3：多图片照片墙展示-->
    <!--
      使用 list-type 属性来设置文件列表的样式。
      list-type	文件列表的类型：text/picture/picture-card
      值解析:picture-card是图片卡片的形式
             picture是图片列表的形式
             text就是文本字符串列表的形式

      action	必选参数，上传的后台服务器地址
      on-preview	点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据:function(file)
      on-remove	文件列表移除文件时的钩子:function(file, fileList)
      :visible.sync="dialogVisible"：这就是是否显示el-dialog的意思
      sync是同步的意思，async是异步的意思，这里sync表示修饰符
    -->
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <!--这个弹窗的效果是模态框展示大图-->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
   
  </div>
</template>

<script>
export default { 
  name: 'elementuploadfile',
  data () {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      imageUrl: '',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
      // 文件上传1
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      // 文件上传2
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG或PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      // 文件上传3
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.elementuploadfile-wrap {
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
