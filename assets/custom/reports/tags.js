/* -------------------------------------------------------------------------- */
// Echarts Horizontal Bar Chart
var spendShareByAmount = function spendShareByAmount() {
    var $horizontalBarChartEl = document.querySelector('.spend-share-amount');
  
    if ($horizontalBarChartEl) {
      // Get options from data attribute
      var userOptions = utils.getData($horizontalBarChartEl, 'options');
      var chart = window.echarts.init($horizontalBarChartEl);
      var months = ['Profile Net', 'Holister', 'Safewway', 'CityView Plaza', 'Butter Amusements', 'Wandering Waffle'];
      var data = [ 1086, 1236, 1219, 1330, 1367, 1416];
  
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
                return value.slice(0, 25);
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
      chart.on('click', function(params) {
        window.open(`../data-insights/tags.html?tag=${params.name}`)
      });
    }
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* Echarts Pie Chart - Dashboard/Insights/Category                            */
var spendShareByTags = function spendShareByTags() {
    var $pieChartEl = document.querySelector('.spend-share-tags');
  
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

docReady(spendShareByAmount);
docReady(spendShareByTags);