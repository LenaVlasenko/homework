<template>
  <h3>Children</h3>
  <p>count: {{ props.count }}</p>
</template>

<script setup>
const props = defineProps(["count"]);
console.log("In children count:");
console.log(props.count);

//Пропсы риад онли
// дается один раз при рождении и поменять их нельзя
// const doPlus = () => {
//   props.count.value++;
// };
// const doMinus = () => {
//   props.count.value--;
// };
</script>

<style scoped></style>
