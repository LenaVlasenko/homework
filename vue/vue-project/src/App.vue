<script setup>
import MyParent from "./components/perentChildren/MyParent.vue";
</script>

<template>
  <main>
    <h1>Заголовок в обвертке (Main)</h1>
    <MyParent propsName="propsValue" varName="5"> </MyParent>
  </main>
</template>

<style scoped>
h1 {
  background: indianred;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
