<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="logo">ESP Dashboard</div>
      <nav>
        <button class="nav-item active">Dashboard</button>
        <!-- เผื่ออนาคต: หน้า Devices / Alerts / Settings -->
      </nav>
      <button class="logout" @click="logout">Logout</button>
    </aside>

    <div class="content">
      <header class="topbar">
        <div class="top-title">Real-time Monitoring</div>
        <div class="top-user" v-if="auth.user">
          {{ auth.user.name || auth.user.email }}
        </div>
      </header>

      <main class="main">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';

const auth = useAuthStore();
const router = useRouter();

const logout = () => {
  auth.logout();
  router.push({ name: 'login' });
};
</script>
