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
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  methods: {
    onInputChanged(evt: InputEvent): void {
      const evtTarget = evt.target as HTMLInputElement; // type assertion
      this.$emit('input', evtTarget.value);
    },
    addTodo(): void {
      this.$emit('add');
    },
  },
});
</script>

<style scoped></style>
