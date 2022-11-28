<template>
  <h3>Регионы</h3>
  <button @click="loadAreas">Reload Areas</button>
  <select @change="onAreaChangeEvent">
    <option
      v-for="(area, index) in novaPoshta.areas"
      :key="index"
      :value="index"
    >
      {{ area.Description }}
    </option>
  </select>

  <div>Selected: {{ selectedArea }}</div>
  <div>Selected: {{ novaPoshta.selectedArea }}</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useNovaPoshtaStore } from "../store/novaPoshta/novaPoshta";

//let areas = reactive([]);
let novaPoshta = useNovaPoshtaStore();
let selectedArea = ref("");

const onAreaChangeEvent = (ev) => {
  console.log(ev.target.value);
  selectedArea.value = novaPoshta.areas[ev.target.value].Description;
  novaPoshta.selectArea(ev.target.value);
};

const loadAreas = () => {
  //появление данных
  novaPoshta.loadFormServer();
};

onMounted(() => loadAreas());
</script>

<style scoped>
h3 {
  background: aquamarine;
}
</style>
