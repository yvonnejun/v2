
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@rcolor: red;
.demo-wrap {
  width: 100%;
}

</style>

<template>
  <div class="demo-wrap">

    <div id="main"  :style="{width:'1299px',height:'308px'}"></div>
  </div>
</template>

<script>
import Vue from 'vue'

var echarts = require('echarts');
export default { 
  name: 'demo', // 注意关键字最好不要用来命名
  data () {
     /*data和return之间的地方--就是这里可以写一些内部方法供return里面的属性赋值调用*/
    return {

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
      function initEchart2(data, id) {
        var maxData = 0;
        for (var i = 0; i < data.length; i++) {
            if (maxData < parseFloat(data[i].dateNum)) {
                var middleNum = parseFloat(data[i].dateNum);
                maxData = Math.ceil(middleNum);
            }
        }
        var defaultCityData = [];
        for (var i = 0; i < data.length; i++) {
            defaultCityData.push(data[i].cityName);
        }
        var defaultData = [];
        for (var i = 0; i < data.length; i++) {
            defaultData.push(parseFloat(data[i].dateNum));
        }
        var option = {
            tooltip: {
                trigger: 'item',
                axisPointer : { 
                    type : 'shadow' 
                }
            },
            legend: {
                top: 8,
                left: '11%',
                type: 'plain',
                data:[
                    {
                        name:'涉案财物',
                        textStyle:{
                            fontSize:12,
                            color:'#999'
                        }, 
                        icon:'roundRect'
                    },
                    {
                        name:'贵重物品',
                        textStyle:{
                            fontSize:12,
                            color:'#999'
                        },
                        icon:'roundRect'
                    },
                    {
                        name:'电子物证',
                        textStyle:{
                            fontSize:12,
                            color:'#999'
                        },
                        icon:'roundRect'
                    },
                    {
                        name:'生物检材',
                        textStyle:{
                            fontSize:12,
                            color:'#999'
                        },
                        icon:'roundRect'
                    },
                    {
                        name:'卷宗',
                        textStyle:{
                            fontSize:12,
                            color:'#999'
                        },
                        icon:'roundRect'
                    }
                ],
                itemWidth: 11,
                itemHeight: 11,
                itemGap: 15,
                textStyle: {
                    color: '#307dbf',
                },
            },
            calculable: true,
            grid: {
                width: '95%',
                left: 40
            },
            xAxis: [
                {
                    type : 'category',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#aaa'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,
                        color: '#555'
                    },
                    splitLine: {
                        show: false
                    },
                    position: 'bottom',
                    data : ['12-01', '12-02', '12-03', '12-04', '12-05', '12-06', '12-07']
                }
            ],
            yAxis: [
                {
                    type : 'value',
                    axisTick: { //刻度线
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        color: '#000'
                    },
                    interval: 15,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#aaa'
                        }
                    },
                    max: function(value) {
                        return maxData ? maxData : 60;
                    },
                    splitLine: { //grid中的分割线
                        show: true
                    },
                }
            ],
            series: [
                {
                    name:'涉案财物',
                    type:'bar',
                    barWidth : 12,
                    barMaxWidth:16,
                    barGap: '50%',
                    stack: '涉案财物',
                    itemStyle : { normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 0,0,0,1是纵向柱状图从上到下的渐变
                        offset: 0,
                        color: "#206fb2"
                    }, {
                        offset: 1,
                        color: "#1e3589"
                    }], false), barBorderRadius: 10, label : {show: false, position: 'right'}}},
                    data:[28, 46, 8, 43, 12, 36, 30]
                },
                {
                    name:'贵重物品',
                    type:'bar',
                    barWidth : 12,
                    barMaxWidth:16,
                    barGap: '50%',
                    stack: '贵重物品',
                    itemStyle : { normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#a968d2"
                    }, {
                        offset: 1,
                        color: "#612b83"
                    }], false), barBorderRadius: 10, label : {show: false, position: 'right'}}},
                    data:[24, 12, 20, 32, 45, 18, 19]
                },
                {
                    name:'电子物证',
                    type:'bar',
                    barWidth : 12,
                    barMaxWidth:16,
                    barGap: '50%',
                    stack: '电子物证',
                    itemStyle : { normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#2ac7a0"
                    }, {
                        offset: 1,
                        color: "#208970"
                    }], false), barBorderRadius: 10, label : {show: false, position: 'right'}}},
                    data:[13, 42, 22, 45, 28, 23, 33]
                },
                {
                    name:'生物检材',
                    type:'bar',
                    barWidth : 12,
                    barMaxWidth:16,
                    barGap: '50%',
                    stack: '生物检材',
                    itemStyle : { normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#da9745"
                    }, {
                        offset: 1,
                        color: "#af6b34"
                    }], false), barBorderRadius: 10, label : {show: false, position: 'right'}}},
                    data:[19, 30, 11, 4, 30, 18, 29]
                },
                {
                    name:'卷宗',
                    type:'bar',
                    barWidth : 12,
                    barMaxWidth:16,
                    barGap: '50%',
                    stack: '卷宗',
                    itemStyle : { normal: {color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#3bbeca"
                    }, {
                        offset: 1,
                        color: "#278c96"
                    }], false), barBorderRadius: 10, label : {show: false, position: 'right'}}},
                    data:[33, 53, 31, 17, 18, 8, 38]
                },
            ]
        };
        var echart = echarts.init(document.getElementById(id));
        echart.setOption(option)
      }
      var changeInfoData = [
          {"unitName":"单位1", "changeIntoNum":"510", "changeOutNum":"930"},
          {"unitName":"单位2", "changeIntoNum":"1020", "changeOutNum":"1260"},
          {"unitName":"单位3", "changeIntoNum":"515", "changeOutNum":"1115"},
          {"unitName":"单位4", "changeIntoNum":"1080", "changeOutNum":"1320"},
          {"unitName":"单位5", "changeIntoNum":"515", "changeOutNum":"1200"},
          {"unitName":"单位6", "changeIntoNum":"1080", "changeOutNum":"1250"}
      ];
      initEchart2(changeInfoData, 'main');
  },
  filters: {
    
  }
}

</script>

