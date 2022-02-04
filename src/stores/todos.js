import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => {
    return {
      todos: [],
      text: 'Text'
    }
  }
})
