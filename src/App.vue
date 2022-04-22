<template>
  <div>
    <h1>Vue Todo with TypeScript</h1>
    <TodoInput :item="todoText" @input="updateTodoText" @add="addTodoItem"></TodoInput>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoInput from './components/TodoInput.vue';

export default Vue.extend({
  components: { TodoInput },
  data() {
    return {
      todoText: '',
    };
  },
  methods: {
    updateTodoText(value: string): void {
      this.todoText = value;
    },
    addTodoItem(): void {
      const value = this.todoText;
      localStorage.setItem(value, value);
      this.initTodoText();
    },
    initTodoText(): void {
      this.todoText = '';
    },
  },
});
</script>

<style scoped></style>
