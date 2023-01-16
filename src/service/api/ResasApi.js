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
    console.log(response.data);
    return response.data;
};
function getPrefecture() {
    return instance.get('api/v1/prefectures')
        .then(responseBody)["catch"](function (err) { return console.log(err); });
}
getPrefecture();
