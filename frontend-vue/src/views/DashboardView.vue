<template>
  <LayoutShell>
    <div class="dashboard">
      <div class="stats-grid">
        <StatCard
          label="Temperature"
          :value="lastTemp"
          unit="°C"
          :hint="`Latest at ${lastTime}`"
        />
        <StatCard
          label="Humidity"
          :value="lastHumidity"
          unit="%"
          :hint="`Latest at ${lastTime}`"
        />
        <StatCard
          label="Pressure"
          :value="lastPressure"
          unit="hPa"
          :hint="`Latest at ${lastTime}`"
        />
      </div>

      <div class="charts-grid">
        <ReadingChart
          title="Temperature"
          label="Temp (°C)"
          color="#e67e22"
          key-field="temperature"
          :readings="readings.items"
        />
        <ReadingChart
          title="Humidity"
          label="Humidity (%)"
          color="#3498db"
          key-field="humidity"
          :readings="readings.items"
        />
        <ReadingChart
          title="Pressure"
          label="Pressure (hPa)"
          color="#2ecc71"
          key-field="pressure"
          :readings="readings.items"
        />
      </div>

      <p v-if="readings.error" class="error">{{ readings.error }}</p>
    </div>
  </LayoutShell>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useReadingsStore } from '../stores/readings';
import LayoutShell from '../components/LayoutShell.vue';
import StatCard from '../components/StatCard.vue';
import ReadingChart from '../components/ReadingChart.vue';

const readings = useReadingsStore();

onMounted(() => {
  readings.fetchReadings(100);
});

const last = computed(() => readings.items[0] || null);

const lastTemp = computed(() =>
  last.value ? last.value.temperature?.toFixed(2) : '-'
);
const lastHumidity = computed(() =>
  last.value && last.value.humidity != null
    ? last.value.humidity.toFixed(2)
    : '-'
);
const lastPressure = computed(() =>
  last.value && last.value.pressure != null
    ? last.value.pressure.toFixed(2)
    : '-'
);
const lastTime = computed(() =>
  last.value ? new Date(last.value.created_at).toLocaleString() : '-'
);
</script>
