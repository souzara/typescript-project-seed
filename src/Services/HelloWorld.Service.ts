import { injectable, inject } from "../../node_modules/inversify";
import { IConfiguration } from "../Models/IConfiguration";
import TYPES from "../IoC/TYPES";

@injectable()
export class HelloWorldService implements IHelloWorldService {


    constructor(@inject(TYPES.IConfiguration) private configuration: IConfiguration) {
    }
    SayHello(): void {
        console.log("Settings: ", this.configuration);
        console.log("Hello World!");
    }
}


export interface IHelloWorldService {
    SayHello(): void;
}
