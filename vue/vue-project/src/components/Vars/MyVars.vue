<template>
  <h3>My Vars</h3>
  <p>someVars = {{ someVars }}</p>
  <p>someVars Text = <span v-text="someVars"></span></p>
  <p>someVars HTML = <span v-html="someVars"></span></p>
  <p>
    <label>
      someInputVars
      <input v-model="someInputVars" />
      <span v-text="someInputVars"></span>
    </label>
  </p>
  <hr />
  <div>
    <h4>No Reactive</h4>
    <label>
      Email
      <input v-model="userNoReactive.email" />
      <span v-text="userNoReactive.email"> </span
    ></label>
    <label>
      Name
      <input v-model="userNoReactive.name" />
      <span v-text="userNoReactive.name"> </span
    ></label>
  </div>
  <hr />
  <div>
    <h4>Reactive</h4>
    <label>
      Email
      <input v-model="userReactive.email" />
      <span v-text="userReactive.email"> </span>
      <span>{{ userReactive.email }}</span>
    </label>
    <label>
      Name
      <input v-model="userReactive.name" />
      <span v-text="userReactive.name"> </span
    ></label>
  </div>
  <hr />
  <div>
    <h4>Ref</h4>
    <label>
      Email
      <input v-model="userRef.email" />
      <span v-text="userRef.email"> </span>
      <span>{{ userRef.email }}</span>
    </label>
    <label>
      Name
      <input v-model="userRef.name" />
      <span v-text="userRef.name"> </span
    ></label>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

let someVars = "Hello <strong> World </strong>";
let someInputVars = "User Name";

let userNoReactive = {
  email: "Vlasenko1@gmail.com",
  name: "Olena",
};

let userReactive = reactive({
  email: "Vlasenko1@gmail.com",
  name: "Olena",
});

let userRef = ref({
  email: "Vlasenko1@gmail.com",
  name: "Olena",
});
</script>

<style scoped>
input {
  display: flex;
}
label {
  display: flex;
}
h4 {
  color: blue;
}
</style>
