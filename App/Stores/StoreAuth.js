import axios from 'axios';


import { is, curryN, gte } from 'ramda'
import { observable } from 'mobx';
import {Config} from '../Config/Config.js'
const userApiClient = axios.create({
    /**
     * Import the config from the App/Config/index.js file
     */
    baseURL: Config.API_URL,

    timeout: 3000,
});
const isWithin = curryN(3, (min, max, value) => {
    const isNumber = is(Number)
    return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
});
const in200s = isWithin(200, 299);
export default class StoreAuth {

    @observable  status;
    async Auth(credentials) {

        userApiClient.post('/auth/login',
            {
                username : credentials.username,
                password : credentials.password
            }
            ).then((response) => {

            if (in200s(response.status)) {

                return response.status

            }
            return null
        }).catch(function (error) {
            return error;
        })
    }
}
