import "reflect-metadata";
import { injectable, inject } from 'inversify';
import { DIKeys } from '../constants';
import type { ILocalStorageService } from './LocalStorageService';
import { KeyType } from './LocalStorageService';
import { container } from "../ioc";

export interface IResponseDataRootDto {
    isSuccess: boolean,
    errorMessage: string
}

export interface IResponseData<T> extends IResponseDataRootDto {
    content: T
}

export interface IHttp {
    get<T>(url: string): Promise<IResponseData<T>>;
}

@injectable()
export class Http implements IHttp {

    // @inject(DIKeys.LocalStorageName) localStorageService: ILocalStorageService;

    // public constructor(
    //     localStorageService: ILocalStorageService) {
    //         this.localStorageService = localStorageService;
    //         console.log("Http cctro is executed.")
    //         localStorage.set(KeyType.Temp, 'Value from constructor.')
    //     }

    private localService: ILocalStorageService = container.get<ILocalStorageService>(DIKeys.LocalStorageName);

    constructor() {
        this.localService.set(KeyType.Temp, 'Value from constructor12321313123.');
        console.log("Http is executed.");
    }

    public async get<T>(url: string): Promise<IResponseData<T>> {
        const response = await fetch(url);
        if (!response.ok) {
            return { isSuccess: response.ok, errorMessage: 'went something wrong'} as IResponseData<T>;
        }
        const result = await response.json();
        return { isSuccess: response.ok, content: result} as IResponseData<T>
    }
}