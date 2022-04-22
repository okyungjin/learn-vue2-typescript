const STORAGE_KEY = 'vue-todo-ts-v1';
const storage = {
  fetch<T>(): T[] {
    const items: string = localStorage.getItem(STORAGE_KEY) || '[]';
    return JSON.parse(items);
  },
  save<T>(items: T[]) {
    const parsed = JSON.stringify(items);
    localStorage.setItem(STORAGE_KEY, parsed);
  },
};

export { storage };
