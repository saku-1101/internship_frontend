<script setup lang="ts">
  import { Prefecture } from "@/service/models/pref.interface";
  import { onMounted, ref } from 'vue';
  import CheckBoxes from "./components/CheckBoxes.vue";
  import axios, { AxiosInstance } from 'axios'
  const instance: AxiosInstance = axios.create({
  method: 'GET',
  baseURL: 'https://opendata.resas-portal.go.jp',
  headers: {
    'X-API-KEY': 'pE2gjuRcz7CFlQ95Mwc5l6ABDJdOEBbbvNEU5FrO',
    'Content-Type': 'application/json;charset=UTF-8',
  },
})
  class apiService {
  prefectures(): Promise<Prefecture[]> {
    return instance.get("/api/v1/prefectures").then((res) => {
      return res.data.result;
    });
  }
  populationComposition(prefCode: number): Promise<compositionPerYear> {
    return instance
      .get("/api/v1/population/composition/perYear", {
        params: {
          prefCode,
          cityCode: "-",
        },
      })
      .then((res) => {
        return res.data.result;
      });
  }
}


interface compositionPerYear {
  boundaryYear: number;
  data: [
    {
      label: string;
      data: [
        {
          year: number;
          value: number;
        }
      ];
    }
  ];
}
const resasInstance = new apiService();
  const prefectures = ref([] as Prefecture[]);
  onMounted(async () => {
  prefectures.value = await resasInstance.prefectures();
});

</script>
<template>
  <h1>都道府県別の人口の推移</h1>
  <CheckBoxes :prefectures="prefectures" />
  
</template>


