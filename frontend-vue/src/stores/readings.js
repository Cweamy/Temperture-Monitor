import { defineStore } from 'pinia';
import api from '../api/axios';

export const useReadingsStore = defineStore('readings', {
  state: () => ({
    items: [],
    loading: false,
    error: ''
  }),
  actions: {
    async fetchReadings(limit = 100) {
      this.loading = true;
      this.error = '';
      try {
        const res = await api.get('/api/readings', {
          params: { limit }
        });
        this.items = res.data || [];
      } catch (e) {
        console.error(e);
        this.error = 'โหลดข้อมูลไม่สำเร็จ';
      } finally {
        this.loading = false;
      }
    }
  }
});
