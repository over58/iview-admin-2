<template>
  <Card dis-hover class="chart-item" style="margin-bottom:20px">
    <template v-if="!simple">
      <div slot="title" class="chart-item-title">
        {{ title }}
        <span style="float:right">
          <slot name="extra">
            <template v-if="unit">
              <span class="desc-title">单位</span> {{unit}} <span class='vertital-divider'>|</span>
            </template>
          </slot>
        </span>
      </div>
      <div class="chart-item-header">
        <slot name="operation"></slot>
      </div>
    </template>

    <div ref="chart" :class="['chart-item-content', {'simple' : simple}]"></div>
  </Card>
</template>

<script>
import Highcharts from 'highcharts'
import HighchartsNoData from 'highcharts/modules/no-data-to-display'
import HighchartsExporting from 'highcharts/modules/exporting'
import mockData from './mock.js'

HighchartsNoData(Highcharts)
HighchartsExporting(Highcharts)

export default {
  name: 'ChartItem',
  props: {
    simple: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'line',
      validator (val) {
        if (['area', 'spline', 'line'].indexOf(val) > -1) {
          return true
        } else {
          throw new Error('chart type must be oneof [line, spline, area]')
        }
      }
    },
    title: {
      type: String,
      default: ''
    }, // 图表名字
    extra: Object, // 关于图表的一些其他信息
    data: {
      type: Array,
      required: true
    },
    unit: {
      type: String,
      default: ''
    },
    plotLine: {
      type: Object,
      default: null
    },
    notTimeStamp: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      chartInstance: null,
      mockData: mockData
    }
  },
  computed: {
    // resize () {
    //   return this.$store.state.common.resize
    // },
    option () {
      return {
        chart: {
          type: this.type,
          // 图表缩放
          zoomType: 'x'
        },
        title: {
          text: this.simple ? this.title : '',
          style: {
            fontWeight: 'bold'
          }
        },
        credits: {
          text: 'http://nevis.sina.com.cn',
          href: 'http://nevis.sina.com.cn'
        },
        legend: {
          enabled: true,
          lineHeight: 20,
          maxHeight: 40
        },
        tooltip: {
          xDateFormat: '%Y-%m-%d %H:%M',
          valueDecimals: 2,
          shared: true
        },
        xAxis: {
          startOnTick: true,
          tickmarkPlacement: 'on',
          type: 'datetime',
          dateTimeLabelFormats: {
            day: '%Y/%b/%e'
          },
          followPointer: true,
          crosshair: true
        },
        yAxis: {
          startOnTick: true,
          lineWidth: 1,
          tickWidth: 1,
          title: {
            align: 'middle',
            text: `值(${this.unit})`
          },
          plotBands: [],
          min: this.min || null
        },
        plotOptions: {
          series: {
            lineWidth: 1,
            marker: {
              enabled: false
            }
          }
        },
        exporting: {
          enabled: true,
          buttons: {
            contextButton: {
              menuItems: [
                'viewFullscreen', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG'
              ]
            }
          },
          filename: this.title
        },
        series: this.innerData
      }
    },
    innerData () {
      if (this.notTimeStamp) {
        return this.data.map(item => {
          return [Date.parse(item[0]), item[1]]
        })
      } else {
        return this.data
      }
    }
  },
  watch: {
    // resize () {
    //   this.chartInstance && this.chartInstance.reflow()
    // }
  },
  methods: {
    init () {
      Highcharts.setOptions({
        global: {
          useUTC: false
        },
        lang: {
          loading: '加载中...',
          shortMonths: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          printChart: '打印图表',
          downloadJPEG: '导出jpeg',
          downloadPNG: '导出png',
          downloadSVG: '导出svg',
          downloadPDF: '导出pdf',
          noData: '暂无数据',
          contextButtonTitle: '导出',
          viewFullscreen: '全屏显示',
          viewData: '表格显示数据'
        }
      })
      let option = this.option
      if (this.plotLine) {
        option = Object.assign(this.option, {
          yAxis: {
            plotLines: [
              {
                value: this.plotLine.value,
                color: 'red',
                width: 2,
                dashStyle: 'solid',
                label: {
                  text: this.plotLine.text || '',
                  align: this.plotLine.align || 'left',
                  style: {
                    color: 'red',
                    fontSize: '18px'
                  }
                }
              }
            ]
          }
        })
      }
      Highcharts.chart(this.$refs.chart, option)
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.chartInstance && this.chartInstance.destroy()
    this.chartInstance = null
  }
}
</script>

<style lang="less" scoped>
.chart-item {
  margin-bottom: 20px;
  &-title {
    font-weight: bold;
    height: 18px;
    line-height: 18px;
    .vertital-divider{
      margin: 0 5px;
      display: inline-block;
      width: 1px;
      vertical-align: middle;
      color: #e8eaec;
      box-sizing: border-box;
      background: #e8eaec;
    }
    .desc-title{
      color: #888;
    }
  }
  &-header {
    text-align: right;
  }
  &-content {
    height: 300px;
  }
  .simple{
    height: 346px;
  }
}
</style>
