<script setup lang="ts">
  import * as HighCharts from 'highcharts'
  import { watch } from 'vue'
  import { propsComposition } from '@/service/models/compositionData.class'

  const props = defineProps<{
    composition: propsComposition[]
  }>()

  watch(
    props.composition,
    (next, prev) => {

      HighCharts.chart({
        chart: {
          renderTo: 'chart',
          marginTop: 25,
        },
        title: {
          text: '',
        },
        yAxis: {
          title: {
            text: '人口数',
            align: 'high',
            rotation: 0,
            y: -15,
            style: {
              'text-anchor': 'start',
            },
            reserveSpace: false,
          },
          labels: {
            format: '{value:,.0f}',
          },
        },
        xAxis: {
          tickInterval: 5,
          title: { align: 'high', text: '年度' },
        },
        legend: {
          layout: 'vertical',
          backgroundColor: '#FFFFFF',
          floating: true,
          align: 'left',
          x: 70,
          verticalAlign: 'top',
          y: 20,
        },
        credits: {
          enabled: false,
        },
        series: [],
      })
    },
    { deep: true }
  )
</script>
<template>
  <div id="container" style="width: 100%; height: 400px"></div>
</template>
