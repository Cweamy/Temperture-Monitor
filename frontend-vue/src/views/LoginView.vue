<template>
  <div class="auth-page">
    <div class="auth-card">
      <h1>ESP IoT Dashboard</h1>
      <p class="subtitle">Sign in to continue</p>

      <form @submit.prevent="handleLogin">
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          required
          placeholder="you@example.com"
        />

        <label>Password</label>
        <input
          v-model="password"
          type="password"
          required
          placeholder="••••••••"
        />

        <button :disabled="loading">
          {{ loading ? 'Signing in...' : 'Login' }}
        </button>

        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');
const router = useRouter();
const auth = useAuthStore();

const handleLogin = async () => {
  loading.value = true;
  error.value = '';
  try {
    await auth.login({
      email: email.value,
      password: password.value
    });

    router.push({ name: 'dashboard' });
  } catch (e) {
    console.error(e);
    error.value = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง';
  } finally {
    loading.value = false;
  }
};
</script>
