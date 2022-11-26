<script setup>
import PostElement from "./components/slots/post/PostElement.vue";
import NpAreas from "./components/novaPoshta/NpAreas.vue";
</script>

<template>
  <main>
    <h1>Заголовок в обвертке (Main)</h1>
    <PostElement>
      <template #header>А это отправить в заголовок</template>
      <template #footer>А это уйдет в подвал</template>
      <div>Это попадает в место - где должен быть slot</div>
      <template #body>А это отправить в тело</template>
      <div>Это тоже попадает в место - где должен быть slot</div>
    </PostElement>
    <PostElement>
      <template #header> <NpAreas /> </template>
    </PostElement>
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
