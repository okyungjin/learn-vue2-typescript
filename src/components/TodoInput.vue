<template>
  <div>
    <label for="todo-input"></label>
    <input id="todo-input" type="text" :value="item" @input="onInputChanged" />
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    addTodo(): void {
      this.$emit('add');
    },
    onInputChanged(evt: InputEvent): void {
      const evtTarget = evt.target as HTMLInputElement; // type assertion
      this.$emit('input', evtTarget.value);
    },
  },
  props: {
    item: {
      required: true,
      type: String,
    },
  },
});
</script>

<style scoped></style>
