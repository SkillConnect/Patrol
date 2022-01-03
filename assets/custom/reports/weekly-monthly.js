/* -------------------------------------------------------------------------- */
/* Echarts Bar Chart                           */
var barChart = function barChart() {
    const $monthlyFlowChart = document.querySelector('.monthly-out-flow');
  
    if ($monthlyFlowChart) {
      const data = [
        ["name", "Out Flow"],
        ["Jan", 43],
        ["Feb", 83],
        ["Mar", 86],
        ["Apr", 72],
        ["May", 80],
        ["June", 50],
        ["Freya", 80],
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
            barWidth: "20px",
            barGap: "10%",
            label: { normal: { show: false } },
            z: 10,
            itemStyle: {
              normal: {
                barBorderRadius: [10, 10, 0, 0],
                color: utils.getColors().primary,
              },
            },
          }
        ],
        grid: { right: "0", left: "30px", bottom: "10%", top: "20%" },
      });
  
      echartSetOption(chart, userOptions, getDefaultOptions);
    }
};
/* -------------------------------------------------------------------------- */

docReady(barChart);