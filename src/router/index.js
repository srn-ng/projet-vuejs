// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)

// import HomeView from "@/views/HomeView.vue";
// import AnimeView from "@/views/AnimeCreationView.vue";


// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: HomeView,
//   },
//   {
//     path: "/new-anime",
//     name: "Anime",
//     component: AnimeView,
//   },
// ];

// export default router;


import Vue from 'vue';
import Router from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import AnimeCreationView from "@/views/AnimeCreationView.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/new-anime",
    name: "AnimeCreation",
    component: AnimeCreationView,
  },
];

const router = new Router({
  routes,
});

export default router;
