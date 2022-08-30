
class Storage {

  localStorage = window.localStorage;

  get(key) {
    const result = this.localStorage.getItem(key);
    return (result === null) ? null : JSON.parse(result);
  }

  set(key, content) {
    const stringified = JSON.stringify(content);
    this.localStorage.setItem(key, stringified);
  }

}

export const storage = new Storage();
