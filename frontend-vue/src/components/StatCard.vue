<template>
  <div class="card stat-card">
    <div class="label">{{ label }}</div>
    <div class="value">{{ value }} <span class="unit">{{ unit }}</span></div>
    <div class="hint">{{ hint }}</div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: [Number, String],
  unit: String,
  hint: String
});
</script>
