<template>
  <h1>Form Register</h1>
  <article>
    <header>
      <slot name="header">Header</slot>
    </header>

    <div>
      <slot name="body">Body</slot>
      <slot></slot>
      <!--      <p>User: {{ props.regUser }}</p>-->
    </div>

    <footer>
      <slot name="footer">Footer</slot>
    </footer>
  </article>
</template>

<script setup>
// const props = defineProps(["regUser"]);
// //console.log(regUser.password);
// console.log(props.regUser);
</script>

<style scoped>
h1 {
  background: mediumseagreen;
}
</style>
