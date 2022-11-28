<template>
  <h1>Pina1 вывод из store</h1>
  <div>Counter = {{ counter.count }}</div>
  <button @click="plus">+</button>
  <button @click="minus">-</button>
</template>

<script setup>
import { useCounterStore } from "../store/counter";

const counter = useCounterStore();

const plus = () => {
  counter.plus();
};

const minus = () => {
  counter.minus();
};
</script>

<style scoped></style>
