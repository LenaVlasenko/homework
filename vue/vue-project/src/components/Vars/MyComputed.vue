<template>
  <h3>My Computed</h3>
  <input v-model="user.name" :class="nameValid" />
  <input v-model="user.age" type="number" />
  <div v-if="user.age < 18">Доступ запрещен</div>
  <div v-else-if="user.age > 18">Добро пожаловать</div>
  <hr />
  <div>{{ funByAge() }}</div>
  <!-- Я не везде могу использовать вывод результата функции -->
  <hr />
  <div>{{ computedByAge }}</div>
  <input v-model="computedByAge" />
  <hr />
</template>

<script setup>
import { computed, reactive } from "vue";

let user = reactive({ name: "Tom", age: 25 });

const funByAge = () => {
  return user.age > 17
    ? "Добро пожаловать(функция со скрипта)"
    : "Доступ запрещен Добро пожаловать(функция со скрипта)";
};

const computedByAge = computed(() => {
  return user.age > 17
    ? "Добро пожаловать(функция со скрипта computed)"
    : "Доступ запрещен Добро пожаловать(функция со скрипта computed)";
});

const nameValid = computed(() => {
  return user.name.length > 3 ? "valid" : "invalid";
});
</script>

<style scoped>
h3 {
  color: blue;
}

.valid {
  border: 2px solid green;
}

.invalid {
  border: 2px solid red;
}
</style>
