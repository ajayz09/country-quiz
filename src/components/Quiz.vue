<template>
  <div class="quiz-content">
    <h1>COUNTRY QUIZ</h1>
    <Questions/>
  </div>
</template>

<script>
import Questions from "../components/Questions.vue";

export default {
  name: "Quiz",
  components: {
    Questions
  }
};
</script>


<style scopped>
.quiz-content h1 {
  float: left;
  font-weight: 900 !important;
  color: white;
}
</style>
