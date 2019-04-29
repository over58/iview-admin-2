<template>
  <div class="chart">
    <Row>
      <Col span="12">
        <chart-line :data="mockData.pie.count_tendency" title="响应时间分布(simple)" type="spline" simple></chart-line>
      </Col>
      <Col span="12">
        <chart-pie :data="mockData.pie.count" title="响应时间分布" type="spline"></chart-pie>
      </Col>
    </Row>
    <chart-line
      type="spline"
      :data="mockData.pie.count_tendency"
      title="响应时间分布"
      :plot-line="{text: '5000', value: 5000, align: 'right'}"
      ></chart-line>
  </div>
</template>

<script>
import mockData from '@/components/chart/mock.js'
import ChartLine from '@/components/chart/ChartLine'
import ChartPie from '@/components/chart/ChartPie'

export default {
  name: 'chart',
  components: {
    ChartLine,
    ChartPie
  },
  data () {
    return {
      mockData: mockData
    }
  }
}
</script>

<style lang="less" scoped>
.chart{

}
</style>
