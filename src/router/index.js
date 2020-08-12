import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
import Quiz from "@/components/Quiz";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/quiz"
    },
    {
      path: "/quiz",
      name: "Quiz",
      component: Quiz
    }
  ]
});
