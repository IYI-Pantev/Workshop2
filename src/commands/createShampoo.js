import { ApplicationData } from "../core/applicationData.js";
import { try_parse_float, try_parse_int, validateParamsCount } from "./validationHelpers.js";

export class CreateShampooCommand {
    #params;
    #appData;

    /**
    * @param {string[]} params
    * @param {ApplicationData} appData
    */
    constructor(params, appData) {
        validateParamsCount(params, 6);

        this.#params = params;
        this.#appData = appData;
    }

    execute() {
        throw new Error("Not implemented!");
    }
}