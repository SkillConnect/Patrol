const view = (window.innerWidth && window.innerWidth > 992) ? '.desktop-view' : '.mobile-view'

/* -------------------------------------------------------------------------- */
// Notifications Alert
// Append notifications to this list
const notificationsData = [
  "Weekly Out-flow: Your average Weekly Out-flow over the last 6 weeks is $1,870. In the current week, you have spent $504 so far.",
  "Monthly Out-flow: Your Avg Monthly Out-flow over the last 3 months is $75,603. ",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
];

var notificationCounter = 0;
var maxNotificationLength = 150;
function notificationsUpdater() {
  notificationCounter = (notificationCounter + 1) % notificationsData.length
  alertElement = document.getElementById("notification-alert-msg")
  data = notificationsData[notificationCounter]

  if (data.length > maxNotificationLength) { data = data.substr(0, maxNotificationLength-3) + '...'; } 
  else { data += ' '.repeat(maxNotificationLength - data.length); }

  if (alertElement) { alertElement.innerHTML = data; }
  else { clearInterval(startNotificationAlert); }
}
notificationsUpdater();
var startNotificationAlert = setInterval(
  notificationsUpdater,
  5000 // Timer (in ms) for notification update
);
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Echarts Horizontal Bar Chart - Dashboard/Insights/Merchants                */
var dashboardInsightsSpendByMerchantsChartInit = function dashboardInsightsSpendByMerchantsChartInit() {
    var $horizontalBarChartEl = document.querySelector(`${view} .dashboard-insights-merchants`);
  
    if ($horizontalBarChartEl) {
      // Get options from data attribute
      var userOptions = utils.getData($horizontalBarChartEl, 'options');
      var chart = window.echarts.init($horizontalBarChartEl);
      var months = ['New Bazaar', 'Mowry Plaza', 'Chaat House', 'Shopify', 'Profile Net', 'Holister', 'Safewway', 'CityView Plaza', 'Butter Amusements', 'Wandering Waffle'];
      var data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416];
  
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
/* Echarts Pie Chart - Dashboard/Insights/Category                            */
var dashboardInsightsSpendByCategoryInit = function dashboardInsightsSpendByCategoryInit() {
    var $pieChartEl = document.querySelector(`${view} .dashboard-insights-category`);
  
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
/* Echarts Line Chart - Dashboard/Trends/DailySpend                           */
var dashboardTrendsDailySpendInit = function dashboardTrendsDailySpendInit() {
    var $lineChartEl = document.querySelector(`${view} .dashboard-trends-dailySpend`);
  
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

/* -------------------------------------------------------------------------- */
/* Echarts Line Chart - Dashboard/Trends/MonthkyFlow                          */
var dashboardTrendsMonthlyFlowInit = function dashboardTrendsMonthlyFlowInit() {
    const $monthlyFlowChart = document.querySelector(`${view} .dashboard-trends-monthlyFlow`);
  
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
/* Echarts Horizontal Bar Chart - Dashboard/Budget                            */
var dashboardBudgetChartInit = function dashboardBudgetChartInit() {
  var $barSeriesChartEl = document.querySelector(`${view} .dashboard-budget`);

  if ($barSeriesChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barSeriesChartEl, 'options');
    var chart = window.echarts.init($barSeriesChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [utils.getColor('success'), utils.getColor('primary')],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          padding: [7, 10],
          backgroundColor: utils.getGrays()['100'],
          borderColor: utils.getGrays()['300'],
          textStyle: {
            color: utils.getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            formatter: function formatter(value) {
              return "".concat(value / 1000, "k");
            },
            color: utils.getGrays()['500']
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: utils.getGrays()['200']
            }
          }
        },
        yAxis: {
          type: 'category',
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()['300'],
              type: 'solid'
            }
          },
          axisLabel: {
            formatter: function formatter(value) {
              if (value.length <= 18) {return value}
              return value.substring(0,15).concat("...");
            },
            color: utils.getGrays()['500']
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: ['Brazil', 'Indonesia & Indonesia', 'USA', 'India', 'Monitor Equifax Credit Score']
        },
        series: [{
          name: 'Spent',
          type: 'bar',
          data: [18203, 0, 29034, 104970, 0],
          itemStyle: {
            barBorderRadius: [0, 3, 3, 0]
          }
        }, {
          name: 'Budgeted',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141],
          itemStyle: {
            barBorderRadius: [0, 3, 3, 0]
          }
        }],
        grid: {
          right: 15,
          left: (screen.width < 992) ? '35%' : '20%',
          bottom: '10%',
          top: 5
        }
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Echarts Gauge Chart - Dashboard/CreditLimit               */
var dashboardCreditLimitChartInit = function dashboardCreditLimitChartInit() {
  var $chartEl = document.querySelector(`${view} .dashboard-credit-limit`);

  if ($chartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($chartEl, 'options');
    var chart = window.echarts.init($chartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        series: [
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 1,
            splitNumber: 10,
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.1, '#8DB3F8'],
                  [0.3, '#5A8FF6'],
                  [0.6, '#2A6EF4'],
                  [1, '#1D4FD0']
                ]
              }
            },
            pointer: {
              icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
              length: '12%',
              width: 20,
              offsetCenter: [0, '-60%'],
              itemStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: 'auto',
                width: 2
              }
            },
            splitLine: {
              length: 20,
              lineStyle: {
                color: 'auto',
                width: 5
              }
            },
            axisLabel: {
              color: '#464646',
              fontSize: 15,
              distance: -58,
              formatter: function (value) {
                if (value === 1) {
                  return '100';
                } else if (value === 0.6) {
                  return '60';
                } else if (value === 0.3) {
                  return '30';
                } else if (value === 0.1) {
                  return '10';
                } else if (value === 0) {
                  return '0';
                }
                return '';
              }
            },
            title: {
              offsetCenter: [0, '-20%'],
              fontSize: 20
            },
            detail: {
              fontSize: 20,
              offsetCenter: [0, '0%'],
              valueAnimation: true,
              formatter: function (value) {
                return `Credit Usage ${value}%`;
              },
              color: 'auto'
            },
            data: [
              {
                value: 0.7,
                name: 'Very High'
              }
            ]
          }
        ]
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Echarts Horizontal Bar Chart - Balance Sheet/                              */
var balanceSheetCharts = function balanceSheetCharts() {

  charts = ['.checking-accounts', '.savings-accounts', '.investment-accounts', '.credit-loans']

  charts.forEach(chartName => {
    var $horizontalBarChartEl = document.querySelector(chartName);

    if ($horizontalBarChartEl) {
      // Get options from data attribute
      var userOptions = utils.getData($horizontalBarChartEl, 'options');
      var chart = window.echarts.init($horizontalBarChartEl);
      var months = ['New Bazaar', 'Mowry Plaza', 'Chaat House', 'Shopify', 'Profile Net', 'Holister', 'Safewway', 'CityView Plaza', 'Butter Amusements', 'Wandering Waffle'];
      var data = [1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416];
  
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
  });
};
/* -------------------------------------------------------------------------- */

var closeAllCollapses = () => {
  const collapseElementList = document.querySelectorAll('.collapse')
  const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl, {toggle: false}))
  collapseList.map(el => el.hide())
}

docReady(dashboardInsightsSpendByMerchantsChartInit);
docReady(dashboardInsightsSpendByCategoryInit);
docReady(dashboardTrendsDailySpendInit);
docReady(dashboardTrendsMonthlyFlowInit);
docReady(dashboardBudgetChartInit);
docReady(dashboardCreditLimitChartInit);
docReady(balanceSheetCharts);
docReady(closeAllCollapses);