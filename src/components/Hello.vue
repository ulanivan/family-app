<template>
  <div>
    <h1 v-for="nub in nubs" :key="nub.id">
      Hello, {{ nub.name }}!
    </h1>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const nubs = ref([
      {
        id: 1,
        name: 'Mark'
      },
      {
        id: 2,
        name: 'Dima'
      }
    ])

    return { nubs }
  }
}
</script>
