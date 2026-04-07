import { SerpAPIError } from "./base";

export class AuthorizationError extends SerpAPIError {
    public readonly name: string = "AuthorizationError";

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, AuthorizationError.prototype);
    }
}


