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
import { storage } from '@/utils/localStorage';
import TodoInput from './components/TodoInput.vue';
import TodoListItem from './components/TodoListItem.vue';

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
      storage.save<ITodo>(this.todoItems);
      this.initTodoText();
      this.fetchTodoItems();
    },
    fetchTodoItems(): void {
      this.todoItems = storage.fetch<ITodo>().sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    },
    initTodoText(): void {
      this.todoText = '';
    },
    removeTodoItem(index: number): void {
      this.todoItems.splice(index, 1);
      storage.save<ITodo>(this.todoItems);
    },
    toggleTodoItemComplete(todoItem: ITodo, index: number) {
      const toggled: ITodo = {
        ...todoItem,
        done: !todoItem.done,
      };
      this.todoItems.splice(index, 1, toggled);
      storage.save<ITodo>(this.todoItems);
    },
    updateTodoText(value: string): void {
      this.todoText = value;
    },
  },
});
</script>

<style scoped></style>
