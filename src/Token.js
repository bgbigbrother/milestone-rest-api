export default class Token {

    #token = null;

    #ttl = null;

    #date = Date.now();

    constructor(params) {
        if(params.access_token) {
            this.#token = params.access_token;
        }

        if(params.expires_in) {
            this.#ttl = params.expires_in;
        }
    }

    isValid() {
		return this.#getTime() / 1000 < this.#ttl;
	}

    getValue() {
		return this.#token;
	}

    #getTime() {
        return Date.now() - this.#date;
    }

}