<template>
  <div class="quiz-content">
    <h1>COUNTRY QUIZ</h1>
    <div class="quiz-card">
      <md-card md-with-hover>
        <md-card-header>
          <div class="md-title">Card with hover effect</div>
        </md-card-header>

        <md-card-content>
          <div v-for="(option,index) in options" :key="option.value">
            <md-button class="md-flat md-accent option-btn">
              <div>
                <span style="float:left;">{{ alphabets[index] }}</span>
                <span>{{ option.value }}</span>
              </div>
            </md-button>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  props: {
    msg: String
  },
  data() {
    return {
      options: [
        { value: "Vietnam" },
        { value: "Italy" },
        { value: "India" },
        { value: "Australia" }
      ],
      alphabets: ["A", "B", "C", "D"]
    };
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

.option-btn:hover {
  border: none !important;
  background-color: #faa827;
  color: white;
}

.option-btn .md-button-content {
  width: 100%;
}
</style>
