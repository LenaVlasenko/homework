<template>
  <h3>Регионы</h3>
  <button @click="loadAreas">Reload Areas</button>
  <select>
    <option v-for="(area, index) in areas" :key="index" :v-model="area.Ref">
      {{ area.Description }}
    </option>
  </select>

  <ul>
    <li v-for="(area, index) in areas" :key="index">
      {{ area.Description }}
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from "vue";

//let areas = reactive([]);
let areas = ref([]);

const loadAreas = () => {
  let data = {
    modelName: "Address",
    calledMethod: "getAreas",
  };

  //Проверим, есть ли эти данные в localStorage
  if (localStorage.getItem("npAreas")) {
    console.log("Эти данные уже есть в хранилище");
    areas.value = JSON.parse(localStorage.getItem("npAreas"));
  } else {
    fetch("https://api.novaposhta.ua/v2.0/json/", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((inAreas) => {
        console.log("Получено с сервера");
        console.log(inAreas.data);
        areas.value = inAreas.data;
        //Сохраним данные в локальном хранилище
        localStorage.setItem("npAreas", JSON.stringify(inAreas.data));
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
      });
  }
  //появление данных
};

onMounted(() => loadAreas());
</script>

<style scoped>
h3 {
  background: aquamarine;
}
</style>
