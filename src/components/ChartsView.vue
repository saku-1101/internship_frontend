<script setup lang="ts">
  import { watch } from 'vue'
  import * as Highcharts from 'highcharts'

  const props = defineProps<{
    composition: Highcharts.SeriesOptionsType[]
  }>()

  watch(
    props.composition,
    (pev, next) => {
      console.log(props.composition)
      Highcharts.chart('container', {
        chart: {
          marginTop: 50,
          marginLeft: 80
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
          tickInterval: 10,
          title: { align: 'high', text: '年度' },
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
        },
        credits: {
          enabled: false,
        },
        series: next,
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false,
            },
            pointStart: 2010,
          },
        },
      })
    },
    { deep: true }
  )
</script>
<template>
  <div id="container" style="width: 100%; height: 400px"></div>
</template>
<style>
  .highcharts-data-table thead tr,
  .highcharts-data-table tr:nth-child(even) {
    background: #f8f8f8;
  }

  .highcharts-data-table tr:hover {
    background: #f1f7ff;
  }
</style>
