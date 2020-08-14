<template>
  <div class="quiz-card">
    <md-card md-with-hover id="results-card">
      <md-card-media style="margin: 20px 50px 0 50px;">
        <img src="../assets/undraw_winners.svg" alt="Flag">
      </md-card-media>
      <md-card-header>
        <div class="md-title" id="results-title">Results</div>
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
        <md-button class="md-flat" id="try-again-btn" v-on:click="tryAgain()">Try again</md-button>
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
      let count = 0;
      this.$emit("clicked", count);
    }
  }
};
</script>


<style >
#results-card {
  background: white;
  min-width: 370px;
  max-width: 400px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  border-radius: 20px;
}

#results-title {
  font-weight: 900;
  text-align: center;
}

#try-again-btn {
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 16px;
}

#try-again-btn:hover {
  border: none !important;
  background-color: #faa827;
  color: white;
}
</style>
