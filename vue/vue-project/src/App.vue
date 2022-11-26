<script setup>
import PostElement from "./components/slots/post/PostElement.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">hello</div>
  </header>

  <main>
    <MyParent>
      <PostElement>
        <template #header>А это отправить в заголовок</template>
        <template #footer>А это уйдет в подвал</template>
        <div>Это попадает в место - где должен быть слот</div>
        <template #body>А это отправить в тело</template>
        <div>Это тоже попадает в место - где должен быть слот</div>
      </PostElement>
    </MyParent>
  </main>
</template>

<style scoped>
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
