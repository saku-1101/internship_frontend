<script setup lang="ts">
  import { Prefecture } from "@/service/models/pref.interface";
  import { getPrefectures, getComposition }  from "@/service/api/resasApi";
  import { compositionOfPopulation } from "@/service/models/population.interface";
  import { onMounted, ref } from 'vue';
  import CheckBoxes from "./components/CheckBoxes.vue";

  const prefectures = ref<Prefecture[]>([]);
  onMounted(async () => {
  prefectures.value = await getPrefectures();
});

</script>
<template>
  <h1>都道府県別人口の推移</h1>
  <CheckBoxes :prefectures="prefectures" />
  
</template>


