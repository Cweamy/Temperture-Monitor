<template>
  <div class="card chart-card">
    <div class="chart-title">{{ title }}</div>
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  CategoryScale,
  Tooltip,
  Legend
);

const props = defineProps({
  title: String,
  label: String,
  color: {
    type: String,
    default: '#f39c12'
  },
  keyField: {
    type: String,
    required: true
  },
  readings: {
    type: Array,
    default: () => []
  }
});

const chartData = computed(() => ({
  labels: props.readings.map((r) =>
    new Date(r.created_at).toLocaleTimeString()
  ),
  datasets: [
    {
      label: props.label,
      data: props.readings.map((r) => r[props.keyField]),
      borderColor: props.color,
      borderWidth: 2,
      tension: 0.35,
      pointRadius: 0
    }
  ]
}));

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: '#ccc' } }
  },
  scales: {
    x: {
      ticks: { color: '#888' },
      grid: { color: '#222' }
    },
    y: {
      ticks: { color: '#888' },
      grid: { color: '#222' }
    }
  }
};
</script>
