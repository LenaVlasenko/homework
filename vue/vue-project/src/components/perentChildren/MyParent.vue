<template>
  <div style="border: 1px solid indianred">
    <h3>Parent</h3>
    <MyChildren></MyChildren>
    <hr />
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped></style>
<script>
import MyChildren from "./MyChildren.vue";
export default {
  components: { MyChildren },
};
</script>
