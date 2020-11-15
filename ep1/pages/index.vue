<template>
  <div>
    <ol>
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :item="todo"
      ></TodoItem>
    </ol>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [
        { id: 1, text: 'Learn JavaScript' },
        { id: 2, text: 'Learn Vue' },
        { id: 3, text: 'Build something awesome' },
      ],
    }
  },
}
</script>

<style></style>
