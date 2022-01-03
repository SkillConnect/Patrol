/* -------------------------------------------------------------------------- */
/* Echarts Horizontal Bar Chart                             */
var expenseBudget = function expenseBudget() {
  var $barSeriesChartEl = document.querySelector('.expense-budget');

  if ($barSeriesChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barSeriesChartEl, 'options');
    var chart = window.echarts.init($barSeriesChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [utils.getColor('success'), utils.getColor('primary')],
        legend: {},
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
var budgetSummary = function budgetSummary() {
  var $doughnutChartEl = document.querySelector('.budget-summary');

  const data = [{
    value: 1048,
    name: 'Rollover IRA',
    itemStyle: {
      color: utils.getColor('primary')
    }
  }, {
    value: 735,
    name: 'Individual',
    itemStyle: {
      color: utils.getColor('secondary')
    }
  }];

  if ($doughnutChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($doughnutChartEl, 'options');
    var chart = window.echarts.init($doughnutChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        legend: {
          top: 0,
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        series: [{
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '55%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          data,
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

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
var savingsBudget = function savingsBudget() {
  var $barSeriesChartEl = document.querySelector('.savings-budget');

  if ($barSeriesChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barSeriesChartEl, 'options');
    var chart = window.echarts.init($barSeriesChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [utils.getColor('success'), utils.getColor('primary')],
        legend: {},
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
var weeklyBudget = function weeklyBudget() {
  var $barSeriesChartEl = document.querySelector('.weekly-budget');

  if ($barSeriesChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barSeriesChartEl, 'options');
    var chart = window.echarts.init($barSeriesChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [utils.getColor('success'), utils.getColor('primary')],
        legend: {},
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
var yearlyBudget = function yearlyBudget() {
    var $barSeriesChartEl = document.querySelector('.yearly-budget');

    if ($barSeriesChartEl) {
      // Get options from data attribute
      var userOptions = utils.getData($barSeriesChartEl, 'options');
      var chart = window.echarts.init($barSeriesChartEl);
  
      var getDefaultOptions = function getDefaultOptions() {
        return {
          color: [utils.getColor('success'), utils.getColor('primary')],
          legend: {},
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
/*                             Echarts Bar Chart                             */
var zeroSumBudgetBar = function zeroSumBudgetBar() {
  var $barChartEl = document.querySelector('.zero-sum-budget-bar');

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
var zeroSumBudgetDoughnut = function zeroSumBudgetDoughnut() {
  var $doughnutChartEl = document.querySelector('.zero-sum-budget-doughnut');

  const data = [{
    value: 1048,
    name: 'Rollover IRA',
    itemStyle: {
      color: utils.getColor('primary')
    }
  }, {
    value: 735,
    name: 'Individual',
    itemStyle: {
      color: utils.getColor('secondary')
    }
  }];

  if ($doughnutChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($doughnutChartEl, 'options');
    var chart = window.echarts.init($doughnutChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        legend: {
          top: 0,
          textStyle: {
            color: utils.getGrays()['600']
          }
        },
        series: [{
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '55%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          data,
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

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

docReady(expenseBudget)
docReady(budgetSummary)
docReady(weeklyBudget)
docReady(yearlyBudget)
docReady(savingsBudget)
docReady(zeroSumBudgetBar)
docReady(zeroSumBudgetDoughnut)