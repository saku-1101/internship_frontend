<script setup lang="ts">
  import { Prefecture } from "@/service/models/pref.interface";
  import { compositionOfPopulation } from "@/service/models/population.interface";
  import { propsComposition } from "@/service/models/compositionData.interface";
  import { getPrefectures, getComposition }  from "@/service/api/resasApi";
  import { onMounted, ref } from 'vue';
  import CheckBoxes from "./components/CheckBoxes.vue";
  import HighCharts from "./components/HighCharts.vue";

  const prefectures = ref<Prefecture[]>([]);
  onMounted(async () => {
  prefectures.value = await getPrefectures();
});

const val = ref<compositionOfPopulation>()



const dataForProps = ref<propsComposition[]>([]);
async function BtnClicked(prefCode: number, prefName: string) {
    val.value = await getComposition(prefCode)
    for (let index = 0; index < val.value.data.length; index++) {
      const element = val.value.data[index];
      if (element['label'] == "総人口") {
        dataForProps.value.push(new propsComposition(prefName, prefCode, element['data'][0]))
      }
    }
    console.log(dataForProps);
}

</script>
<template>
  <h1>都道府県別人口の推移</h1>
  <CheckBoxes :prefectures="prefectures" @pref-clicked ="BtnClicked"/>
  <HighCharts :composition = "dataForProps" />
</template>


