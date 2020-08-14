<template>
  <div class="quiz-content">
    <h1>COUNTRY QUIZ</h1>

    <Questions v-if="this.$route.path === '/quiz'"/>
    <!-- <router-link to="/results">
      <Results/>
    </router-link>-->
    <!-- <Results v-if="this.$route.path === '/results'"/> -->
  </div>
</template>

<script>
import Questions from "./Questions.vue";
// import Results from "./Results.vue";
export default {
  name: "Quiz",
  components: {
    Questions //,
    // Results
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
