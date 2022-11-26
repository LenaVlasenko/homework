<template>
  <h1>Заголовок в обвертке (Post Element)</h1>
  <h3>Post Element</h3>
  <article style="border: 2px solid mediumseagreen">
    <header>
      <slot name="header"></slot>
    </header>

    <div>
      <slot name="body"></slot>
      <slot></slot>
    </div>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<script setup></script>

<style scoped>
h1 {
  background: mediumseagreen;
}
</style>
