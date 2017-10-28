// 基于准备好的dom，初始化echarts实例
var pie_left = echarts.init(document.getElementById('pie_left'));

// 指定图表的配置项和数据
var option = {
  color: ['#4e70b5', '#5cb871', '#00a2e9', '#acce22'],

  series: [{
    name: '签到比例分析',
    type: 'pie',
    radius: '55%',
    center: ['55%', '40%'],
    data: [{
        value: 26,
        name: '报案类'
      },
      {
        value: 17,
        name: '求助类'
      },
      {
        value: 30,
        name: '交通类'
      },
      {
        value: 27,
        name: '其它类'
      }
    ],
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    },
    itemStyle: {
      normal: {
        label: {
          show: true,
          //	                            position:'inside',
          formatter: '{b} : {c}'
        }
      },
      labelLine: {
        show: true
      }
    }
  }]
};

// 使用刚指定的配置项和数据显示图表。
pie_left.setOption(option);

var pie_right = echarts.init(document.getElementById('pie_right'));
// 指定图表的配置项和数据
var option_right = {
  
  color: ['#f7ba79', '#fdd100', '#d9e483', '#acce22', '#5cb871', '#009b4c', '#4e70b5', '#00a2e9', '#62c3d0', '#f08519'],
  series: [{
    name: '签到比例分析',
    type: 'pie',
    radius: '55%',
    center: ['50%', '40%'],
    data: [{
        value: 10678123,
        name: '武汉'
      },
      {
        value: 16898688,
        name: '北京'
      },
      {
        value: 9877090,
        name: '苏州'
      },
      {
        value: 8334232,
        name: '南京'
      },
      {
        value: 7311211,
        name: '扬州'
      },
      {
        value: 7311211,
        name: '无锡'
      },
      {
        value: 10000388,
        name: '金华'
      },
      {
        value: 10898676,
        name: '杭州'
      },
      {
        value: 7300321,
        name: '株洲'
      },
      {
        value: 8345215,
        name: '长沙'
      }
    ],
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    },
    itemStyle: {
      normal: {
        label: {
          show: true,
          //	                            position:'inside',
          formatter: function(b) {
            var forNum = parseInt(b.value).toString()
            return b.name + ' ' + b.percent + '%\n' + b.value.toString().replace(/(?=(?!^)(?:\d{3})+(?:\.|$))(\d{3}(\.\d+$)?)/g,',$1')
          }
        }
      },
      labelLine: {
        show: true
      }
    }
  }]
};

// 使用刚指定的配置项和数据显示图表。
pie_right.setOption(option_right);

var xData = [21, 22, 23, 24, 25, 26, 27];
var colorList = [
'#293f7d','#f08519','#e62129','#a22971','#00a2e9',
 '#009b4c','#63c3d0'
];

function initBarOption (xData, dataReal, dataAll) {
  var option_bar = {
    legend: {
       bottom: 20,
       data: ['推送数', '查控数']
   },
   "grid": {
       "left": "20%",
       "borderWidth": 0, 
       "y2": 120
   }, 
   "calculable": true, 
   "xAxis": [
       {
           name: '日期',
           nameLocation: 'center',
           nameGap: 50,
           boundaryGap: true,
           "type": "category", 
           "splitLine": {
               "show": false
           }, 
           "axisTick": {
               "show": true,
               alignWithLabel: true
           }, 
           "splitArea": {
               "show": false,
           }, 
           "axisLabel": {
               "interval": 0, 
               "show": true, 
               "splitNumber": 15, 
               "textStyle": {
                   "fontFamily": "微软雅黑", 
                   "fontSize": 12
               }
           }, 
           "data": xData,
       },
       {
           // 辅助 x 轴
           show: false,
           data: xData  
       }
   ], 
   "yAxis": [
       {
           name: '人数',
           nameLocation: 'center',
           nameGap: 50,
           "type": "value", 
           "splitLine": {
               "show": true,
               lineStyle: {
                   type: 'dotted'
               }
           }, 
           "axisLine": {
               "show": true
           }, 
           "axisTick": {
               "show": false
           }, 
           "splitArea": {
               "show": false
           }
       }
   ],
   "series": [
       {
           name: '推送数',
           "type": "bar", 
           silent: true,
           xAxisIndex: 1,
           "barWidth": 55,
           "itemStyle": {
               "normal": {
                   "color": "#ddd", 
                   "barBorderRadius": 0,
                   "label": {
                       "show": true, 
                       rotate: -90,
                       padding: [-8, 80, 10, 0],
                       "textStyle": {
                           "color": '#000',
                           fontSize: 16,
                           
                       }, 
                       "position": "insideTop",
                       formatter : function(p) {
                          return p.value.toString().replace(/(?=(?!^)(?:\d{3})+(?:\.|$))(\d{3}(\.\d+$)?)/g,',$1')
                       }
                   }
               }
           }, 
           "data": dataAll
       },
       {
           name: "查控数",
           "type": "bar", 
           "barWidth": 55, 
           "itemStyle": {
               "normal": {
                   "barBorderRadius": 0, 
                   "color": function(params) {
                       return colorList[params.dataIndex]
                   }, 
                   "label": {
                       "show": true, 
                       rotate: 270,
                       padding: [-8, 1, 10, 60],
                       "textStyle": {
                           "color": "#fff",
                           fontSize: 16,
                           
                       }, 
                       "position": "insideTop",
                       formatter : function(p) {
                       return p.value.toString().replace(/(?=(?!^)(?:\d{3})+(?:\.|$))(\d{3}(\.\d+$)?)/g,',$1');
                       }
                   }
               }
           }, 
           "data": dataReal, 
       }
       
   ]
 }
 return option_bar;
}

function initBarChart (id, option) {
  var bar = echarts.init(document.getElementById(id));
  bar.setOption(option);
}

var optionBar1 = initBarOption(xData, [30223, 41666, 35556, 39683, 47745, 36698, 22564], [38267, 48444, 43899, 47786, 55655, 43900, 34567])
var optionBar2 = initBarOption(xData, [30223, 41666, 35556, 39683, 47745, 36698, 22564], [38267, 48444, 43899, 47786, 55655, 43900, 34567])
var optionBar3 = initBarOption(xData, [30223, 41666, 35556, 39683, 47745, 36698, 22564], [38267, 48444, 43899, 47786, 55655, 43900, 34567])
var optionBar4 = initBarOption(xData, [30223, 41666, 35556, 39683, 47745, 36698, 22564], [38267, 48444, 43899, 47786, 55655, 43900, 34567])
initBarChart('bar_one', optionBar1)
initBarChart('bar_two', optionBar2)
initBarChart('bar_three', optionBar3)
initBarChart('bar_four', optionBar4)

$(function() {
  $('.circle_logo').on('click', function() {
    console.log(111)
    $('.container-popup-first').show()
  });
  $('.confirm .close-panel').on('click', function() {
      $('.container-popup-first').hide()
  })
});
