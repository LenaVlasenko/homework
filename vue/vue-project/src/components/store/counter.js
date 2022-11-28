//определить хранилище
import { defineStore } from "pinia";

//предоставить его всем кому это нужно
export const useCounterStore = defineStore("counter", {
  // Изначальное состояние
  state: () => ({
    count: 0,
  }),
  // Операции с данными - которые я могу выполнять
  actions: {
    plus() {
      this.count++;
    },
    minus() {
      this.count--;
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random());
    },
  },
});
