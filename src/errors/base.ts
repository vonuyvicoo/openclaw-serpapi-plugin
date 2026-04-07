export class SerpAPIError extends Error {
    public readonly name: string = "SerpAPIError";

    constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, SerpAPIError.prototype);
    }
}
