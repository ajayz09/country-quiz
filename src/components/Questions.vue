<template>
  <div class="quiz-card">
    <md-card md-with-hover id="quiz-ques-card" v-if="count < 5">
      <md-card-media class="md-card-image">
        <div>
          <img
            src="../assets/undraw_adventure.svg"
            style="right:0;top:-100px;height:150px;width:150px;position:absolute;"
            alt="Adventure"
          >
        </div>
        <div id="country-flag" v-if="question.flag">
          <img v-bind:src="question.flag" alt="Flag">
        </div>
      </md-card-media>
      <md-card-header>
        <div
          class="md-title"
          id="ques-title"
          v-bind:class="{questiontitle: !question.flag}"
        >{{ question.question }}</div>
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
        <md-button class="md-flat" id="next-btn" v-on:click="getNextQuestion()">Next</md-button>
      </md-card-actions>
    </md-card>
    <Results
      v-if="count == 5"
      v-bind:correctAnswerCount="correctAnswerCount"
      @clicked="onClickChild"
    ></Results>
  </div>
</template>

<script>
import json from "../assets/data.json";
import Results from "./Results.vue";

function initialState() {
  console.log("Initial State");
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
}

export default {
  name: "Questions",
  props: {
    msg: String
  },
  components: {
    Results
  },

  data() {
    return initialState();
  },
  created() {
    console.log("Created");
    console.log(this.$route.path);
    this.getRandomQuestion();
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

    getRandomQuestion() {
      let number = Object.keys(this.questionsArray).length;
      this.randomNumber = Math.floor(Math.random() * number);
      this.question = this.questionsArray[this.randomNumber];
    },

    clearData() {
      this.correctIndex = "-1";
      this.clickedIndex = "";
      this.clickedAnswer = false;
      this.correctAnswer = false;
      this.incorrectAnswer = false;
    },
    getNextQuestion() {
      this.count = this.count + 1;
      if (this.count < 5) {
        console.log(this.count);
        this.getRandomQuestion();
        this.clearData();
      } else {
        console.log(this.count);
        console.log("Your Scored ", this.correctAnswerCount, "out of 5 tries");
      }
    },
    resetWindow() {
      Object.assign(this.$data, initialState());
      this.getRandomQuestion();
    },
    onClickChild(value) {
      this.count = value;
      this.resetWindow();
    }
  }
};
</script>


<style>
#quiz-ques-card {
  background: white;
  min-width: 370px;
  max-width: 400px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
  border-radius: 20px;
}

#country-flag {
  height: 50px;
  width: 80px;
  margin: 20px 0 0 20px;
  object-fit: contain;
}

#country-flag img {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: block;
  border: 1px solid grey;
}
#ques-title {
  /* margin-top: 20px; */
  font-weight: 700;
  text-align: left;
}

.questiontitle {
  margin-top: 20px !important;
}

.option-btn {
  color: #767be9;
  border: 1px solid #767be9 !important;
  width: 90%;
  border-radius: 10px !important;
}

#next-btn {
  color: white;
  background-color: #faa827;
  border-radius: 10px;
  margin: -15px 20px 20px 0px;
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
