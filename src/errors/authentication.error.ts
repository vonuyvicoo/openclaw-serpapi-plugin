import { SerpAPIError } from "./base";

export class AuthenticationError extends SerpAPIError {
    public readonly name: string = "AuthenticationError";

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, AuthenticationError.prototype);
    }
}

