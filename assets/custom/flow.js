/* -------------------------------------------------------------------------- */
/* Echarts Line Chart - Flow/First/Left                                       */
var flowFirstLeft = function flowFirstLeft() {
  const $monthlyFlowChart = document.querySelector('.flow-left');

  if ($monthlyFlowChart) {
    const data = [
      ["product", "Expenses", "Income"],
      ["Boots4", 43, 85],
      ["Reign Pro", 83, 73],
      ["Slick", 86, 62],
      ["Falcon", 72, 53],
      ["Sparrow", 80, 50],
      ["Hideway", 50, 70],
      ["Freya", 80, 90],
    ];
    const userOptions = utils.getData($monthlyFlowChart, "options");
    const chart = window.echarts.init($monthlyFlowChart);

    const getDefaultOptions = () => ({
      color: [utils.getColors().primary, utils.getGrays()["300"]],
      dataset: { source: data },
      tooltip: {
        trigger: "item",
        padding: [7, 10],
        backgroundColor: utils.getGrays()['100'],
        borderColor: utils.getGrays()["300"],
        textStyle: { color: utils.getColors().dark },
        borderWidth: 1,
        transitionDuration: 0,
        position(pos, params, dom, rect, size) {
          return getPosition(pos, params, dom, rect, size);
        },
        formatter: function (params) {
          return `<div class="font-weight-semi-bold">${
            params.seriesName
          }</div><div class="fs--1 text-600"><strong>${params.name}:</strong> ${
            params.value[params.componentIndex + 1]
          }</div>`;
        },
      },
      legend: {
        data: ["Expenses", "Income"],
        left: "left",
        itemWidth: 10,
        itemHeight: 10,
        borderRadius: 0,
        icon: "circle",
        inactiveColor: utils.getGrays()["400"],
        textStyle: { color: utils.getGrays()["700"] },
      },
      xAxis: {
        type: "category",
        axisLabel: { color: utils.getGrays()["400"] },
        axisLine: {
          lineStyle: {
            color: utils.getGrays()["300"],
            type: "dashed",
          },
        },
        axisTick: false,
        boundaryGap: true,
      },
      yAxis: {
        axisPointer: { type: "none" },
        axisTick: "none",
        splitLine: {
          lineStyle: {
            color: utils.getGrays()["300"],
            type: "dashed",
          },
        },
        axisLine: { show: false },
        axisLabel: { color: utils.getGrays()["400"] },
      },
      series: [
        {
          type: "bar",
          barWidth: "10px",
          barGap: "30%",
          label: { normal: { show: false } },
          z: 10,
          itemStyle: {
            normal: {
              barBorderRadius: [10, 10, 0, 0],
              color: utils.getColors().primary,
            },
          },
        },
        {
          type: "bar",
          barWidth: "10px",
          barGap: "30%",
          label: { normal: { show: false } },
          itemStyle: {
            normal: {
              barBorderRadius: [4, 4, 0, 0],
              color: utils.getGrays()[300],
            },
          },
        },
      ],
      grid: { right: "0", left: "30px", bottom: "10%", top: "20%" },
    });

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Echarts Waterfall Chart - Flow/First/Right                                       */
var flowFirstRight = function flowFirstRight() {
  var $waterfallChartEl = document.querySelector('.flow-right');

  if ($waterfallChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($waterfallChartEl, 'options');
    var chart = window.echarts.init($waterfallChartEl);
    var xAxisLabels = ['Dec-2021', 'Jan-2022', 'Feb-2022'];
    var incomeData = [ '-', 500, '-'];
    var expenseData = [ -2800, '-', -800];

    var getDefaultOptions = function getDefaultOptions() {
      return {
        legend: {
          data: ['Expenditure', 'Income'],
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,

          /* eslint-disable prefer-destructuring */
          formatter: function formatter(params) {
            var tar;

            if (params[1].value !== '-') {
              tar = params[1];
            } else {
              tar = params[2];
            }

            return "".concat(window.dayjs(tar.name).format('MMM DD'), "<br/>").concat(tar.seriesName, " : ").concat(tar.value);
          },
          transitionDuration: 0,
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: xAxisLabels,
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
          }
        },
        series: [
          {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            },
            emphasis: {
              itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
              }
            },
            data: [0, 0, 0, 0]
          },
          {
            name: 'Income',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'top',
              color: utils.getGrays()['600']
            },
            data: incomeData,
            itemStyle: {
              color: utils.getColor('success'),
              barBorderRadius: [3, 3, 0, 0]
            }
          },
          {
            name: 'Expenditure',
            type: 'bar',
            stack: 'Total',
            label: {
              show: true,
              position: 'bottom',
              color: utils.getGrays()['600']
            },
            data: expenseData,
            itemStyle: {
              color: utils.getColor('danger'),
              barBorderRadius: [3, 3, 0, 0]
            }
          }
        ],
        grid: {
          right: '3%',
          left: '10%',
          bottom: '10%',
          top: '20%'
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Echarts Line Chart - Flow/Recent/Expenses                                  */
var flowRecentExpenses = function flowRecentExpenses() {
  var $horizontalBarChartEl = document.querySelector('.flow-recent-expenses');

  if ($horizontalBarChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($horizontalBarChartEl, 'options');
    var chart = window.echarts.init($horizontalBarChartEl);
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
              return value.substring(0, 3);
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
/* Echarts Line Chart - Flow/Merchant Insights                                */
var flowMerchantInsights = function flowMerchantInsights() {
  var $horizontalBarChartEl = document.querySelector('.flow-merchant-insights');

  if ($horizontalBarChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($horizontalBarChartEl, 'options');
    var chart = window.echarts.init($horizontalBarChartEl);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204, 1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204];

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
              return value.substring(0, 3);
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
/* Echarts Line Chart - Flow/Category Insights                                */
var flowCategoryInsights = function flowCategoryInsights() {
  var $horizontalBarChartEl = document.querySelector('.flow-category-insights');

  if ($horizontalBarChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($horizontalBarChartEl, 'options');
    var chart = window.echarts.init($horizontalBarChartEl);
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
              return value.substring(0, 3);
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
/* Echarts Pie Chart - Flow/Spend Share/Category                              */
var flowSpendSharebyCategory = function flowSpendSharebyCategory() {
  var $pieChartEl = document.querySelector('.flow-spend-share-category');

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

docReady(flowFirstLeft);
docReady(flowFirstRight);
docReady(flowRecentExpenses);
docReady(flowMerchantInsights);
docReady(flowCategoryInsights);
docReady(flowSpendSharebyCategory);