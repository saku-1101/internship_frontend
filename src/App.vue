<script setup lang="ts">
  import * as Highcharts from 'highcharts';
  import { Prefecture } from "@/service/models/pref.interface";
  import { compositionOfPopulation } from "@/service/models/population.interface";
  import { getPrefectures, getComposition }  from "@/service/api/ResasApi";
  import { onMounted, ref } from 'vue';
  import CheckBoxes from "./components/CheckBoxes.vue";
  import ChartsView from "./components/ChartsView.vue";

  const prefectures = ref<Prefecture[]>([]);
  onMounted(async () => {
  prefectures.value = await getPrefectures();
});


const val = ref<compositionOfPopulation>()
const dataForProps = ref<Array<Highcharts.SeriesOptionsType>>([]);
let ispainted = false; // 絵画されているか否かのフラグ

async function BtnClicked(prefCode: number, prefName: string) {
  for (let index = 0; index < dataForProps.value.length; index++) {
    const el = dataForProps.value[index];
    if (el.name == prefName) {
      dataForProps.value.splice(index,1)
      console.log(dataForProps.value);
      ispainted = true
      break
    }
  }
  // 絵画未の場合
  if (!ispainted) {
    // クリックされた都道府県のcompositionOfPopulationを取得
    val.value = await getComposition(prefCode)
    // 総人口，年少人口etc...から総人口のデータを抽出
    for (let index = 0; index < val.value.data.length; index++) {
      const element = val.value.data[index];
      if (element['label'] == "総人口") {
        // label=総人口のdataのyear, valueをHighChartが読める形でdataに格納
        const highdata: Array<number[]> = []
        for (let index = 0; index < element['data'].length; index++) {
          const el = element['data'][index];
          highdata.push([el['year'], el['value']])
        }
        console.log(highdata);
        
        dataForProps.value.push({ name: prefName, type: 'line', data: highdata })
      }
    }
  }
  ispainted = false
  
}

</script>
<template>
  <div id="container">
    <h1 id="title">都道府県別人口推移</h1>
    <CheckBoxes :prefectures="prefectures" @pref-clicked ="BtnClicked"/>
    <ChartsView :composition = "dataForProps" />
  </div>
  
</template>

<style lang="scss">
template{
    font-size: 62.5%;
}

#container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #title{
    font-size: calc(2.4rem + ((1vw - 0.64rem) * 2.1429));
  }
}
</style>


