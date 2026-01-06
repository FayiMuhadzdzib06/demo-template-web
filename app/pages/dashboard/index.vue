<script setup lang="ts">
import { signOut } from 'firebase/auth'

definePageMeta({
  layout: 'default',
  colorMode: 'light',
  middleware: 'auth',
})

const nuxtApp = useNuxtApp()

console.log('AUTH:', nuxtApp.$auth)
console.log('DB:', nuxtApp.$db)
const auth = nuxtApp.$auth;
const logout = async () => {
  await signOut(nuxtApp.$auth)

  await nuxtApp.$auth.authStateReady()

  navigateTo('/login')
}

</script>

<template>
  <div class="p-10 space-y-4">
    <div v-if="!auth.authStateReady" class="p-10 space-y-4">
      <p>loading</p>
    </div>
    <div v-else class="p-10 space-y-4">
      <h1 class="text-2xl font-bold">Dashboard</h1>
      <p>Login berhasil 🎉</p>

      <UButton color="error" @click="logout">
        Logout
      </UButton>
    </div>
  </div>
</template>
