<script setup lang="ts">
definePageMeta({
  layout: 'default',
  colorMode: 'light'
})
import { signInWithEmailAndPassword } from 'firebase/auth'
const nuxtApp = useNuxtApp()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const login = async () => {
  await signInWithEmailAndPassword(
    nuxtApp.$auth,
    email.value,
    password.value
  )

  await nuxtApp.$auth.authStateReady()

  navigateTo('/dashboard')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="w-80 space-y-4">
      <h1 class="text-xl font-bold text-center">Admin Login</h1>

      <UInput v-model="email" placeholder="Email" />
      <UInput v-model="password" type="password" placeholder="Password" />

      <UButton block :loading="loading" @click="login">
        Login
      </UButton>

      <p v-if="error" class="text-red-500 text-sm text-center">
        {{ error }}
      </p>
    </div>
  </div>
</template>