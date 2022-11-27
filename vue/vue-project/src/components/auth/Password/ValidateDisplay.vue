<template>
  <h3>Проверка пароля</h3>
  <p>{{ props.validate.len }} {{ validateMessage.len }}</p>
  <p>{{ props.validate.confirm }} {{ validateMessage.confirm }}</p>
  <p>{{ props.validate.btnSubmit }}</p>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["validate"]);
console.log("props");
console.log(props.validate);

let validateMessage = computed(() => {
  let res = {
    len: "Длина не походит",
    confirm: "Пароли не совпалают",
  };
  if (props.validate.len) {
    res.len = "Длина подходит";
  }
  if (props.validate.confirm) {
    res.confirm = "Пароли совпадают";
  }

  return res;
});
</script>

<style scoped></style>
