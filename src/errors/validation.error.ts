import { SerpAPIError } from "./base";

export class ValidationError extends SerpAPIError {
    public readonly name: string = "ValidationError";
    constructor(message: string, public details?: any){
        super(message);
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}
