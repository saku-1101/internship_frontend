// import { Prefecture } from '@/service/models/pref.interface'
import axios, { AxiosInstance } from 'axios'

// // export interface Prefecture {
// //   prefCode: number
// //   prefName: string
// // }

const instance: AxiosInstance = axios.create({
  method: 'GET',
  baseURL: 'https://opendata.resas-portal.go.jp',
  headers: {
    'X-API-KEY': 'pE2gjuRcz7CFlQ95Mwc5l6ABDJdOEBbbvNEU5FrO',
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

// const responseBody = (response: AxiosResponse) => {
//   console.log(response.data.result)
//   return response.data.result
// }

// // export async function getPrefectures(): Promise<Prefecture[]> {
// //   const prefectures: Prefecture[] = await instance
// //     .get('api/v1/prefectures')
// //     .then(responseBody)
// //     .catch((err) => console.log(err))
// //   console.log(prefectures)

// //   return prefectures
// // }

// // export async function getComposition(prefCode: Prefecture['prefCode']) {
// //   const data = await instance
// //     .get('/api/v1/population/composition/perYear?prefCode=' + prefCode)
// //     .then(responseBody)
// //     .catch((err) => console.log(err))
// //   return data
// // }

// class resasInstance {
//   getPrefectures(): Promise<Prefecture[]> {
//     return instance
//       .get('api/v1/prefectures')
//       .then(responseBody)
//       .catch((err) => console.log(err))
//   }
//   getComposition(prefCode: Prefecture['prefCode']) {
//     return instance
//       .get('/api/v1/population/composition/perYear?prefCode=' + prefCode)
//       .then(responseBody)
//       .catch((err) => console.log(err))
//   }
// }
// export default new resasInstance();
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

export interface Prefecture {
  prefCode: number;
  prefName: string;
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
export default resasInstance;
