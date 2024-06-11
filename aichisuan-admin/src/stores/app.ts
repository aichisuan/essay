import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userAppstore = defineStore('counter', () => {
  const count = ref(0)
})
