import "reflect-metadata";

import { injectable } from "inversify";

export interface ILocalStorageService {
    get<T>(key: KeyType): T | null;
    set<T>(key: KeyType, value: T): void;
    remove(key: KeyType): void;
}

export enum KeyType {
    Token = 'Token',
    Temp = 'Temp',
    Info = 'Info',
    ProfileData = 'ProfileData'
}

@injectable()
export class DefaultLocalStorageService implements ILocalStorageService {

    public get<T>(key: KeyType): T | null {
        const value = localStorage.getItem(key);
        if (value === null) {
            return null;
        }
        return JSON.parse(value);
    }

    public set<T>(key: KeyType, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public remove(key: KeyType): void {
        localStorage.removeItem(key);
    }
}