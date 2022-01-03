/* -------------------------------------------------------------------------- */
/* Doughnut chart Account Mix */
var doughnutChartInit = function doughnutChartInit() {
  var $doughnutChartEl = document.querySelector('.doughnut-chart');

  if ($doughnutChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($doughnutChartEl, 'options');
    var chart = window.echarts.init($doughnutChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
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
          }]
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
/* Echarts Gauge Chart               */
var gaugeChartInit = function gaugeChartInit() {
  var $chartEl = document.querySelector('.gauge-chart');

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
              fontSize: 15,
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

docReady(doughnutChartInit);
docReady(gaugeChartInit);