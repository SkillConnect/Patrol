/* -------------------------------------------------------------------------- */
var balancesBar = function balancesBar() {
  var $barChartEl = document.querySelector(".balances-bar");

  if ($barChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($barChartEl, "options");
    var chart = window.echarts.init($barChartEl);
    var months = [
      "January",
      "February & March",
      "Paypal March",
      "April",
      "May",
      "June",
      "July",
    ];
    var data = [1272, 1301, 1402, 1216, 1086, 1236, 1219];

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
          formatter: tooltipFormatter,
          transitionDuration: 0,
          axisPointer: {
            type: "none",
          },
        },
        xAxis: {
          type: "value",
          boundaryGap: false,
          axisLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()["300"],
            },
          },
          axisTick: {
            show: true,
          },
          axisLabel: {
            color: utils.getGrays()["500"],
          },
          splitLine: {
            show: false,
          },
          min: 600,
        },
        yAxis: {
          type: "category",
          data: months,
          boundaryGap: true,
          axisLabel: {
            formatter: function formatter(value) {
              return value.substring(0, 15);
            },
            show: true,
            color: utils.getGrays()["500"],
            margin: 15,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: utils.getGrays()["200"],
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: utils.getGrays()["300"],
            },
          },
        },
        series: [
          {
            type: "bar",
            name: "Total",
            data: data,
            lineStyle: {
              color: utils.getColor("primary"),
            },
            itemStyle: {
              color: utils.getColor("primary"),
              barBorderRadius: [0, 3, 3, 0],
            },
            showSymbol: false,
            symbol: "circle",
            smooth: false,
            hoverAnimation: true,
          },
        ],
        grid: {
          right: "3%",
          left: "25%",
          bottom: "10%",
          top: "5%",
        },
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
var balancesPie = function balancesPie() {
  var $doughnutChartEl = document.querySelector(".balances-pie");

  const data = [
    {
      value: 1048,
      name: "Current",
      itemStyle: {
        color: utils.getColor("primary"),
      },
    },
    {
      value: 735,
      name: "Prior",
      itemStyle: {
        color: utils.getColor("secondary"),
      },
    },
  ];

  if ($doughnutChartEl) {
    // Get options from data attribute
    var userOptions = utils.getData($doughnutChartEl, "options");
    var chart = window.echarts.init($doughnutChartEl);

    var getDefaultOptions = function getDefaultOptions() {
      return {
        legend: {
          top: 0,
          textStyle: {
            color: utils.getGrays()["600"],
          },
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            center: ["50%", "55%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data,
          },
        ],
        tooltip: {
          trigger: "item",
          padding: [7, 10],
          backgroundColor: utils.getGrays()["100"],
          borderColor: utils.getGrays()["300"],
          textStyle: {
            color: utils.getColors().dark,
          },
          borderWidth: 1,
          transitionDuration: 0,
          axisPointer: {
            type: "none",
          },
        },
      };
    };

    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};
/* -------------------------------------------------------------------------- */

docReady(balancesBar);
docReady(balancesPie);
