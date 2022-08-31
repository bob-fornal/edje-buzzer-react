
import { BehaviorSubject } from 'rxjs';

import config from '@Core/Constants/config.json';

class Storage {

  key = new BehaviorSubject('');
  
  localStorage = window.localStorage;

  constructor() {
    const keyValue = this.get(config.key) || '';
    this.key.next(keyValue);
  };

  setKey (content) {
    const key = config.key;
    this.key.next(content);
    this.set(key, content);
  }

  get(key) {
    const result = this.localStorage.getItem(key);
    return (result === null) ? null : JSON.parse(result);
  }

  set(key, content) {
    const stringified = JSON.stringify(content);
    this.localStorage.setItem(key, stringified);
  }

  remove(key) {
    this.localStorage.removeItem(key);
  }

}

export const storage = new Storage();
