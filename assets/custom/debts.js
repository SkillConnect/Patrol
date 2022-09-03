/* -------------------------------------------------------------------------- */
/* Echarts Line Chart - CreditUsage                                           */
var creditUsage = function creditUsage() {
  var $stackedLineChartEl = document.querySelector(".credit-usage");

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
    chart.on('click', params => insightsMerchants(params));
  }
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Echarts Gauge Chart - CreditLimit                                          */
var creditLimitChartInit = function creditLimitChartInit() {
  var $chartEl = document.querySelector('.credit-limit');

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
            legend: {},
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
/*                             Echarts Bar Chart                             */
var cardPaymentHistory = function cardPaymentHistory() {
  var $barChartEl = document.querySelector('.card-payment-history');

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
    chart.on('click', params => insightsMerchants(params));
  }
};
/* -------------------------------------------------------------------------- */

docReady(creditUsage);
docReady(creditLimitChartInit);
docReady(cardPaymentHistory);
