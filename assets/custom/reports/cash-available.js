/* -------------------------------------------------------------------------- */
/* Echarts Line Chart - CreditUsage                                           */
var cashAvailableTrends = function cashAvailableTrends() {
  var $stackedLineChartEl = document.querySelector(".cash-available-trends");

  if ($stackedLineChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($stackedLineChartEl, "options");
    var chart = window.echarts.init($stackedLineChartEl);
    var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: "axis",
          padding: [7, 10],
          backgroundColor: utils.getGrays()["100"],
          borderColor: utils.getGrays()["300"],
          textStyle: {
            color: utils.getColors().dark,
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return getPosition(pos, params, dom, rect, size);
          },
          axisPointer: {
            type: "none",
          },
          formatter: tooltipFormatter,
        },
        xAxis: {
          type: "category",
          data: days,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: utils.getGrays()["300"],
              type: "solid",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: utils.getGrays()["400"],
            margin: 15,
            formatter: function formatter(value) {
              return value.substring(0, 3);
            },
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              color: utils.getGrays()["200"],
              type: "dashed",
            },
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: utils.getGrays()["400"],
            margin: 15,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        series: [
          {
            name: "Matcha Latte",
            type: "line",
            symbolSize: 6,
            itemStyle: {
              color: utils.getGrays().white,
              borderColor: utils.getColor("info"),
              borderWidth: 2,
            },
            lineStyle: {
              color: utils.getColor("info"),
            },
            symbol: "circle",
            stack: "product",
            data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210],
          },
        ],
        grid: {
          right: 10,
          left: 5,
          bottom: 5,
          top: 8,
          containLabel: true,
        },
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
// Echarts Horizontal Bar Chart
var spendShareByAmount = function spendShareByAmount() {
  var $horizontalBarChartEl = document.querySelector('.share-by-amount');

  if ($horizontalBarChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($horizontalBarChartEl, 'options');
    var chart = window.echarts.init($horizontalBarChartEl);
    var months = ['Wells Fargo: WFBANK'];
    var data = [4086];

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
          type: 'value',
          boundaryGap: false,
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          axisTick: {
            show: true
          },
          axisLabel: {
            color: utils.getGrays()['500']
          },
          splitLine: {
            show: false
          },
          min: 600
        },
        yAxis: {
          type: 'category',
          data: months,
          boundaryGap: true,
          axisLabel: {
            formatter: function formatter(value) {
              return value;
            },
            show: true,
            color: utils.getGrays()['500'],
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
            lineStyle: {
              color: utils.getGrays()['300']
            }
          }
        },
        series: [{
          type: 'bar',
          name: 'Total',
          data: data,
          barWidth: "30px",
          lineStyle: {
            color: utils.getColor('primary')
          },
          itemStyle: {
            color: utils.getColor('primary'),
            barBorderRadius: [0, 3, 3, 0]
          },
          showSymbol: false,
          symbol: 'circle',
          smooth: false,
          hoverAnimation: true
        }],
        grid: {
          right: '3%',
          left: '20%',
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
// Echarts Horizontal Bar Chart
var spendShareByAccount = function spendShareByAccount() {
  var $horizontalBarChartEl = document.querySelector('.share-by-account');

  if ($horizontalBarChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($horizontalBarChartEl, 'options');
    var chart = window.echarts.init($horizontalBarChartEl);
    var months = ['Savings', 'Checking'];
    var data = [0, 1086];

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
          type: 'value',
          boundaryGap: false,
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300']
            }
          },
          axisTick: {
            show: true
          },
          axisLabel: {
            color: utils.getGrays()['500']
          },
          splitLine: {
            show: false
          },
          min: 600
        },
        yAxis: {
          type: 'category',
          data: months,
          boundaryGap: true,
          axisLabel: {
            formatter: function formatter(value) {
              return value;
            },
            show: true,
            color: utils.getGrays()['500'],
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
            lineStyle: {
              color: utils.getGrays()['300']
            }
          }
        },
        series: [{
          type: 'bar',
          name: 'Total',
          data: data,
          barWidth: "30px",
          lineStyle: {
            color: utils.getColor('primary')
          },
          itemStyle: {
            color: utils.getColor('primary'),
            barBorderRadius: [0, 3, 3, 0]
          },
          showSymbol: false,
          symbol: 'circle',
          smooth: false,
          hoverAnimation: true
        }],
        grid: {
          right: '3%',
          left: '20%',
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
/* Echarts Pie Chart  */
var spendShareByInstitution = function spendShareByInstitution() {
  var $pieChartEl = document.querySelector('.share-by-institution');

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


docReady(cashAvailableTrends);
docReady(spendShareByAmount);
docReady(spendShareByAccount);
docReady(spendShareByInstitution);
