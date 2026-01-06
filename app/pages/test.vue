<script setup lang="ts">
definePageMeta({
  layout: 'default',
  colorMode: 'light'
})
const nuxtApp = useNuxtApp()

console.log('AUTH:', nuxtApp.$auth)
console.log('DB:', nuxtApp.$db)
</script>

<template>
  <div class="p-10">
    Firebase Test Page (lihat console)
  </div>
</template>
