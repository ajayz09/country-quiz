<template>
  <div class="quiz-card">
    <md-card md-with-hover>
      <md-card-media class="md-card-image" v-if="question.flag">
        <img v-bind:src="question.flag" alt="Flag">
      </md-card-media>
      <md-card-header>
        <div class="md-title">{{ question.question }}</div>
      </md-card-header>

      <md-card-content>
        <div v-for="(option,index) in question.options" :key="option.value">
          <md-button
            class="md-flat option-btn"
            v-on:click="clickedOption(index)"
            v-bind:class="{correct:  clickedAnswer && index==correctIndex , wrong: incorrectAnswer && index == clickedIndex}"
          >
            <div>
              <span style="float:left;">{{ alphabets[index] }}</span>
              <span>{{ option.value }}</span>
              <span
                style="float:right;font-size: 16px;"
                class="material-icons correct-ans"
                v-if="clickedAnswer && index==clickedIndex"
                v-bind:class="{hide: clickedAnswer && index==correctIndex}"
              >highlight_off</span>
              <span
                style="float:right;font-size: 16px;"
                class="material-icons correct-ans"
                v-if="clickedAnswer && index==correctIndex"
                v-bind:class="{hide: incorrectAnswer && index == clickedIndex}"
              >check_circle_outline</span>
            </div>
          </md-button>
        </div>
      </md-card-content>

      <md-card-actions v-if="clickedAnswer">
        <md-button class="md-flat next-btn" v-on:click="getNextQuestion()">Next</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import json from "../assets/data.json";

export default {
  name: "Questions",
  props: {
    msg: String
  },
  data() {
    return {
      alphabets: ["A.", "B.", "C.", "D."],
      clickedAnswer: false,
      questionsArray: json,
      question: [],
      randomNumber: "",
      count: 0,
      correctAnswerCount: 0,
      clickedIndex: "",
      correctIndex: "-1",
      correctAnswer: false,
      incorrectAnswer: false
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
    getCorrectIndex(currentQuestion) {
      var index = "-1";
      currentQuestion.options.find(function(item, i) {
        if (item.value === currentQuestion.answer) {
          index = i;
          return i;
        }
      });
      if (index != "-1") {
        return index;
      }
    },
    clickedOption(index) {
      if (!this.clickedAnswer) {
        this.clickedAnswer = true;
        this.correctIndex = this.getCorrectIndex(this.question);

        this.clickedIndex = index;
        if (this.question.options[index].value == this.question.answer) {
          this.correctAnswer = true;
          this.correctAnswerCount = this.correctAnswerCount + 1;
        } else {
          this.incorrectAnswer = true;
        }
      }
    },

    getRandomQuestion(number) {
      return Math.floor(Math.random() * number);
    },

    clearData() {
      this.correctIndex = "-1";
      this.clickedIndex = "";
      this.clickedAnswer = false;
      this.correctAnswer = false;
      this.incorrectAnswer = false;
    },
    getNextQuestion() {
      if (this.count < 4) {
        this.count = this.count + 1;
        console.log(this.count);
        this.randomNumber = this.getRandomQuestion(
          Object.keys(this.questionsArray).length
        );
        this.question = this.questionsArray[this.randomNumber];
        this.clearData();
      } else {
        console.log("Your Scored ", this.correctAnswerCount, "out of 5 tries");
        this.$router.push("Results");
      }
    }
  }
};
</script>


<style scopped>
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

.md-card-image {
  height: 50px;
  width: 100px;
  margin: 20px 0 0 20px;
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
  color: white;
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

.hide {
  visibility: hidden !important;
  width: 0 !important;
}
</style>
