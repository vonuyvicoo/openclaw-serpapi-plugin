import { SerpAPIError } from "./base";

export class NotFoundError extends SerpAPIError {
    public readonly name: string = "NotFoundError";

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}
