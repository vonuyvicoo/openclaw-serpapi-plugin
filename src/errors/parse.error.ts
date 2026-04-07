import { SerpAPIError } from "./base";

export class ParseError extends SerpAPIError {
    public readonly name: string = "ParseError";
    constructor(message: string, public details?: any){
        super(message);
        Object.setPrototypeOf(this, ParseError.prototype);
    }
}
