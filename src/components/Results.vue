<template>
  <div class="quiz-card">
    <md-card md-with-hover>
      <md-card-media style="margin: 20px 50px 0 50px;">
        <img src="../assets/undraw_winners.svg" alt="Flag">
      </md-card-media>
      <md-card-header>
        <div class="md-title">Results</div>
      </md-card-header>

      <md-card-content>
        <div class="quiz-results" style="text-align:center">
          <span>You got</span>
          <span
            style="color:#6FCF97;padding:5px;font-weight:900;font-size:30px;"
          >{{correctAnswerCount}}</span>
          <span>correct answers</span>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-flat try-again-btn" v-on:click="tryAgain()">Try again</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: ["correctAnswerCount"],
  created() {
    console.log("In results");
  },
  methods: {
    tryAgain() {
      console.log("Clicked Try Again");
      // this.$router.push("/");
      // debugger;
      let count = 0;
      this.$emit("clicked", count);
    }
  }
};
</script>


<style >
.md-card {
  background: white;
  min-width: 320px;
  max-width: 400px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  border-radius: 20px !important;
}

.md-title {
  font-weight: 900 !important;
  text-align: center;
}

.try-again-btn {
  margin-left: auto !important;
  margin-right: auto !important;
  border: 1px solid black !important;
  border-radius: 10px !important;
  margin-bottom: 16px !important;
}
</style>
