<template>
  <h3>Ref & Reactive</h3>
  <div>
    {{ v_reactive }}
  </div>
  <hr />
  <div>
    {{ v_ref }}
  </div>
  <hr />
  <div>
    {{ state }}
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

let someVars = "Hello World";

let v_reactive = reactive(someVars);
let v_ref = ref(someVars);

const count = ref(0);
const state = reactive({
  count,
});
</script>

<style scoped>
h3 {
  color: blue;
}
</style>
