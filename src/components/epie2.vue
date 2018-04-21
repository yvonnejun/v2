
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.demo-wrap {
  width: 100%;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
<template>
  <div class="demo-wrap">
    <el-carousel indicator-position="outside" height='536px'>
        <el-carousel-item v-for="item in dataimg" :key="item">  
            <img :src="item.url">  
        </el-carousel-item>  
        <el-carousel-item v-for="item in 2" :key="item">
            <div id="mainpie1" :style="{width:'1120px',height:'536px', textAlign:'center'}"></div>
        </el-carousel-item>
        <!-- <el-carousel-item v-for="item in 2" :key="item">
            <div id="mainpie2"  v-show="flag1" :key="2" :style="{width:'1120px',height:'536px', textAlign:'center'}"></div>
        </el-carousel-item> -->
    </el-carousel>
    <!-- bootstrap轮播图 -->
    <!-- <div id="myCarousel" class="carousel slide"> -->
        <!-- 轮播（Carousel）指标 -->
        <!-- <ol class="carousel-indicators"> -->
            <!-- <li data-target="#myCarousel" data-slide-to="0" class="active"></li> -->
            <!-- <li data-target="#myCarousel" data-slide-to="1"></li> -->
            <!-- <li data-target="#myCarousel" data-slide-to="2"></li> -->
        </ol>   
        <!-- 轮播（Carousel）项目 -->
        <!-- <div class="carousel-inner"> -->
            <!-- <div class="item active"> -->
                <!-- <div id="mainpie1"  v-show="flag1" :key="1" :style="{width:'1120px',height:'536px', textAlign:'center'}"></div> -->
            <!-- </div> -->
            <!-- <div class="item"> -->
                <!-- <div id="mainpie2"  v-show="flag1" :key="2" :style="{width:'1120px',height:'536px', textAlign:'center'}"></div> -->
            <!-- </div> -->
            <!-- <div class="item">
                <img src="/wp-content/uploads/2014/07/slide3.png" alt="Third slide">
            </div> -->
        <!-- </div> -->
        <!-- 轮播（Carousel）导航 -->
        <!-- <a class="carousel-control left" href="#myCarousel" 
        data-slide="prev"> <span _ngcontent-c3="" aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span></a>
        <a class="carousel-control right" href="#myCarousel" 
        data-slide="next">&rsaquo;</a> -->
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
var echarts = require('echarts');
var changeInfoData = [];
export default { 
  name: 'demo', // 注意关键字最好不要用来命名
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {
        flag1: true
    }
  },
  computed: {
    
  },
  methods: {
    doClick () {

    }
  },
  directives: {

  },
  created () {

  },
  mounted () {
      function initEchartPie1(data, id) {
            var labelTop = {
                normal : {
                    // color: '#206DB1', // 默认色圆环部分变成兰色或下面的渐变蓝色
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ //饼图径向渐变是0,0,1,0的组合
                                // 0% 处的颜色   
                                offset: 0, color: '#206DB1'},
                                {
                                // 100% 处的颜色
                                offset: 1, color: '#1e3489' 
                                }], false),
                    label : {
                        show : true,
                        position : 'center',
                        formatter : '{b}',
                        textStyle: {
                            baseline : 'bottom',
                        }
                    },
                    labelLine : {
                        show : false
                    }
                }
            };
            var labelFromatter = {
                normal : {
                    label : {
                        // width: 12, // 限制文本块的宽度，实测无效果
                        formatter : function (params){
                            // return params.name + params.value + '%'
                            if (params.name == '已存') {
                                return '{color1|' + params.name + '}{color1|' + params.value + '%}'; 
                            } else {
                                return '{color2|' + params.name + '}{color2|' + params.value + '%}'; 
                            }
                        },
                        rich: {  
                            color1: {  
                                color: '#206DB1'  
                            },  
                            color2: {  
                                color: '#29C29C'  
                            }  
                        },  
                        textStyle: {
                            baseline : 'top'
                        },
                        
                    }
                },
            }
            var labelBottom = {
                normal : {
                    // color: '#29C29C', // 灰色圆环部分变成绿色
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ //饼图径向渐变是0,0,1,0的组合
                                // 0% 处的颜色   
                                offset: 0, color: '#2AC7A0'},
                                {
                                // 100% 处的颜色
                                offset: 1, color: '#218D72' 
                                }], false),
                    label : {
                        show : true,
                        position : 'center'
                    },
                    labelLine : {
                        show : false
                    }
                },
            };
            var radius = [60, 77]; // 圆环的半径是双半径，双半径之差就是圆环环子的宽度
            var option = {
                series : [
                    {
                        type : 'pie',
                        center : ['20%', '30%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : [0, 40], // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        hoverOffset: 0,
                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'center',
                                    color: '#fff',
                                    fontSize: 16
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {  // 高亮属性也可写在单个itemStyle中让单个圆或圆环对象生效
                                shadowBlur: 10,  // 高亮模糊度设为10
                                shadowOffsetX: 0,  // 高亮偏移量设为0
                                shadowColor: 'rgba(0, 0, 0, 0.5)', // 高亮背景投影色
                                // color: 'rgba(0, 0, 0, 0)'  // 高亮前景色
                            }  
                        },
                        data : [
                            {name:'1号柜', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['20%', '30%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : radius, // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'闲置', value:54, itemStyle : labelBottom},
                            {name:'已存', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['49%', '30%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : [0, 40], // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        hoverOffset: 0,
                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'center',
                                    color: '#fff',
                                    fontSize: 16
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {  // 高亮属性也可写在单个itemStyle中让单个圆或圆环对象生效
                                shadowBlur: 10,  // 高亮模糊度设为10
                                shadowOffsetX: 0,  // 高亮偏移量设为0
                                shadowColor: 'rgba(0, 0, 0, 0.5)', // 高亮背景投影色
                                // color: 'rgba(0, 0, 0, 0)'  // 高亮前景色
                            }  
                        },
                        data : [
                            {name:'2号柜', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['49%', '30%'],
                        radius : radius,
                        x:'20%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'闲置', value:44, itemStyle : labelBottom},
                            {name:'已存', value:56, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['77%', '30%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : [0, 40], // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        hoverOffset: 0,
                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'center',
                                    color: '#fff',
                                    fontSize: 16
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {  // 高亮属性也可写在单个itemStyle中让单个圆或圆环对象生效
                                shadowBlur: 10,  // 高亮模糊度设为10
                                shadowOffsetX: 0,  // 高亮偏移量设为0
                                shadowColor: 'rgba(0, 0, 0, 0.5)', // 高亮背景投影色
                                // color: 'rgba(0, 0, 0, 0)'  // 高亮前景色
                            }  
                        },
                        data : [
                            {name:'3号柜', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['77%', '30%'],
                        radius : radius,
                        x:'40%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'闲置', value:35, itemStyle : labelBottom},
                            {name:'已存', value:65, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['20%', '70%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : [0, 40], // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        hoverOffset: 0,
                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'center',
                                    color: '#fff',
                                    fontSize: 16
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {  // 高亮属性也可写在单个itemStyle中让单个圆或圆环对象生效
                                shadowBlur: 10,  // 高亮模糊度设为10
                                shadowOffsetX: 0,  // 高亮偏移量设为0
                                shadowColor: 'rgba(0, 0, 0, 0.5)', // 高亮背景投影色
                                // color: 'rgba(0, 0, 0, 0)'  // 高亮前景色
                            }  
                        },
                        data : [
                            {name:'4号柜', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['20%', '70%'],
                        radius : radius,
                        x:'60%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'闲置', value:30, itemStyle : labelBottom},
                            {name:'已存', value:70, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['49%', '70%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : [0, 40], // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        hoverOffset: 0,
                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'center',
                                    color: '#fff',
                                    fontSize: 16
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {  // 高亮属性也可写在单个itemStyle中让单个圆或圆环对象生效
                                shadowBlur: 10,  // 高亮模糊度设为10
                                shadowOffsetX: 0,  // 高亮偏移量设为0
                                shadowColor: 'rgba(0, 0, 0, 0.5)', // 高亮背景投影色
                                // color: 'rgba(0, 0, 0, 0)'  // 高亮前景色
                            }  
                        },
                        data : [
                            {name:'5号柜', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['49%', '70%'],
                        radius : radius,
                        x:'80%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'闲置', value:27, itemStyle : labelBottom},
                            {name:'已存', value:73,itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['77%', '70%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : [0, 40], // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        hoverOffset: 0,
                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'center',
                                    color: '#fff',
                                    fontSize: 16
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {  // 高亮属性也可写在单个itemStyle中让单个圆或圆环对象生效
                                shadowBlur: 10,  // 高亮模糊度设为10
                                shadowOffsetX: 0,  // 高亮偏移量设为0
                                shadowColor: 'rgba(0, 0, 0, 0.5)', // 高亮背景投影色
                                // color: 'rgba(0, 0, 0, 0)'  // 高亮前景色
                            }  
                        },
                        data : [
                            {name:'6号柜', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['77%', '70%'],
                        radius : radius,
                        y: '55%',   // for funnel
                        x: '0%',    // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'闲置', value:22, itemStyle : labelBottom},
                            {name:'已存', value:78,itemStyle : labelTop}
                        ]
                    },
                ]
            };
          var echart = echarts.init(document.getElementById(id));
          echart.setOption(option)
      }
      function initEchartPie2(data, id) {
            var labelTop = {
                normal : {
                    color: '#206DB1', // 默认色圆环部分变成兰色或下面的渐变蓝色
                    // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ //饼图径向渐变是0,0,1,0的组合
                    //             // 0% 处的颜色   
                    //             offset: 0, color: '#206DB1'},
                    //             {
                    //             // 100% 处的颜色
                    //             offset: 1, color: '#1e3489' 
                    //             }], false),
                    label : {
                        show : true,
                        position : 'center',
                        formatter : '{b}',
                        textStyle: {
                            baseline : 'bottom',
                        }
                    },
                    labelLine : {
                        show : false
                    }
                }
            };
            var labelFromatter = {
                normal : {
                    label : {
                        formatter : function (params){
                            return params.name + params.value + '%'
                            // if (params.name == '已存') {
                            //     return '{color1|' + params.name + '}{color1|' + params.value + '%}'; 
                            // } else {
                            //     return '{color2|' + params.name + '}{color2|' + params.value + '%}'; 
                            // }
                        },
                        rich: {  
                            color1: {  
                                color: '#206DB1'  
                            },  
                            color2: {  
                                color: '#29C29C'  
                            }  
                        },  
                        textStyle: {
                            baseline : 'top'
                        },
                        
                    }
                },
            }
            var labelBottom = {
                normal : {
                    color: '#29C29C', // 灰色圆环部分变成绿色
                    // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{ //饼图径向渐变是0,0,1,0的组合
                    //             // 0% 处的颜色   
                    //             offset: 0, color: '#2AC7A0'},
                    //             {
                    //             // 100% 处的颜色
                    //             offset: 1, color: '#218D72' 
                    //             }], false),
                    label : {
                        show : true,
                        position : 'center'
                    },
                    labelLine : {
                        show : false
                    }
                },
            };
            var radius = [60, 77]; // 圆环的半径是双半径，双半径之差就是圆环环子的宽度
            var option = {
                series : [
                    {
                        type : 'pie',
                        center : ['20%', '30%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : [0, 40], // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        hoverOffset: 0,
                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'center',
                                    color: '#fff',
                                    fontSize: 16
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {  // 高亮属性也可写在单个itemStyle中让单个圆或圆环对象生效
                                shadowBlur: 10,  // 高亮模糊度设为10
                                shadowOffsetX: 0,  // 高亮偏移量设为0
                                shadowColor: 'rgba(0, 0, 0, 0.5)', // 高亮背景投影色
                                // color: 'rgba(0, 0, 0, 0)'  // 高亮前景色
                            }  
                        },
                        data : [
                            {name:'1号柜', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['20%', '30%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : radius, // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'闲置', value:54, itemStyle : labelBottom},
                            {name:'已存', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['49%', '30%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : [0, 40], // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        hoverOffset: 0,
                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'center',
                                    color: '#fff',
                                    fontSize: 16
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {  // 高亮属性也可写在单个itemStyle中让单个圆或圆环对象生效
                                shadowBlur: 10,  // 高亮模糊度设为10
                                shadowOffsetX: 0,  // 高亮偏移量设为0
                                shadowColor: 'rgba(0, 0, 0, 0.5)', // 高亮背景投影色
                                // color: 'rgba(0, 0, 0, 0)'  // 高亮前景色
                            }  
                        },
                        data : [
                            {name:'2号柜', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['49%', '30%'],
                        radius : radius,
                        x:'20%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'闲置', value:44, itemStyle : labelBottom},
                            {name:'已存', value:56, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['77%', '30%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : [0, 40], // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        hoverOffset: 0,
                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'center',
                                    color: '#fff',
                                    fontSize: 16
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {  // 高亮属性也可写在单个itemStyle中让单个圆或圆环对象生效
                                shadowBlur: 10,  // 高亮模糊度设为10
                                shadowOffsetX: 0,  // 高亮偏移量设为0
                                shadowColor: 'rgba(0, 0, 0, 0.5)', // 高亮背景投影色
                                // color: 'rgba(0, 0, 0, 0)'  // 高亮前景色
                            }  
                        },
                        data : [
                            {name:'3号柜', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['77%', '30%'],
                        radius : radius,
                        x:'40%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'闲置', value:35, itemStyle : labelBottom},
                            {name:'已存', value:65, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['20%', '70%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : [0, 40], // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        hoverOffset: 0,
                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'center',
                                    color: '#fff',
                                    fontSize: 16
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {  // 高亮属性也可写在单个itemStyle中让单个圆或圆环对象生效
                                shadowBlur: 10,  // 高亮模糊度设为10
                                shadowOffsetX: 0,  // 高亮偏移量设为0
                                shadowColor: 'rgba(0, 0, 0, 0.5)', // 高亮背景投影色
                                // color: 'rgba(0, 0, 0, 0)'  // 高亮前景色
                            }  
                        },
                        data : [
                            {name:'4号柜', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['20%', '70%'],
                        radius : radius,
                        x:'60%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'闲置', value:30, itemStyle : labelBottom},
                            {name:'已存', value:70, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['49%', '70%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : [0, 40], // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        hoverOffset: 0,
                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'center',
                                    color: '#fff',
                                    fontSize: 16
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {  // 高亮属性也可写在单个itemStyle中让单个圆或圆环对象生效
                                shadowBlur: 10,  // 高亮模糊度设为10
                                shadowOffsetX: 0,  // 高亮偏移量设为0
                                shadowColor: 'rgba(0, 0, 0, 0.5)', // 高亮背景投影色
                                // color: 'rgba(0, 0, 0, 0)'  // 高亮前景色
                            }  
                        },
                        data : [
                            {name:'5号柜', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['49%', '70%'],
                        radius : radius,
                        x:'80%', // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'闲置', value:27, itemStyle : labelBottom},
                            {name:'已存', value:73,itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['77%', '70%'], // 圆环中心的位置，也就是圆环的位置，第一个值是x轴位置，第二个值是y轴上的位置
                        radius : [0, 40], // 半径为双半径的数组的就是圆环
                        x: '0%', // for funnel
                        hoverOffset: 0,
                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'center',
                                    color: '#fff',
                                    fontSize: 16
                                },
                                labelLine : {
                                    show : false
                                }
                            },
                            emphasis: {  // 高亮属性也可写在单个itemStyle中让单个圆或圆环对象生效
                                shadowBlur: 10,  // 高亮模糊度设为10
                                shadowOffsetX: 0,  // 高亮偏移量设为0
                                shadowColor: 'rgba(0, 0, 0, 0.5)', // 高亮背景投影色
                                // color: 'rgba(0, 0, 0, 0)'  // 高亮前景色
                            }  
                        },
                        data : [
                            {name:'6号柜', value:46, itemStyle : labelTop}
                        ]
                    },
                    {
                        type : 'pie',
                        center : ['77%', '70%'],
                        radius : radius,
                        y: '55%',   // for funnel
                        x: '0%',    // for funnel
                        itemStyle : labelFromatter,
                        data : [
                            {name:'闲置', value:22, itemStyle : labelBottom},
                            {name:'已存', value:78,itemStyle : labelTop}
                        ]
                    },
                ]
            };
          var echart = echarts.init(document.getElementById(id));
          echart.setOption(option)
      }
      initEchartPie1(changeInfoData, 'mainpie1');
      initEchartPie2(changeInfoData, 'mainpie2');
  },
  filters: {
    
  }
}

</script>

