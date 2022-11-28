<template>
  <h3>Main Page</h3>
  <MyIntro></MyIntro>
  <NpAreasNew></NpAreasNew>
</template>

<script setup></script>

<style scoped></style>
<script>
import MyIntro from "../components/MyPinia/MyIntro.vue";
import NpAreasNew from "../components/novaPoshta/NpAreasNew.vue";
export default {
  components: { NpAreasNew, MyIntro },
};
</script>
