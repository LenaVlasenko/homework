<template>
  <h1>PhoneBoock</h1>
  <ul v-if="contacts.length > 0">
    <li v-for="(contact, index) in contacts" :key="index">
      {{ contact }} <button @click="contacts.splice(index, 1)">-</button>
    </li>
  </ul>
  <div v-else>У вас нет контактов</div>
  <input id="newName" /><button @click="addPeople">+</button>
</template>

<script setup>
import { ref } from "vue";

let contacts = ref([]);
const addPeople = function () {
  contacts.value.push(document.getElementById("newName").value);
  console.log(contacts);
};
</script>

<style scoped></style>
