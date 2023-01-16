"use strict";
exports.__esModule = true;
// import Prefectures from '../models/pref.interface'
var axios_1 = require("axios");
var instance = axios_1["default"].create({
    method: 'GET',
    baseURL: 'https://opendata.resas-portal.go.jp',
    headers: {
        'X-API-KEY': 'pE2gjuRcz7CFlQ95Mwc5l6ABDJdOEBbbvNEU5FrO',
        'Content-Type': 'application/json;charset=UTF-8'
    }
});
var responseBody = function (response) {
    console.log(response.data.result);
    return response.data.result;
};
// function getPrefecture(): Promise<Prefectures> {
//   return instance.get('api/v1/prefectures')
//   .then(responseBody)
//   .catch((err) => console.log(err))
// }
function getComposition(prefCode) {
    return instance.get('/api/v1/population/composition/perYear?prefCode=' + prefCode)
        .then(responseBody)["catch"](function (err) { return console.log(err); });
}
getComposition(1);
