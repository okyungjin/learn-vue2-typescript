<template>
  <div>
    <header>
      <h1>Vue Todo with TypeScript</h1>
    </header>
    <main>
      <TodoInput
        :item="todoText"
        @input="updateTodoText"
        @add="addTodoItem"
      ></TodoInput>
      <div>
        <TodoListItem :items="todoItems"></TodoListItem>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';
import TodoListItem from './components/TodoListItem.vue';

const STORAGE_KEY = 'vue-todo-ts-v1';
const storage = {
  fetch(): string[] {
    const todoItems: string = localStorage.getItem(STORAGE_KEY) || '[]';
    console.log(todoItems);
    return JSON.parse(todoItems);
  },
  save(todoItems: any[]) {
    const parsed = JSON.stringify(todoItems);
    localStorage.setItem(STORAGE_KEY, parsed);
  },
};

export default Vue.extend({
  components: { TodoInput, TodoListItem },
  created() {
    this.fetchTodoItems();
  },
  data() {
    return {
      todoItems: [] as any[],
      todoText: '',
    };
  },
  methods: {
    addTodoItem(): void {
      this.fetchTodoItems();
      const newTodoItems = [this.todoText, ...this.todoItems];
      console.log(newTodoItems);
      storage.save(newTodoItems);
      this.initTodoText();
    },
    fetchTodoItems() {
      this.todoItems = storage.fetch();
    },
    initTodoText(): void {
      this.todoText = '';
    },
    updateTodoText(value: string): void {
      this.todoText = value;
    },
  },
});
</script>

<style scoped></style>
