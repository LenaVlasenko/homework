<template>
  <h4>Register</h4>
  <div class="All">
    <div class="form">
      <label
        >Email
        <input type="email" v-model="regUser.email" :class="email" />
      </label>
      <label
        >Parol
        <input type="text" v-model="regUser.password" :class="password" />
      </label>
      <label
        >Config Parol
        <input type="text" v-model="regUser.paswordC" :class="passwordConfig" />
      </label>
      <button>Submit</button>
    </div>
    <hr />
    <div class="ans">
      <p>{{ emailValid }}</p>
      <p>{{ passwordValid }}</p>
      <p>{{ textValid }}</p>
      <p>{{ computedPass }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";

let regUser = reactive({ email: "", password: "", paswordC: "" });

// const props = defineProps(["regUser"]);
// console.log(props.regUser);

const emailValid = computed(() => {
  return !regUser.email.match(/(?=.*[A-Z])(?=.*[0-9])/)
    ? "1. Эмэил должен содержать одну большую букву и одну цифру"
    : "1. Все ок, super good";
});

const passwordValid = computed(() => {
  return !regUser.password.match(/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
    ? "2. Пароль должен содержать одну большую букву и одну цифру и один спец символ"
    : "2. Все ок, super good";
});

const textValid = computed(() => {
  return regUser.password.length > 5
    ? "3. Все ок"
    : "3. Пароль меньше 6ти символов";
});

const computedPass = computed(() => {
  return regUser.paswordC === regUser.password
    ? "4. Все ок"
    : "4. Разные пароли";
});

// const submit = () => {
//   regUser = regUser.password.value + regUser.email.value;
// };
</script>

<style scoped>
h4 {
  background: darkseagreen;
  text-align: center;
}
input {
  display: flex;
  border-radius: 5px;
  margin-left: 25%;
}

.All {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}

.form {
  width: 70%;
  text-align: center;
  background: lightgreen;
}
.ans,
p {
  font-size: 10px;
  text-align: left;
  margin-left: 3%;
}
.ans {
  background: lightgoldenrodyellow;
}
</style>
