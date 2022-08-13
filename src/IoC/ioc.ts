
import { Container } from 'inversify';
import {  DefaultLocalStorageService } from './dependencies/LocalStorageService';
import type { ILocalStorageService } from './dependencies/LocalStorageService';
import type { IHttp } from './dependencies/Http';
import { Http } from './dependencies/Http';
import { DIKeys } from './constants';

export const container = new Container({ defaultScope: "Singleton" });

container.bind<ILocalStorageService>(DIKeys.LocalStorageName).to(DefaultLocalStorageService);
container.bind<IHttp>(DIKeys.HttpName).to(Http);
