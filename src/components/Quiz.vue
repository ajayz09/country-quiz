<template>
  <div class="quiz-content">
    <h1 id="quiz-header">COUNTRY QUIZ</h1>
    <Questions v-if="this.$route.path === '/quiz'"/>
  </div>
</template>

<script>
import Questions from "./Questions.vue";
export default {
  name: "Quiz",
  components: {
    Questions
  }
};
</script>


<style scopped>
.quiz-content #quiz-header {
  float: left;
  font-weight: 900;
  color: white;
}
</style>
