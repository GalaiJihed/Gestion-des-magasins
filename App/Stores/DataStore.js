import axios from 'axios';


import { is, curryN, gte } from 'ramda'
import { observable } from 'mobx';
import {Config} from '../Config/Config';
const StoreApi = axios.create({
    /**
     * Import the config from the App/Config/index.js file
     */
    baseURL:Config.API_URL ,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 3000,
});
const isWithin = curryN(3, (min, max, value) => {
    const isNumber = is(Number)
    return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
});
const in200s = isWithin(200, 299);
export default class DataStore {

 @observable stores = [];


    get stores() {
        return this.stores;
    }

    set stores(result: Array<Object>) {
        this.stores = result;
    }

    async getListStore() {

          StoreApi.post('/store/stores').then((response) => {

            if (in200s(response.status)) {

                this.stores = response.data;

            }
            return null
        }).catch(function (error) {
            return error;
        })
    }
}
