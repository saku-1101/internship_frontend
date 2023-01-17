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
          marginTop: 25,
        },
        title: {
          text: '',
        },
        tooltip: {
          backgroundColor: '#FCFFC5',
          borderColor: 'black',
          borderRadius: 10,
          borderWidth: 3,
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
        series: next,
      })
    },
    { deep: true }
  )
</script>
<template>
  <div id="container" style="width: 100%; height: 400px"></div>
</template>
