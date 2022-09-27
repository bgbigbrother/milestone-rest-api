import config from "./config";
import Token from './Token';
import {ApiClient, RSApi} from "./rest-api/index";

export default class Api {
    
    #accessToken = null;

    constructor() {
    }

    initAPI() {
        let defaultClient = ApiClient.instance;
        let bearerAuth = defaultClient.authentications['bearerAuth'];
        bearerAuth.type = 'oauth2';
        bearerAuth.accessToken = this.#accessToken.getValue();
        this.api = new RSApi();
        this.api.apiClient.basePath = config.vms + config.apiRelativePath;
    }

    async getToken() {
        const response = await fetch(config.idp + config.idpRelativePath, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "grant_type=password&username=" + config.vmsUser +"&password=" + config.vmsPass + "&client_id=GrantValidatorClient"
        });
        response.json().then((data) => {
            this.#accessToken = new Token(data);
            this.initAPI();
        });
    }

    request (method, id = null, callback) {
        if(this.api[method]) {
            if(id) {
                this.api[method](id, (error, data, response) => {
                    callback &&  callback(data._array);
                });
            } else {
                this.api[method]((error, data, response) => {
                    callback &&  callback(data._array);
                });
            }
        }
    }
}