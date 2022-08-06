/* -------------------------------------------------------------------------- */
/*                             Vertical Bar Chart                             */
var verticalBar = function verticalBar() {
  var $barChartEl = document.querySelector('.vertical-bar');

  if ($barChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barChartEl, 'options');
    var chart = window.echarts.init($barChartEl);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          formatter: tooltipFormatter,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        xAxis: {
          type: 'category',
          data: months,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['400'],
            formatter: function formatter(value) {
              return value.substring(0, 3);
            },
            margin: 15
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: true,
          axisLabel: {
            show: true,
            color: utils.getGrays()['400'],
            margin: 15
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          min: 600
        },
        series: [{
          type: 'bar',
          name: 'Total',
          data: data,
          lineStyle: {
            color: utils.getColor('primary')
          },
          itemStyle: {
            color: utils.getColor('primary'),
            barBorderRadius: [3, 3, 0, 0]
          },
          showSymbol: false,
          symbol: 'circle',
          smooth: false,
          hoverAnimation: true
        }],
        grid: {
          right: '3%',
          left: '10%',
          bottom: '10%',
          top: '5%'
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                             Vertical Bar2 Chart                             */
var verticalBar2 = function verticalBar2() {
  var $barChartEl = document.querySelector('.vertical-bar2');

  if ($barChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barChartEl, 'options');
    var chart = window.echarts.init($barChartEl);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          formatter: tooltipFormatter,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        },
        xAxis: {
          type: 'category',
          data: months,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['400'],
            formatter: function formatter(value) {
              return value.substring(0, 3);
            },
            margin: 15
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: true,
          axisLabel: {
            show: true,
            color: utils.getGrays()['400'],
            margin: 15
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['200']
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          min: 600
        },
        series: [{
          type: 'bar',
          name: 'Total',
          data: data,
          lineStyle: {
            color: utils.getColor('primary')
          },
          itemStyle: {
            color: utils.getColor('primary'),
            barBorderRadius: [3, 3, 0, 0]
          },
          showSymbol: false,
          symbol: 'circle',
          smooth: false,
          hoverAnimation: true
        }],
        grid: {
          right: '3%',
          left: '10%',
          bottom: '10%',
          top: '5%'
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Echarts Pie Chart */
var spendShareByMonths = function spendShareByMonths() {
  var $pieChartEl = document.querySelector('.spend-share-months');

  if ($pieChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($pieChartEl, 'options');
    var chart = window.echarts.init($pieChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        legend: {
          bottom: 0,
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        series: [{
          type: 'pie',
          radius: window.innerWidth < 530 ? '45%' : '60%',
          label: {
            color: utils.getGrays()['700']
          },
          center: ['50%', '55%'],
          data: [{
            value: 1048,
            name: 'Facebook',
            itemStyle: {
              color: utils.getColor('primary')
            }
          }, {
            value: 735,
            name: 'Youtube',
            itemStyle: {
              color: utils.getColor('danger')
            }
          }, {
            value: 580,
            name: 'Twitter',
            itemStyle: {
              color: utils.getColor('info')
            }
          }, {
            value: 484,
            name: 'Linkedin',
            itemStyle: {
              color: utils.getColor('success')
            }
          }, {
            value: 300,
            name: 'Github',
            itemStyle: {
              color: utils.getColor('warning')
            }
          }],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: utils.rgbaColor(utils.getGrays()['600'], 0.5)
            }
          }
        }],
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions); //- set chart radius on window resize

    utils.resize(function () {
      if (window.innerWidth < 530) {
        chart.setOption({
          series: [{
            radius: '45%'
          }]
        });
      } else {
        chart.setOption({
          series: [{
            radius: '60%'
          }]
        });
      }
    });
  }
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Echarts Pie Chart */
var spendShareByMerchants = function spendShareByMerchants() {
  var $pieChartEl = document.querySelector('.spend-share-merchants');

  if ($pieChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($pieChartEl, 'options');
    var chart = window.echarts.init($pieChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        legend: {
          bottom: 0,
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        series: [{
          type: 'pie',
          radius: window.innerWidth < 530 ? '45%' : '60%',
          label: {
            color: utils.getGrays()['700']
          },
          center: ['50%', '55%'],
          data: [{
            value: 1048,
            name: 'Facebook',
            itemStyle: {
              color: utils.getColor('primary')
            }
          }, {
            value: 735,
            name: 'Youtube',
            itemStyle: {
              color: utils.getColor('danger')
            }
          }, {
            value: 580,
            name: 'Twitter',
            itemStyle: {
              color: utils.getColor('info')
            }
          }, {
            value: 484,
            name: 'Linkedin',
            itemStyle: {
              color: utils.getColor('success')
            }
          }, {
            value: 300,
            name: 'Github',
            itemStyle: {
              color: utils.getColor('warning')
            }
          }],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: utils.rgbaColor(utils.getGrays()['600'], 0.5)
            }
          }
        }],
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: 'none'
          }
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions); //- set chart radius on window resize

    utils.resize(function () {
      if (window.innerWidth < 530) {
        chart.setOption({
          series: [{
            radius: '45%'
          }]
        });
      } else {
        chart.setOption({
          series: [{
            radius: '60%'
          }]
        });
      }
    });
  }
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Echarts Line Chart -                            */
var lineChart = function lineChart() {
  var $lineChartEl = document.querySelector(`.line-chart`);

  if ($lineChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($lineChartEl, 'options');
    var chart = window.echarts.init($lineChartEl);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204];

    var _tooltipFormatter2 = function _tooltipFormatter2(params) {
      return "\n      <div>\n          <h6 class=\"fs--1 text-700 mb-0\">\n            <span class=\"fas fa-circle me-1\" style='color:".concat(params[0].borderColor, "'></span>\n            ").concat(params[0].name, " : ").concat(params[0].value, "\n          </h6>\n      </div>\n      ");
    };

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          formatter: _tooltipFormatter2,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return getPosition(pos, params, dom, rect, size);
          },
          axisPointer: {
            type: 'none'
          }
        },
        xAxis: {
          type: 'category',
          data: months,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: utils.getGrays()['400'],
            formatter: function formatter(value) {
              return value.substring(0, 3);
            },
            margin: 15
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: utils.getGrays()['200']
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: utils.getGrays()['400'],
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          min: 600
        },
        series: [{
          type: 'line',
          data: data,
          itemStyle: {
            color: utils.getGrays().white,
            borderColor: utils.getColor('primary'),
            borderWidth: 2
          },
          lineStyle: {
            color: utils.getColor('primary')
          },
          symbol: 'circle',
          symbolSize: 10,
          smooth: false,
          hoverAnimation: true,
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: utils.rgbaColor(utils.getColors().primary, 0.2),
                },
                {
                  offset: 1,
                  color: utils.rgbaColor(utils.getColors().primary, 0),
                },
              ],
            },
          },
        }],
        grid: {
          right: '3%',
          left: '10%',
          bottom: '10%',
          top: '5%'
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

docReady(verticalBar);
docReady(verticalBar2);
docReady(spendShareByMonths);
docReady(spendShareByMerchants);
docReady(lineChart);