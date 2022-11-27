<template>
  <input type="text" v-model="password" />
  <input type="text" v-model="configPassword" />
  <input type="button" :disabled="validate.btnSubmit" />
  <ValidateDisplay :validate="validate"></ValidateDisplay>
</template>

<script setup>
import { computed, ref } from "vue";
import ValidateDisplay from "./ValidateDisplay.vue";
//Поля для вывода
let password = ref(""); //Сам пароль
let configPassword = ref(""); //Его подтверждение

let validate = computed(() => {
  //Результат проверки можно нельзя
  let res = {
    len: true, // по умолчанию длина пароля правильная
    confirm: false, // по умолчанию пароли не совпадают
    btnSubmit: true, //
  };
  if (password.value.length < 3) {
    res["len"] = false; // если меньше 3х символов то не правильно
  }
  if (password.value === configPassword.value) {
    res["confirm"] = true; // если совпадают тогда все хорошо
  }

  //.....
  res["btnSubmit"] = !(res["len"] && res["confirm"]);

  console.log(res);
  return res;
});
</script>

<style scoped></style>
