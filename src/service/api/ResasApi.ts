import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Prefecture } from "@/service/models/pref.interface";
import { compositionOfPopulation } from "@/service/models/population.interface";

const instance: AxiosInstance = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp",
  headers: {
    "Content-type": "application/json;charset=UTF-8",
    "X-API-KEY": "pE2gjuRcz7CFlQ95Mwc5l6ABDJdOEBbbvNEU5FrO",
  },
});

const responseBody = (response: AxiosResponse) => {
  return response.data.result
}

export function getPrefectures(): Promise<Prefecture[]> {
  return instance
    .get('api/v1/prefectures')
    .then(responseBody)
    .catch((err) => console.log(err))
}

export function getComposition(prefCode: number): Promise<compositionOfPopulation> {
    return instance
    .get('/api/v1/population/composition/perYear?prefCode=' + prefCode)
    .then(responseBody)
    .catch((err) => console.log(err))
}