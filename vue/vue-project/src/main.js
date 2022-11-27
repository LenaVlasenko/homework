// Импортируем минимальный набор необходимый для работы с маршрутами
import { createRouter, createWebHashHistory } from "vue-router/dist/vue-router";

// Импортируется метод создания приложения
import { createApp } from "vue";

// Импортируется главный компонент
import App from "./App.vue";
import "./assets/main.css";

// Расписываем, какой компонент будет импортироваться по маршруту
const routes = [
  // Маршрут, компонент. В данном случае - компонент будет подгружаться с сервера
  { path: "/", component: () => import("./pages/MainPage.vue") },
  { path: "/about", component: () => import("./pages/AboutPage.vue") },
  {
    // Описание не существующего маршрута - для вывода ошибки 404
    path: "/:pathMatch(.*)*",
    component: () => import("./pages/ErrorPage.vue"),
  },
];

// Создать маршрут на основе описаных маршрутов
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//Создать прилодение vue, с главным компонентом Арр
const app = createApp(App);

// Задействовать роутер для приложения
app.use(router);

// Разместить приложение на указаный div
app.mount("#app");
