// import Prefectures from '../models/pref.interface'
import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
  method: 'GET',
  baseURL: 'https://opendata.resas-portal.go.jp',
  headers: {
    'X-API-KEY': 'pE2gjuRcz7CFlQ95Mwc5l6ABDJdOEBbbvNEU5FrO',
    'Content-Type': 'application/json;charset=UTF-8',
  },
})
const responseBody = (response: AxiosResponse) => {
  return response.data.result
}

function getPrefecture() {
  return instance.get('api/v1/prefectures')
  .then(responseBody)
  .catch((err) => console.log(err))
}

getPrefecture()
