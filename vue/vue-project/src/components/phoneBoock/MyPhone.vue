<template>
  <h1>PhoneBoock</h1>
  <ul v-if="contacts.length > 0">
    <li v-for="(contact, index) in contacts" :key="index">
      {{ contact }}
      <button @click="contacts.splice(index, 1)">-</button>
    </li>
  </ul>
  <div v-else>У вас нет контактов</div>
  <label>Name:<input id="newName" /></label>
  <label>Contact:<input id="newContact" /></label>
  <button @click="addPeople">+</button>
</template>

<script setup>
import { ref } from "vue";

let contacts = ref([]);
const addPeople = function () {
  contacts.value.push(document.getElementById("newName").value);
  contacts.value.push(document.getElementById("newContact").value);
  console.log(contacts);
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  /*display: inline-flex;*/
}

input {
  display: flex;
}
label {
  display: flex;
}
</style>
