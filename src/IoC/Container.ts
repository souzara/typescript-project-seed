import { Container } from 'inversify';
import { IHelloWorldService, HelloWorldService } from '../Services/HelloWorld.Service';
import { IConfiguration } from '../Models/IConfiguration';
import TYPES from './TYPES';


declare var CONFIGURATION: IConfiguration;


let container = new Container({ autoBindInjectable: true });



container.bind<IHelloWorldService>(TYPES.IHelloWorldService).to(HelloWorldService).inSingletonScope();
container.bind<IConfiguration>(TYPES.IConfiguration).toDynamicValue(((context) => CONFIGURATION));

export default container;