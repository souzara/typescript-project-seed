import "reflect-metadata";
import { IHelloWorldService } from "./Services/HelloWorld.Service";
import container from "./IoC/Container";
import TYPES from "./IoC/TYPES";


var helloWorldService = container.get<IHelloWorldService>(TYPES.IHelloWorldService);

helloWorldService.SayHello();