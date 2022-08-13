import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DIKeys } from './IoC/constants';
import { useInjection } from './IoC/ioc.react';
import { ILocalStorageService, KeyType } from './IoC/dependencies/LocalStorageService';
import { IHttp } from './IoC/dependencies/Http';

function App() {

  const localStorageService: ILocalStorageService = useInjection<ILocalStorageService>(DIKeys.LocalStorageName);

  localStorageService.set(KeyType.Info, "Info Value 1234565123213");

  const http: IHttp = useInjection<IHttp>(DIKeys.HttpName);

  //http.get() http call

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
