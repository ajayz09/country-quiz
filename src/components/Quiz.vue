<template>
  <div class="quiz-content">
    <h1>COUNTRY QUIZ</h1>
    <div class="quiz-card">
      <md-card md-with-hover>
        <md-card-media v-if="question.flag" style="height:50px;width:100px;margin:20px 0 0 20px;">
          <img v-bind:src="question.flag" alt="People">
        </md-card-media>
        <md-card-header>
          <div class="md-title">{{ question.question }}</div>
        </md-card-header>

        <md-card-content>
          <div v-for="(option,index) in question.options" :key="option.value">
            <md-button
              class="md-flat option-btn"
              v-on:click="clickedOption(index)"
              v-bind:class="{correct: correctAnswer && index==clickedIndex || incorrectAnswer, wrong: incorrectAnswer && index == clickedIndex}"
            >
              <div>
                <span style="float:left;">{{ alphabets[index] }}</span>
                <span>{{ option.value }}</span>
                <span
                  style="float:right;font-size: 16px;"
                  class="material-icons correct-ans"
                  v-if="clickedAnswer && index==clickedIndex "
                >{{displayIcon}}</span>
              </div>
            </md-button>
          </div>
        </md-card-content>

        <md-card-actions v-if="clickedAnswer">
          <md-button class="md-flat next-btn" v-on:click="getNextQuestion()">Next</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import json from "../assets/data.json";

export default {
  name: "Quiz",
  props: {
    msg: String
  },
  data() {
    return {
      alphabets: ["A", "B", "C", "D"],
      clickedAnswer: false,
      questionsArray: json,
      question: [],
      randomNumber: "",
      count: 0,
      clickedIndex: "",
      correctAnswer: false,
      incorrectAnswer: false,
      displayIcon: ""
    };
  },
  created() {
    console.log("Created");
    this.randomNumber = this.getRandomQuestion(
      Object.keys(this.questionsArray).length
    );
    this.question = this.questionsArray[this.randomNumber];
  },
  methods: {
    clickedOption(index) {
      if (!this.clickedAnswer) {
        this.clickedAnswer = true;
        this.clickedIndex = index;
        if (this.question.options[index].value == this.question.answer) {
          console.log("Correct Answer Pressed");
          this.correctAnswer = true;
          this.displayIcon = "check_circle_outline";
        } else {
          this.incorrectAnswer = true;
          this.displayIcon = "highlight_off";
          console.log("Wrong Answer Pressed");
        }
        console.log(this.correctAnswer);
        console.log(this.incorrectAnswer);
      }
    },

    getRandomQuestion(number) {
      return Math.floor(Math.random() * number);
    },
    clearData() {
      this.clickedIndex = "";
      this.clickedAnswer = false;
      this.correctAnswer = false;
      this.incorrectAnswer = false;
    },
    getNextQuestion() {
      this.count = this.count + 1;
      console.log(this.count);
      this.randomNumber = this.getRandomQuestion(
        Object.keys(this.questionsArray).length
      );
      this.question = this.questionsArray[this.randomNumber];
      this.clearData();
    }
  }
};
</script>


<style>
.quiz-content h1 {
  float: left;
  font-weight: 900 !important;
  color: white;
}

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
  font-weight: 700 !important;
  text-align: left;
}

.option-btn {
  color: #767be9;
  border: 1px solid #767be9 !important;
  width: 90%;
  border-radius: 10px !important;
}

.next-btn {
  color: black;
  background-color: #faa827 !important ;
  border-radius: 10px !important;
  margin: -15px 20px 20px 0px !important;
}

.option-btn:hover {
  border: none !important;
  background-color: #faa827;
  color: white;
}

.option-btn .md-button-content {
  width: 100%;
}

.correct {
  background-color: #60bf88 !important;
  border: none !important;
  color: white;
}

.wrong {
  background-color: #ea8282 !important;
  border: none !important;
  color: white;
}
</style>
