<template>
  <h3>Validated Password</h3>
  <input v-model="password.text" :class="textValid" />
  <div>{{ computedByPass }}</div>
  <p>{{ textValid }}</p>
  <p>{{ textLetterValid }}</p>
</template>

<script setup>
import { computed, reactive } from "vue";

let password = reactive({ text: "" });

const computedByPass = computed(() => {
  return password.text.length >= 6
    ? "Добро пожаловать"
    : "Пароль должен содержать не меньше 6 символов (computed)";
});

const textValid = computed(() => {
  return password.text.length > 5 ? "valid" : "invalid";
});

const textLetterValid = computed(() => {
  return !password.text.match(/(?=.*[A-Z])(?=.*[0-9])/)
    ? "Пароль должен содержать одну большую букву и одну цифру"
    : "Все ок";
});
</script>

<style scoped>
.valid {
  color: green;
}

.invalid {
  color: red;
}
</style>
