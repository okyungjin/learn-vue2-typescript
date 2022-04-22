<template>
  <li>
    <span class="item" :class="classCompleted" @click="toggleItem">
      {{ todoItem.title }}
    </span>
    <button @click="removeTodoItem">삭제</button>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { ITodo } from '@/interface';

export default Vue.extend({
  computed: {
    classCompleted(): string {
      return this.todoItem.done ? 'complete' : '';
    },
  },
  methods: {
    removeTodoItem() {
      this.$emit('remove', this.index);
    },
    toggleItem() {
      this.$emit('toggle', this.todoItem, this.index);
    },
  },
  props: {
    index: Number,
    todoItem: Object as PropType<ITodo>,
  },
});
</script>

<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>
