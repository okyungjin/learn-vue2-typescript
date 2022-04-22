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
        <ul>
          <TodoListItem
            v-for="(item, index) in todoItems"
            :key="index"
            :index="index"
            :todoItem="item"
            @toggle="toggleTodoItemComplete"
            @remove="removeTodoItem"
          ></TodoListItem>
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ITodo } from '@/interface';
import TodoInput from './components/TodoInput.vue';
import TodoListItem from './components/TodoListItem.vue';

const STORAGE_KEY = 'vue-todo-ts-v1';
const storage = {
  fetch(): ITodo[] {
    const todoItems: string = localStorage.getItem(STORAGE_KEY) || '[]';
    return JSON.parse(todoItems);
  },
  save(todoItems: ITodo[]) {
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
      todoItems: [] as ITodo[],
      todoText: '',
    };
  },
  methods: {
    addTodoItem(): void {
      const value = this.todoText;
      const newTodoItem: ITodo = {
        done: false,
        title: value,
      };
      this.todoItems.push(newTodoItem);
      storage.save(this.todoItems);
      this.initTodoText();
      this.fetchTodoItems();
    },
    fetchTodoItems(): void {
      this.todoItems = storage.fetch();
    },
    initTodoText(): void {
      this.todoText = '';
    },
    removeTodoItem(index: number): void {
      this.todoItems.splice(index, 1);
      storage.save(this.todoItems);
    },
    toggleTodoItemComplete(todoItem: ITodo, index: number) {
      const toggled: ITodo = {
        ...todoItem,
        done: !todoItem.done,
      };
      this.todoItems.splice(index, 1, toggled);
      storage.save(this.todoItems);
    },
    updateTodoText(value: string): void {
      this.todoText = value;
    },
  },
});
</script>

<style scoped></style>
